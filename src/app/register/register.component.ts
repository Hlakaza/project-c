import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../services/index';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    regObj: {
        username: ''; // Email
        password: ''; //
        // Company Information
        tradingName: ''; // Trading Name of company
        registeredCompanyName: '';
        registrationNumber: '';
        physicalAddress: '';
        postalAddress: '';
        tel: ''; // business tel
        faxNo: '';
        website: '';
        vatNumber: '';
        // Correspondecne
        accPersonName: '';
        accPersonNo: '';
        accPersonFaxNo: '';
        accPersonEmail: '';
        salesPersonName: '';
        salesPersonNo: '';
        salesPersonEmail: '';
        salesPersonFaxNo: '';
        // documents: File;
    };
    loading = false;
    currentStep = 1;
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }
stepChange(data) {
    this.currentStep = data;
    }
    regValues(data) {
    }
    register() {
        this.loading = true;
        this.userService.create(this.regObj)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
