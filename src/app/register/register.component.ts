import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../services/index';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { vatNumberMatch, regNumberMatch } from '../validators/input-match';
@Component({
    moduleId: module.id.toString(),
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;
    comfirmVatNumber = '';
    comfirmRegNumber = '';
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) {

        //     this.form = new FormGroup({
        //         username: new FormControl(null, Validators.required),
        //         password: new FormControl(null, Validators.required),
        //         tradingName: new FormControl(null, Validators.required),
        //         registeredCompanyName: new FormControl(null, Validators.required),
        //         registrationNumber: new FormControl(null, Validators.required),
        //         comfirmRegNumber: new FormControl({ value: null, disabled: false }, [Validators.required, regNumberMatch]),
        //         physicalAddress: new FormControl(null, Validators.required),
        //         postalAddress: new FormControl(null, Validators.required),
        //         tel: new FormControl(null, Validators.required),
        //         faxNo: new FormControl(null, Validators.required),
        //         vatNumber: new FormControl(null, Validators.required),
        //         website: new FormControl(null, Validators.required),
        //         comfirmVatNumber: new FormControl({ value: null, disabled: false }, [Validators.required, vatNumberMatch]),
        //  });
        }

    register() {
        console.table(this.model);
        this.loading = true;
        this.userService.create(this.model)
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




// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// import { AlertService, UserService } from '../services/index';
// import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
// import { Data } from '@angular/router/src/config';

// @Component({
//     moduleId: module.id.toString(),
//     templateUrl: 'register.component.html'
// })

// export class RegisterComponent {
//     model: any = { };
//     loading = false;
//     // currentStep = 1;
//     constructor(
//         private router: Router,
//         private userService: UserService,
//         private alertService: AlertService) { }

//     // stepChange(data) {
//     //    this.currentStep = data;
//     // }
//     // regValues(data) {
//     // }
//     register() {
//         this.loading = true;
//         console.table(this.model);
//         this.userService.create(this.model)
//         .subscribe(
//             res => {
//                 console.log('Data', this.model);
//                     console.table(this.model);
//                     this.alertService.success('Registration successful', true);
//                     this.router.navigate(['/login']);
//                 },
//                 error => {
//                     this.alertService.error(error);
//                     this.loading = false;
//                     console.table(this.model);
//                 });
//     }
//     // submit() {
//     //     console.table(this.model);
//     //     // console.table(this.acct.getAcctProperty('all'));
//     //     // console.table(this.user.getUser());
//     //   }
// }
