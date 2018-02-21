import {Component, OnInit, ViewChild, ElementRef, Renderer, AfterViewInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {ToastsManager} from 'ng2-toastr';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';
import {User} from '../../auth/user.model';
import { emailValidator } from '../../validators/input-match';
import {AdminService} from '../../admin/services/admin.service';
@Component({
  selector   : 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, AfterViewInit {
  loading: boolean;
  myForm: FormGroup;
  email: FormControl;
  userId: string;
  password: FormControl;
  @ViewChild('userEmail') userEmail: ElementRef;

  constructor(private fb: FormBuilder, private authService: AuthService,
              private router: Router, private toastr: ToastsManager, private adminService: AdminService, private renderer: Renderer) {
  }

  ngOnInit() {
    this.loading = false;
    this.email    = new FormControl('', [Validators.required, emailValidator]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(6)]);

    this.myForm = this.fb.group({
      email   : this.email,
      password: this.password
    });

    // check if the user is logged in while trying to access the login page, if the user is logged in, we redirect him to the form page
    if (this.authService.isLoggedIn()) {
      this.toastr.info('You are already logged in');
      this.router.navigate(['/']);
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.renderer.invokeElementMethod(this.userEmail.nativeElement, 'focus', []);
    }, 50);
  }

  // submit the login form with the user credentials and navigate the user to the index page of our app
  onSubmit() {
    this.loading = true;
    const user = new User(this.myForm.value.email, this.myForm.value.password);
    this.authService.signin(user)
      .subscribe(
        data => {
          // if the user credentials are correct, set the localStorage token and userId,
          // we need these info in order to do stuff later when the user is signed in and verified
          localStorage.setItem('id_token', data.token);
          localStorage.setItem('userId', data.user._id);
          localStorage.setItem('email', data.user.email);
          localStorage.setItem('role', data.user.role[0]);
          // navigate user to index page of our app
          if (this.adminService.isAdmin()) {
            this.router.navigate(['admin']);
          } else {
            this.router.navigate(['/form']);
          }
          // display toastr success message pop up to inform the user that he logged in successfully
          this.toastr.success('You have been logged in!');
        },
        error => console.log(error)
      );

  }
}
