import {Component, ViewContainerRef} from '@angular/core';
import {ToastsManager} from 'ng2-toastr';
import { AuthService } from './auth/auth.service';
import { AdminService } from './admin/services/admin.service';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private adminService: AdminService,
    public toastr: ToastsManager,
    public vRef: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vRef);
  }
    // check if user is logged in by asking our authentication service, we use this function in html file *ngIf directive
    isLoggedIn() {
      return this.authService.isLoggedIn();
    }
    isAdmin() {
      return this.adminService.isAdmin();
    }
}
