import { Component, ElementRef, EventEmitter, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {ProfileService} from './profile.service';
import {UserProfile} from './userProfile.model';
import {Router} from '@angular/router';
import {ToastsManager} from 'ng2-toastr';
import {BASE_URL, USER_API_URL} from '../../config/config';
import { AuthService } from '../../auth/auth.service';
import { FormService } from '../../form/form.service';
import { AdminService } from '../../admin/services/admin.service';
import { FormArray } from '@angular/forms/src/model';

@Component({
  selector   : 'app-userprofile',
  templateUrl: './userProfile.component.html',
  styleUrls  : ['./userProfile.component.css']
})
export class UserProfileComponent implements OnInit, AfterViewInit {
  private userId: string = localStorage.getItem('userId');
  private token: string = localStorage.getItem('id_token');
  user: UserProfile;
  fetchedUser: any[] = [];
  fetchedForms: any[] = [];
  constructor(private profileService: ProfileService,
              private router: Router,
              private toastr: ToastsManager,
              private authService: AuthService,
              private adminService: AdminService,
             private formService: FormService) {
  }

  ngOnInit() {
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
  ngAfterViewInit() {
    setTimeout(() => {
      this.formService.getUserForms()
      .subscribe(
        res => {
          const formArray = [];
          // tslint:disable-next-line:forin
          for (let key in res) {
            formArray.push(res[key]);
          }
             this.fetchedForms = formArray;
        },
        err => {
          this.fetchedForms = JSON.parse(localStorage.getItem('fetchedForms'));
        }
      );
    }, 500);
  }

  logout() {
    return this.authService.logout();
  }
  isAdmin() {
    return this.adminService.isAdmin();
  }
}

