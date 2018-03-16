import {Component, OnInit, AfterViewInit} from '@angular/core';
import {FormService} from '../../form/form.service';
import { AuthService } from '../../auth/auth.service';
import { ProfileService } from '../../user/profile/profile.service';
import {BASE_URL, FORMS_API_URL} from '../../config/config';
import { parse } from 'babylon';
import { empty } from 'rxjs/Observer';
import { Router, RouterModule } from '@angular/router';
import { Toast } from 'ng2-toastr/src/toast';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { window } from 'rxjs/operator/window';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@Component({
  selector   : 'app-user-form',
  templateUrl: './userForms.component.html',
  styleUrls  : ['./userForms.component.css']
})
export class UserFormsComponent implements OnInit, AfterViewInit {
  baseUrl   = `${BASE_URL}`;
  fetchedForms = [];
  fetchedUser = [];
  hasForms = [];
  addDetails: boolean;
  userId = localStorage.getItem('userId');
  fileUrl = `${BASE_URL}/uploads/forms/${this.userId}/`;
  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
    private formService: FormService,
    private router: Router,
    private toastr: ToastsManager) {
      this.addDetails = true;
    }


  ngAfterViewInit() {
       // this.userId = localStorage.getItem('userId');
       if (this.authService.isLoggedIn()) {
        this.profileService.getUserDetails(this.userId)
          .subscribe(
            (data => {
              const userArray = [];
              // tslint:disable-next-line:forin
              for (let key in data) {
                userArray.push(data[key]);
              }
              this.fetchedUser = userArray;
              localStorage.setItem('forms', JSON.stringify(data.user.forms[0]));
            })
          );
      }

      this.formService.getUserForms()
      .subscribe(
        res => {
          const formArray = [];
          // tslint:disable-next-line:forin
          for (let key in res) {
            formArray.push(res[key]);
          }
          this.fetchedForms = formArray;
          if (formArray.length === 0 ) {
              this.addDetails = true;
              this.router.navigateByUrl('/form')
          }else {
            this.addDetails = false;
          }
        },
      err => {
          this.fetchedForms = JSON.parse(localStorage.getItem('fetchedForms'));
          if (this.fetchedForms.length === 0 ) {
            this.addDetails = true;
            this.router.navigateByUrl('/form')
        } else {
          this.addDetails = false;
        }
      })
  }
  logout() {
    return this.authService.logout();
  }
  onDelete(formId) {
    this.formService.deleteForm(formId)
      .subscribe();
  }
  ngOnInit() {
    // Redirect to Add details if details do not exist
}

}
