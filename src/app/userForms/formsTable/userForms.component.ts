import {Component, OnInit, AfterViewInit} from '@angular/core';
import {FormService} from '../../form/form.service';
import { AuthService } from '../../auth/auth.service';
import { ProfileService } from '../../user/profile/profile.service';
import {BASE_URL, FORMS_API_URL} from '../../config/config';

@Component({
  selector   : 'app-user-form',
  templateUrl: './userForms.component.html',
  styleUrls  : ['./userForms.component.css']
})
export class UserFormsComponent implements OnInit, AfterViewInit {
  baseUrl   = `${BASE_URL}`;
  fetchedForms = [];
  fetchedUser = [];
  userId = '';
  fileUrl = `${BASE_URL}/uploads/forms/${this.userId}/`;
  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
    private formService: FormService) {
      let userId = localStorage.getItem('userId');
    }

  ngOnInit() {}
  ngAfterViewInit() {
    setTimeout(() => {
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
            })
          );
      }
      this.formService.getUserForms()
      .subscribe(
        forms => this.fetchedForms = forms,
        error => console.log(error));
    }, 50);
  }
  logout() {
    return this.authService.logout();
  }
  onDelete(formId) {
    this.formService.deleteForm(formId)
      .subscribe();
  }

}
