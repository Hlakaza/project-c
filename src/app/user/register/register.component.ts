import {Component, OnInit, Renderer, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {ToastsManager} from 'ng2-toastr';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';
import {User} from '../../auth/user.model';
import { passwordMatch, emailValidator } from '../../validators/input-match';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {
  loginR: any;
  loading: boolean;
  myForm: FormGroup;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  @ViewChild('userEmail') userEmail: ElementRef;

  constructor(private _fb: FormBuilder, private _authService: AuthService,
              private _router: Router, private toastr: ToastsManager, private renderer: Renderer) {
  }

  ngOnInit() {
    this.loading = false;
    // if the user tries to hit the register page, first we check if he is logged in or not, if he is then we redirect him to the form page
    if (this._authService.isLoggedIn()) {
      this._router.navigateByUrl('/form');
    }

    this.email = new FormControl('', [Validators.required, emailValidator]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this.confirmPassword = new FormControl({ value: null, disabled: false }, [Validators.required, passwordMatch])
    this.myForm = this._fb.group({
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.renderer.invokeElementMethod(this.userEmail.nativeElement, 'focus', []);
    }, 50);
  }

  // submit the register form to the backend with the user's desired credentials
  onSubmit() {
    this.loading = true;
    const user = new User(this.myForm.value.email, this.myForm.value.password);
    this._authService.signup(user)
      .subscribe(
        data => {
          // after successfull registration, the user is redirected to the login page
          this._router.navigate(['/']);

          // toastr message pops up to inform user that the registration was successfull
          this.toastr.success('Please Login', 'Registration Successfull');
        }
      );
  }
}
