import { Component, OnInit } from '@angular/core';
import { FormService } from '../../form/form.service';
import { AuthService } from '../../auth/auth.service';
import { ProfileService } from '../../user/profile/profile.service';
import { AdminService } from '../../admin/services/admin.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  fetchedUser = [];
  fetchedForms = [];
  constructor(
    private formService: FormService,
    private authService: AuthService,
    private adminService: AdminService,
    private profileService: ProfileService) { }

  ngOnInit() {
    setTimeout(() => {
      if (this.authService.isLoggedIn()) {
        let userId = localStorage.getItem('userId');
        this.profileService.getUserDetails(userId)
          .subscribe(
            (data => {
              const userArray = [];
              // tslint:disable-next-line:forin
              for (let key in data) {
                userArray.push(data[key]);
                console.log('User', data)
              }
              this.fetchedUser = userArray;
            })
          );
      }
      this.formService.getUserForms()
      .subscribe(
        forms => {
          this.fetchedForms = forms
        },
        error => {
          this.fetchedForms = JSON.parse(localStorage.getItem('fetchedForms'));
        });
    }, 50);
  }
  isAdmin() {
    return this.adminService.isAdmin();
  }
}
