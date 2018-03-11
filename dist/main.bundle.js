webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"sidebar\">\r\n    <div class=\"white-label\">\r\n        <img src=\"http://clinixmyvoice.co.za/system/uploads/Clinix%20Health%20Academy/images/logo_white.png\" alt=\"Clinix\">\r\n    </div>\r\n    <div id=\"sidebar-nav\">\r\n        <ul>\r\n            <li class=\"active\"><a class=\"marg-6 btn btn-deep-orange \" routerLink=\"/admin\">All Vendors</a></li>\r\n            <!-- <li><a class=\"marg-6 spacing-top btn btn-blue-grey\" routerLink=\"/user/forms\"> Profile</a></li> -->\r\n        </ul>\r\n    </div>\r\n</section>\r\n<section id=\"content\">\r\n    <div id=\"header\">\r\n        <div class=\"header-nav\">\r\n            <div class=\"menu-button\">\r\n                <!--<i class=\"fa fa-navicon\"></i>-->\r\n            </div>\r\n            <div class=\"widget-nav\">\r\n                <ul>\r\n                    <li class=\"widget-nav-item nav-chat\">\r\n                        <div (click)=\"logout()\" class=\"cursor-pointer font-icon\"><i class=\"fa fa-sign-out-alt\"></i> Logout</div>\r\n                    </li>\r\n                    <li class=\"widget-nav-item nav-profile\">\r\n                        <div class=\"nav-profile-image\">\r\n                            <img src=\"../../assets/images/User_Avatar.png\" alt=\"profile image\">\r\n                            <div class=\"nav-profile-name\">Admin <i class=\"fa fa-caret-down\"></i></div>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"content\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var auth_service_1 = __webpack_require__("./src/app/auth/auth.service.ts");
var AdminComponent = (function () {
    function AdminComponent(authService) {
        this.authService = authService;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.logout = function () {
        return this.authService.logout();
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    core_1.Component({
        selector: 'app-admin',
        template: __webpack_require__("./src/app/admin/admin.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object])
], AdminComponent);
exports.AdminComponent = AdminComponent;
var _a;
//# sourceMappingURL=E:/github/project-c/src/admin.component.js.map

/***/ }),

/***/ "./src/app/admin/admin.routes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var adminGuard_1 = __webpack_require__("./src/app/admin/services/adminGuard.ts");
var editUsersForms_component_1 = __webpack_require__("./src/app/admin/editUsersForms/editUsersForms.component.ts");
var adminPage_component_1 = __webpack_require__("./src/app/admin/adminPage/adminPage.component.ts");
exports.ADMIN_ROUTES = [
    { path: '', component: adminPage_component_1.AdminPageComponent, canActivate: [adminGuard_1.AdminGuardService] },
    { path: 'view/:id', component: editUsersForms_component_1.EditUsersFormsComponent, canActivate: [adminGuard_1.AdminGuardService] }
];
//# sourceMappingURL=E:/github/project-c/src/admin.routes.js.map

/***/ }),

/***/ "./src/app/admin/adminForms.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Form = (function () {
    function Form(// public textInputOne: string,
        //             public textInputTwo: string,
        tradingName, registeredCompanyName, registrationNumber, physicalAddress, postalAddress, tel, faxNo, website, vatNumber, accPersonName, accPersonNo, accPersonFaxNo, accPersonEmail, salesPersonName, salesPersonNo, salesPersonEmail, salesPersonFaxNo, fileUp, userId, formId) {
        this.tradingName = tradingName;
        this.registeredCompanyName = registeredCompanyName;
        this.registrationNumber = registrationNumber;
        this.physicalAddress = physicalAddress;
        this.postalAddress = postalAddress;
        this.tel = tel;
        this.faxNo = faxNo;
        this.website = website;
        this.vatNumber = vatNumber;
        this.accPersonName = accPersonName;
        this.accPersonNo = accPersonNo;
        this.accPersonFaxNo = accPersonFaxNo;
        this.accPersonEmail = accPersonEmail;
        this.salesPersonName = salesPersonName;
        this.salesPersonNo = salesPersonNo;
        this.salesPersonEmail = salesPersonEmail;
        this.salesPersonFaxNo = salesPersonFaxNo;
        this.fileUp = fileUp;
        this.userId = userId;
        this.formId = formId;
        this.tradingName = tradingName;
        this.registeredCompanyName = registeredCompanyName;
        this.registrationNumber = registrationNumber;
        this.physicalAddress = physicalAddress;
        this.postalAddress = postalAddress;
        this.tel = tel;
        this.faxNo = faxNo;
        this.website = website;
        this.vatNumber = vatNumber;
        this.accPersonName = accPersonName;
        this.accPersonNo = accPersonNo;
        this.accPersonFaxNo = accPersonFaxNo;
        this.accPersonEmail = accPersonEmail;
        this.salesPersonName = salesPersonName;
        this.salesPersonNo = salesPersonNo;
        this.salesPersonEmail = salesPersonEmail;
        this.salesPersonFaxNo = salesPersonFaxNo;
        this.fileUp = fileUp;
        this.userId = userId;
        this.formId = formId;
    }
    return Form;
}());
exports.Form = Form;
//# sourceMappingURL=E:/github/project-c/src/adminForms.model.js.map

/***/ }),

/***/ "./src/app/admin/adminPage/adminPage.component.css":
/***/ (function(module, exports) {

module.exports = ".topPad {\r\n  padding-top: 100px !important;\r\n}\r\n\r\n.topMargin {\r\n  margin-top: 20px;\r\n}\r\n\r\n.img-resized {\r\n  width: 10%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/adminPage/adminPage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pad-top-header\">\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n\r\n            <!--Table-->\r\n            <table class=\"table table-hover table-responsive-md table-fixed\">\r\n\r\n                <!--Table head-->\r\n                <thead>\r\n                    <tr>\r\n                        <!-- <th>#</th> -->\r\n                        <th>Company Name</th>\r\n                        <th>Work Telephone</th>\r\n                        <th>Contact Pesron</th>\r\n                        <th>Website</th>\r\n                        <th>Date Registered</th>\r\n                        <th>&nbsp;&nbsp;</th>\r\n                    </tr>\r\n                </thead>\r\n                <!--Table head-->\r\n\r\n                <!--Table body-->\r\n                <tbody>\r\n                    <tr *ngFor=\"let form of fetchedForms\">\r\n                        <!-- <th scope=\"row\">1</th> -->\r\n                        <td>{{form.tradingName}}</td>\r\n                        <td>{{form.tel}}</td>\r\n                        <td>{{form.accPersonName}}</td>\r\n                        <td>{{form.website}}</td>\r\n                        <td>{{form.dateSubmitted | date: 'medium'}}</td>\r\n                        <td> <button class=\"btn btn-tiny btn-default\" [routerLink]=\"['view', form._id]\"><i class=\"fa fa-eye\"></i></button></td>\r\n                    </tr>\r\n                </tbody>\r\n                <!--Table body-->\r\n\r\n            </table>\r\n            <!--Table-->\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/adminPage/adminPage.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var admin_service_1 = __webpack_require__("./src/app/admin/services/admin.service.ts");
var AdminPageComponent = (function () {
    function AdminPageComponent(adminService) {
        this.adminService = adminService;
        this.fetchedForms = [];
    }
    AdminPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getUserForms()
            .subscribe(function (forms) { return _this.fetchedForms = forms; }, function (error) {
            console.log(error);
        });
    };
    AdminPageComponent.prototype.onDelete = function (formId) {
        this.adminService.deleteForm(formId)
            .subscribe();
    };
    return AdminPageComponent;
}());
AdminPageComponent = __decorate([
    core_1.Component({
        selector: 'app-admin',
        template: __webpack_require__("./src/app/admin/adminPage/adminPage.component.html"),
        styles: [__webpack_require__("./src/app/admin/adminPage/adminPage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof admin_service_1.AdminService !== "undefined" && admin_service_1.AdminService) === "function" && _a || Object])
], AdminPageComponent);
exports.AdminPageComponent = AdminPageComponent;
var _a;
//# sourceMappingURL=E:/github/project-c/src/adminPage.component.js.map

/***/ }),

/***/ "./src/app/admin/editUsersForms/editUsersForms.component.css":
/***/ (function(module, exports) {

module.exports = ".topPad {\r\n  padding-top: 100px !important;\r\n}\r\n\r\n.topMargin {\r\n  margin-top: 20px;\r\n}\r\n\r\n.img-resized {\r\n  width: 10%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/editUsersForms/editUsersForms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <!-- <form [formGroup]=\"myForm\" (ngSubmit)=\"submitEditedForm()\" *ngFor=\"let form of fetchedForm\" class=\"form-horizontal register-form\" novalidate>\r\n        <fieldset>\r\n            <legend class=\"text-center topPad\">Edit Form with id: {{form._id}}</legend>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-4 control-label\" for=\"textInputOne\">Text Input One:</label>\r\n                <div class=\"col-md-4\">\r\n                    <input id=\"textInputOne\" #textOne formControlName=\"textInputOne\" name=\"textInputOne\" type=\"text\" [(ngModel)]=\"form.textInputOne\" class=\"form-control input-md\">\r\n                    <div [hidden]=\"textInputOne.valid || textInputOne.pristine\" class=\"alert alert-danger\">Please enter some text</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-4 control-label\" for=\"textInputTwo\">Text Input Two:</label>\r\n                <div class=\"col-md-4\">\r\n                    <input id=\"textInputTwo\" formControlName=\"textInputTwo\" name=\"textInputTwo\" type=\"text\" [(ngModel)]=\"form.textInputTwo\" class=\"form-control input-md\">\r\n                    <div [hidden]=\"textInputTwo.valid || textInputTwo.pristine\" class=\"alert alert-danger\">Please enter some text</div>\r\n                </div>\r\n            </div>\r\n\r\n            image\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-4 col-centered\">\r\n                    <div class=\"profilePictureTempEdit\">\r\n                        <button *ngIf=\"submitStarted\" class=\"disabled btn-no-hover btn btn-default centered progress-button\">\r\n              <i class=\"fa fa-circle-o-notch fa-spin fa-fw\"></i> Please wait... <span class=\"progress-percent\">{{progress}}%</span>\r\n            </button>\r\n                        <div class=\"text-center top-margin\">\r\n                            <div class=\"profilePictureTempEdit\" *ngIf=\"oldImage\">\r\n                                <img class=\"img-responsive\" src=\"./uploads/forms/{{form.owner}}/{{form.imagePath}}\" alt=\"image\" onerror=\"this.src ='assets/images/no-image.jpg';\">\r\n                                <div class=\"upload-button\" *ngIf=\"!imageReady\">\r\n                                    <input type=\"file\" name=\"file-1\" id=\"file-1\" class=\"inputfile4 inputfile-4\" (change)=\"onFileSelect($event)\">\r\n                                    <label for=\"file-1\">\r\n                <span>\r\n                </span>\r\n                  </label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"profilePictureTempEdit\">\r\n                                <img *ngIf=\"imageReady\" #image class=\"img-responsive\" src=\"{{imageUrl}}{{imagePath}}\" alt=\"image\" onerror=\"this.src ='assets/images/no-image.jpg';\" />\r\n                                <div class=\"upload-button\">\r\n                                    <input type=\"file\" name=\"file-2\" id=\"file-2\" class=\"inputfile4 inputfile-4\" (change)=\"onFileSelect($event)\">\r\n                                    <label for=\"file-2\">\r\n                  <span>\r\n                  </span>\r\n                  </label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div> -->\r\n\r\n    <!-- Submit Button -->\r\n    <!-- <div class=\"form-group\">\r\n                <div class=\"col-md-4 col-centered\">\r\n                    <button type=\"submit\" [disabled]=\"!myForm.valid && myForm.untouched\" id=\"submitForm\" name=\"sumbitForm\" class=\"btn btn-primary text-center bottomMargin\">Submit</button>\r\n                    <button type=\"button\" class=\"btn btn-warning\" (click)=\"cancel()\">Cancel</button>\r\n                </div>\r\n            </div>\r\n        </fieldset>\r\n    </form> -->\r\n\r\n\r\n    <!--////////////////////////////////////////////////-->\r\n    <div class=\"pad-top-header\">\r\n        <div class=\"main-content\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"col-sm-12\">\r\n                    <!-- <h4 class=\"title\">Welcome Admin\r\n                    </h4>\r\n                    <p class=\"category\">List of Registered Users And Their Details</p> -->\r\n                    <div class=\"card spacing-bottom\" *ngFor=\"let form of fetchedForm\">\r\n                        <div class=\"card-header\" data-background-color=\"red\">\r\n                            <h4 class=\"title\">Vendor: {{form.tradingName}}\r\n                            </h4>\r\n                        </div>\r\n                        <div class=\"card-content table-responsive table-full-width\">\r\n                            <table class=\"table\">\r\n                                <thead class=\"text-danger\">\r\n                                    <th>Company Information</th>\r\n                                    <th>Correspondecne</th>\r\n                                    <th>Documents</th>\r\n                                    <th>Received</th>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td>Trading Name: {{form.tradingName}}</td>\r\n                                        <td>Acc PersonName: {{form.accPersonName}}</td>\r\n                                        <td>Doc: Customer General Terms and Conditions of Supply</td>\r\n                                        <td width=\"30\">\r\n                                            <!-- Filled-in checkbox -->\r\n                                            <div class=\"form-group mr-3\">\r\n                                                <input type=\"checkbox\" checked id=\"inlineFormCheckbox1\">\r\n                                                <label for=\"inlineFormCheckbox1\"></label>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Registered Name: {{form.tradingName}}</td>\r\n                                        <td>Acc Person No: {{form.accPersonNo}}</td>\r\n                                        <td>Doc: BEE Certificate</td>\r\n\r\n                                        <td width=\"30\">\r\n                                            <!-- Filled-in checkbox -->\r\n                                            <div class=\"form-group mr-3\">\r\n                                                <input type=\"checkbox\" checked id=\"inlineFormCheckbox2\">\r\n                                                <label for=\"inlineFormCheckbox2\"></label>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Physical Address: {{form.physicalAddress}}</td>\r\n                                        <td>Acc Person Fax No: {{form.accPersonFaxNo}}</td>\r\n                                        <td>Doc: Letter of Good Standing</td>\r\n                                        <td width=\"30\">\r\n                                            <!-- Filled-in checkbox -->\r\n                                            <div class=\"form-group mr-3\">\r\n                                                <input type=\"checkbox\" checked id=\"inlineFormCheckbox3\">\r\n                                                <label for=\"inlineFormCheckbox3\"></label>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Postal Address: {{form.postalAddress}}</td>\r\n                                        <td>Acc Person Email: {{form.accPersonEmail}}</td>\r\n                                        <td>Doc: Audited latest Financial Statements</td>\r\n                                        <td width=\"30\">\r\n                                            <!-- Filled-in checkbox -->\r\n                                            <div class=\"form-group mr-3\">\r\n                                                <input type=\"checkbox\" checked id=\"inlineFormCheckbox4\">\r\n                                                <label for=\"inlineFormCheckbox4\"></label>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Tel: {{form.tel}}</td>\r\n                                        <td>Sales Person Name: {{form.salesPersonName}}</td>\r\n                                        <td>Doc: Proof of Banking Details</td>\r\n                                        <td width=\"30\">\r\n                                            <!-- Filled-in checkbox -->\r\n                                            <div class=\"form-group mr-3\">\r\n                                                <input type=\"checkbox\" checked id=\"inlineFormCheckbox5\">\r\n                                                <label for=\"inlineFormCheckbox5\"></label>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Fax: {{form.faxNo}}</td>\r\n                                        <td>Sales Person No: {{form.salesPersonNo}}</td>\r\n                                        <td>Doc: Company Letterhead</td>\r\n                                        <td width=\"30\">\r\n                                            <!-- Filled-in checkbox -->\r\n                                            <div class=\"form-group mr-3\">\r\n                                                <input type=\"checkbox\" checked id=\"inlineFormCheckbox6\">\r\n                                                <label for=\"inlineFormCheckbox6\"></label>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Website: {{form.website}}</td>\r\n                                        <td>Sales Person FaxNo: {{form.salesPersonFaxNo}}</td>\r\n                                        <td>Doc: Tax Certificate</td>\r\n                                        <td width=\"30\">\r\n                                            <!-- Filled-in checkbox -->\r\n                                            <div class=\"form-group mr-3\">\r\n                                                <input type=\"checkbox\" checked id=\"inlineFormCheckbox7\">\r\n                                                <label for=\"inlineFormCheckbox7\"></label>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Vat Number: {{form.vatNumber}}</td>\r\n                                        <td>Sales Person Email: {{form.salesPersonEmail}}</td>\r\n                                        <td>Doc: MCC Certificate</td>\r\n                                        <td width=\"30\">\r\n                                            <!-- Filled-in checkbox -->\r\n                                            <div class=\"form-group mr-3\">\r\n                                                <input type=\"checkbox\" checked id=\"inlineFormCheckbox8\">\r\n                                                <label for=\"inlineFormCheckbox8\"></label>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>&nbsp;&nbsp;&nbsp;</td>\r\n                                        <td>&nbsp;&nbsp;&nbsp;</td>\r\n                                        <td>Doc: Declaration of possible conflict of Interest with Clinix Health Group (CHG)</td>\r\n                                        <td width=\"30\">\r\n                                            <!-- Filled-in checkbox -->\r\n                                            <div class=\"form-group mr-3\">\r\n                                                <input type=\"checkbox\" checked id=\"inlineFormCheckbox88\">\r\n                                                <label for=\"inlineFormCheckbox88\"></label>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>&nbsp;&nbsp;&nbsp;</td>\r\n                                        <td>&nbsp;&nbsp;&nbsp;</td>\r\n                                        <td>Doc: identity Documents</td>\r\n                                        <td width=\"30\">\r\n                                            <!-- Filled-in checkbox -->\r\n                                            <div class=\"form-group mr-3\">\r\n                                                <input type=\"checkbox\" checked id=\"inlineFormCheckbox9\">\r\n                                                <label for=\"inlineFormCheckbox9\"></label>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>&nbsp;&nbsp;&nbsp;</td>\r\n                                        <td>&nbsp;&nbsp;&nbsp;</td>\r\n                                        <td>Doc: Product price lists </td>\r\n                                        <td width=\"30\">\r\n                                            <!-- Filled-in checkbox -->\r\n                                            <div class=\"form-group mr-3\">\r\n                                                <input type=\"checkbox\" checked id=\"inlineFormCheckbox99\">\r\n                                                <label for=\"inlineFormCheckbox99\"></label>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <button class=\"btn btn-primary\" disabled [routerLink]=\"['view', form._id]\"><i class=\"fa fa-check\"></i>Aprove</button>\r\n                                        </td>\r\n                                        <td>\r\n                                            <button class=\"btn btn-danger\" disabled (click)=\"onDelete(form._id)\"><i class=\"fa fa-trash\"></i>Disaprove</button>\r\n                                        </td>\r\n                                        <td>&nbsp;&nbsp;&nbsp;</td>\r\n                                        <td>&nbsp;&nbsp;&nbsp;</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/admin/editUsersForms/editUsersForms.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var ng2_toastr_1 = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var admin_service_1 = __webpack_require__("./src/app/admin/services/admin.service.ts");
var config_1 = __webpack_require__("./src/app/config/config.ts");
var adminForms_model_1 = __webpack_require__("./src/app/admin/adminForms.model.ts");
var input_match_1 = __webpack_require__("./src/app/validators/input-match.ts");
var EditUsersFormsComponent = (function () {
    function EditUsersFormsComponent(adminService, toastr, fb, router, route, renderer) {
        this.adminService = adminService;
        this.toastr = toastr;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.renderer = renderer;
        this.onClear = new core_1.EventEmitter();
        this.fetchedForm = [];
        this.token = localStorage.getItem('id_token');
        this.url = config_1.FORMS_API_URL + "/image";
        this.imageUrl = config_1.BASE_URL + "/uploads/tmp/";
        this.maxSize = 5000000;
        this.invalidFileSizeMessage = '{0}: Invalid file size, ';
        this.invalidFileSizeMessageDetail = 'Maximum upload size is {0}.';
        this.progress = 0;
        this.imageReady = false;
        this.oldImage = true;
    }
    EditUsersFormsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formId = this.route.snapshot.params['id'];
        this.adminService.getSingleForm(this.formId)
            .subscribe((function (data) {
            var formArray = [];
            // tslint:disable-next-line:forin
            for (var key in data) {
                formArray.push(data[key]);
            }
            _this.fetchedForm = formArray;
        }));
        this.myForm = this.fb.group({
            tradingName: new forms_1.FormControl(null, forms_1.Validators.required),
            registeredCompanyName: new forms_1.FormControl(null, forms_1.Validators.required),
            registrationNumber: new forms_1.FormControl(null, forms_1.Validators.required),
            confirmRegNumber: new forms_1.FormControl({ value: null, disabled: false }, [forms_1.Validators.required, input_match_1.regNumberMatch]),
            physicalAddress: new forms_1.FormControl(null, forms_1.Validators.required),
            postalAddress: new forms_1.FormControl(null, forms_1.Validators.required),
            tel: new forms_1.FormControl(null, forms_1.Validators.required),
            faxNo: new forms_1.FormControl(null, forms_1.Validators.required),
            vatNumber: new forms_1.FormControl(null, forms_1.Validators.required),
            website: new forms_1.FormControl(null, forms_1.Validators.required),
            confirmVatNumber: new forms_1.FormControl({ value: null, disabled: false }, [forms_1.Validators.required, input_match_1.vatNumberMatch]),
            accPersonName: new forms_1.FormControl(null, forms_1.Validators.required),
            accPersonNo: new forms_1.FormControl(null, forms_1.Validators.required),
            accPersonFaxNo: new forms_1.FormControl(null, forms_1.Validators.required),
            accPersonEmail: new forms_1.FormControl(null, forms_1.Validators.required),
            salesPersonName: new forms_1.FormControl(null, forms_1.Validators.required),
            salesPersonNo: new forms_1.FormControl(null, forms_1.Validators.required),
            salesPersonEmail: new forms_1.FormControl(null, forms_1.Validators.required),
            salesPersonFaxNo: new forms_1.FormControl(null, forms_1.Validators.required),
        });
    };
    // focus on first input box after the view is initialized
    EditUsersFormsComponent.prototype.ngAfterViewInit = function () {
        // setTimeout(() => {
        //   this.renderer.invokeElementMethod(this.textOne.nativeElement, 'focus', []);
        // }, 50);
    };
    // cancel and return to the user's forms page
    EditUsersFormsComponent.prototype.cancel = function () {
        this.router.navigate(['user/forms']);
    };
    // event fired when the user selects an image
    EditUsersFormsComponent.prototype.onFileSelect = function (event) {
        var _this = this;
        this.submitStarted = true;
        this.clear();
        var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        var _loop_1 = function (i) {
            var file = files[i];
            if (this_1.validate(file)) {
                if (this_1.isFile(file)) {
                    this_1.files.push(files[i]);
                    var xhr_1 = new XMLHttpRequest();
                    var formData = new FormData();
                    // tslint:disable-next-line:no-shadowed-variable
                    for (var i_1 = 0; i_1 < this_1.files.length; i_1++) {
                        formData.append('fileUp', this_1.files[i_1], this_1.files[i_1].name);
                    }
                    xhr_1.onreadystatechange = function () {
                        if (xhr_1.readyState === 4) {
                            _this.progress = 0;
                            if (xhr_1.status === 201) {
                                _this.imagePath = xhr_1.response.replace(/^"|"$/g, '');
                                _this.imageReady = true;
                                _this.oldImage = false;
                                _this.submitStarted = false;
                            }
                            else if (xhr_1.status !== 201) {
                                _this.toastr.error('There was an error, please try again later');
                                _this.submitStarted = false;
                                _this.oldImage = true;
                                _this.clear();
                            }
                            _this.clear();
                        }
                    };
                    xhr_1.upload.addEventListener('progress', function (e) {
                        if (e.lengthComputable) {
                            _this.progress = Math.round((e.loaded * 100) / e.total);
                        }
                    }, false);
                    xhr_1.open('POST', this_1.url, true);
                    xhr_1.setRequestHeader('Authorization', 'JWT ' + this_1.token);
                    xhr_1.send(formData);
                }
            }
            else if (!this_1.isFile(file)) {
                this_1.toastr.error('Only pdf, doc, jpep and png are allowed');
            }
        };
        var this_1 = this;
        for (var i = 0; i < files.length; i++) {
            _loop_1(i);
        }
    };
    // clears the form
    EditUsersFormsComponent.prototype.clear = function () {
        this.files = [];
        this.onClear.emit();
    };
    // check if the file is actually an image, pdf or doc by checking the mime type
    EditUsersFormsComponent.prototype.isFile = function (file) {
        if (!file.type.match(/.jpeg|.jpg|.png|.doc|.docx|.gif/)) {
            this.toastr.error('Only pdf, doc, jpep and png are allowed');
            return false;
        }
        return true;
    };
    // check if the form has files ready to be uploaded
    EditUsersFormsComponent.prototype.hasFiles = function () {
        if (typeof this.files !== 'number') {
            return this.files && this.files.length > 0;
        }
    };
    // remove the image from the preview
    EditUsersFormsComponent.prototype.remove = function (index) {
        this.files.splice(index, 1);
        this.fileInput.nativeElement.value = '';
    };
    // check the image file size
    EditUsersFormsComponent.prototype.validate = function (file) {
        if (this.maxSize && file.size > this.maxSize) {
            this.toastr.error(this.invalidFileSizeMessageDetail.replace('{0}', this.formatSize(this.maxSize)), this.invalidFileSizeMessage.replace('{0}', file.name));
            this.submitStarted = false;
            return false;
        }
        return true;
    };
    // format the size to display it in toastr in case the user uploaded a file bigger than 5MB
    EditUsersFormsComponent.prototype.formatSize = function (bytes) {
        if (bytes === 0) {
            return '0 B';
        }
        var k = 1000, dm = 3, sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };
    // submit the form to back end
    EditUsersFormsComponent.prototype.submitEditedForm = function () {
        var _this = this;
        this.submitStarted = true;
        var editForm = new adminForms_model_1.Form(
        // this.myForm.value.textInputOne,
        // this.myForm.value.textInputTwo,
        this.myForm.value.tradingName, this.myForm.value.registeredCompanyName, this.myForm.value.registrationNumber, this.myForm.value.physicalAddress, this.myForm.value.postalAddress, this.myForm.value.tel, this.myForm.value.faxNo, this.myForm.value.website, this.myForm.value.vatNumber, this.myForm.value.accPersonName, this.myForm.value.accPersonNo, this.myForm.value.accPersonFaxNo, this.myForm.value.accPersonEmail, this.myForm.value.salesPersonName, this.myForm.value.salesPersonNo, this.myForm.value.salesPersonFaxNo, this.myForm.value.salesPersonEmail, this.imagePath);
        this.adminService.editForm(editForm, this.formId)
            .subscribe(function (data) {
            _this.router.navigateByUrl('/admin');
            _this.toastr.success('Form edited successfully');
        }, function (error) {
            _this.submitStarted = false;
            _this.toastr.error('There was an error, please try again later');
        });
    };
    return EditUsersFormsComponent;
}());
__decorate([
    core_1.ViewChild('fileInput'),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], EditUsersFormsComponent.prototype, "fileInput", void 0);
EditUsersFormsComponent = __decorate([
    core_1.Component({
        selector: 'app-edit-users-forms',
        template: __webpack_require__("./src/app/admin/editUsersForms/editUsersForms.component.html"),
        styles: [__webpack_require__("./src/app/admin/editUsersForms/editUsersForms.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof admin_service_1.AdminService !== "undefined" && admin_service_1.AdminService) === "function" && _b || Object, typeof (_c = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _c || Object, typeof (_d = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _d || Object, typeof (_e = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _e || Object, typeof (_f = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _f || Object, typeof (_g = typeof core_1.Renderer !== "undefined" && core_1.Renderer) === "function" && _g || Object])
], EditUsersFormsComponent);
exports.EditUsersFormsComponent = EditUsersFormsComponent;
var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=E:/github/project-c/src/editUsersForms.component.js.map

/***/ }),

/***/ "./src/app/admin/services/admin.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var error_service_1 = __webpack_require__("./src/app/errorHandler/error.service.ts");
var ng2_toastr_1 = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
var angular2_jwt_1 = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
var auth_service_1 = __webpack_require__("./src/app/auth/auth.service.ts");
var config_1 = __webpack_require__("./src/app/config/config.ts");
var AdminService = (function () {
    function AdminService(authHttp, errorService, toastr, authService) {
        this.authHttp = authHttp;
        this.errorService = errorService;
        this.toastr = toastr;
        this.authService = authService;
        this.token = localStorage.getItem('id_token');
        this.forms = [];
        this.singleForm = Object;
        this.jwtHelper = new angular2_jwt_1.JwtHelper();
    }
    AdminService.prototype.getUserForms = function () {
        var _this = this;
        if (this.authService.isLoggedIn()) {
            var token = localStorage.getItem('id_token');
            var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
            headers.append('Authorization', token);
            return this.authHttp.get(config_1.ADMIN_API_URL + "/forms", { headers: headers })
                .map(function (response) {
                var forms = response.json().forms;
                var fetchedForms = [];
                for (var _i = 0, forms_1 = forms; _i < forms_1.length; _i++) {
                    var form = forms_1[_i];
                    fetchedForms.push(form);
                }
                _this.forms = fetchedForms;
                return fetchedForms;
            })
                .catch(function (error) {
                _this.errorService.handleError(error.json());
                return rxjs_1.Observable.throw(error.json());
            });
        }
    };
    AdminService.prototype.editForm = function (editForm, formId) {
        var _this = this;
        var body = JSON.stringify(editForm);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.token);
        return this.authHttp.patch(config_1.ADMIN_API_URL + "/form/" + formId, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return rxjs_1.Observable.throw(error.json());
        });
    };
    AdminService.prototype.deleteForm = function (form) {
        var _this = this;
        this.forms.splice(this.forms.indexOf(form), 1);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.token);
        return this.authHttp.delete(config_1.ADMIN_API_URL + "/form/" + form, { headers: headers })
            .map(function (response) {
            _this.toastr.success('Form deleted successfully!');
            response.json();
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return rxjs_1.Observable.throw(error.json());
        });
    };
    AdminService.prototype.getSingleForm = function (formId) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.token);
        return this.authHttp.get(config_1.ADMIN_API_URL + "/form/" + formId, { headers: headers })
            .map(function (response) {
            _this.singleForm = response.json();
            return _this.singleForm;
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return rxjs_1.Observable.throw(error.json());
        });
    };
    // check if user is an Administrator by decoding the token from localStorage
    AdminService.prototype.isAdmin = function () {
        var userInfo = localStorage.getItem('id_token') ? this.jwtHelper.decodeToken(localStorage.getItem('id_token')) : null;
        if (userInfo) {
            if (userInfo.role[0] === 'admin') {
                return true;
            }
        }
        return false;
    };
    return AdminService;
}());
AdminService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof angular2_jwt_1.AuthHttp !== "undefined" && angular2_jwt_1.AuthHttp) === "function" && _a || Object, typeof (_b = typeof error_service_1.ErrorService !== "undefined" && error_service_1.ErrorService) === "function" && _b || Object, typeof (_c = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _c || Object, typeof (_d = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _d || Object])
], AdminService);
exports.AdminService = AdminService;
var _a, _b, _c, _d;
//# sourceMappingURL=E:/github/project-c/src/admin.service.js.map

/***/ }),

/***/ "./src/app/admin/services/adminGuard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var ng2_toastr_1 = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
var admin_service_1 = __webpack_require__("./src/app/admin/services/admin.service.ts");
var AdminGuardService = (function () {
    function AdminGuardService(router, toastr, adminService) {
        this.router = router;
        this.toastr = toastr;
        this.adminService = adminService;
    }
    // we check if the user is an Administrator or not
    AdminGuardService.prototype.canActivate = function (route, state) {
        if (this.adminService.isAdmin()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
        }
    };
    return AdminGuardService;
}());
AdminGuardService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _b || Object, typeof (_c = typeof admin_service_1.AdminService !== "undefined" && admin_service_1.AdminService) === "function" && _c || Object])
], AdminGuardService);
exports.AdminGuardService = AdminGuardService;
var _a, _b, _c;
//# sourceMappingURL=E:/github/project-c/src/adminGuard.js.map

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header *ngIf=\"!isLoggedIn() || isAdmin()\">\r\n    <router-outlet></router-outlet>\r\n    <app-error></app-error>\r\n</header>\r\n<section class=\"dash-wraper\" *ngIf=\"isLoggedIn() && !isAdmin()\">\r\n    <section id=\"sidebar\" class=\"sidebar\">\r\n        <app-sidebar></app-sidebar>\r\n    </section>\r\n    <section id=\"content\">\r\n        <div class=\"content\">\r\n            <div class=\"pad-top-header\">\r\n                <div class=\"main-content marg-auto\">\r\n                    <div class=\"container-fluid\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-8\">\r\n                                <!-- Content -->\r\n                                <router-outlet></router-outlet>\r\n                                <app-error></app-error>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <!-- User profile -->\r\n                                <app-userprofile></app-userprofile>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </section>\r\n</section>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var ng2_toastr_1 = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
var auth_service_1 = __webpack_require__("./src/app/auth/auth.service.ts");
var admin_service_1 = __webpack_require__("./src/app/admin/services/admin.service.ts");
var AppComponent = (function () {
    function AppComponent(authService, adminService, toastr, vRef) {
        this.authService = authService;
        this.adminService = adminService;
        this.toastr = toastr;
        this.vRef = vRef;
        this.toastr.setRootViewContainerRef(vRef);
    }
    // check if user is logged in by asking our authentication service, we use this function in html file *ngIf directive
    AppComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    AppComponent.prototype.isAdmin = function () {
        return this.adminService.isAdmin();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof admin_service_1.AdminService !== "undefined" && admin_service_1.AdminService) === "function" && _b || Object, typeof (_c = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _c || Object, typeof (_d = typeof core_1.ViewContainerRef !== "undefined" && core_1.ViewContainerRef) === "function" && _d || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=E:/github/project-c/src/app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var navbar_component_1 = __webpack_require__("./src/app/navbar/navbar.component.ts");
var form_component_1 = __webpack_require__("./src/app/form/form.component.ts");
var register_component_1 = __webpack_require__("./src/app/user/register/register.component.ts");
var user_component_1 = __webpack_require__("./src/app/user/user.component.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var routes_component_1 = __webpack_require__("./src/app/routes.component.ts");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var authguard_service_1 = __webpack_require__("./src/app/auth/authguard.service.ts");
var auth_service_1 = __webpack_require__("./src/app/auth/auth.service.ts");
var error_service_1 = __webpack_require__("./src/app/errorHandler/error.service.ts");
var ng2_toastr_1 = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
var login_component_1 = __webpack_require__("./src/app/user/login/login.component.ts");
var error_component_1 = __webpack_require__("./src/app/errorHandler/error.component.ts");
var mainPage_component_1 = __webpack_require__("./src/app/mainPage/mainPage.component.ts");
var resetPassword_component_1 = __webpack_require__("./src/app/user/accountRecover/resetPassword.component.ts");
var forgetPassword_component_1 = __webpack_require__("./src/app/user/accountRecover/forgetPassword.component.ts");
var form_service_1 = __webpack_require__("./src/app/form/form.service.ts");
var userForms_component_1 = __webpack_require__("./src/app/userForms/formsTable/userForms.component.ts");
var editUserForm_component_1 = __webpack_require__("./src/app/userForms/editForm/editUserForm.component.ts");
var errorPage_component_1 = __webpack_require__("./src/app/errorPage/errorPage.component.ts");
var adminPage_component_1 = __webpack_require__("./src/app/admin/adminPage/adminPage.component.ts");
var admin_service_1 = __webpack_require__("./src/app/admin/services/admin.service.ts");
var editUsersForms_component_1 = __webpack_require__("./src/app/admin/editUsersForms/editUsersForms.component.ts");
var adminGuard_1 = __webpack_require__("./src/app/admin/services/adminGuard.ts");
var admin_component_1 = __webpack_require__("./src/app/admin/admin.component.ts");
var userProfile_component_1 = __webpack_require__("./src/app/user/profile/userProfile.component.ts");
var profile_service_1 = __webpack_require__("./src/app/user/profile/profile.service.ts");
var changePassword_component_1 = __webpack_require__("./src/app/user/profile/changePassword/changePassword.component.ts");
var angular2_jwt_1 = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
var toastr_config_1 = __webpack_require__("./src/app/config/toastr.config.ts");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
var ng2_bs3_modal_1 = __webpack_require__("./node_modules/ng2-bs3-modal/ng2-bs3-modal.js");
var loader_component_1 = __webpack_require__("./src/app/components/loader/loader.component.ts");
var tabs_component_1 = __webpack_require__("./src/app/components/tabs/tabs.component.ts");
var tab_component_1 = __webpack_require__("./src/app/components/tabs/tab.component.ts");
var modal_component_1 = __webpack_require__("./src/app/components/modal/modal.component.ts");
var user_dashboard_component_1 = __webpack_require__("./src/app/components/user-dashboard/user-dashboard.component.ts");
var sidebar_component_1 = __webpack_require__("./src/app/components/sidebar/sidebar.component.ts");
function getAuthHttp(http) {
    return new angular2_jwt_1.AuthHttp(new angular2_jwt_1.AuthConfig({
        noJwtError: true,
        headerPrefix: 'JWT',
        globalHeaders: [{ 'Content': 'application/json' }],
    }), http);
}
exports.getAuthHttp = getAuthHttp;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            navbar_component_1.NavbarComponent,
            form_component_1.FormComponent,
            user_component_1.UserComponent,
            register_component_1.RegisterComponent,
            login_component_1.LoginComponent,
            navbar_component_1.NavbarComponent,
            error_component_1.ErrorComponent,
            mainPage_component_1.MainPageComponent,
            resetPassword_component_1.ResetPasswordComponent,
            forgetPassword_component_1.ForgetPasswordComponent,
            userForms_component_1.UserFormsComponent,
            editUserForm_component_1.EditUserFormComponent,
            errorPage_component_1.ErrorPageComponent,
            adminPage_component_1.AdminPageComponent,
            editUsersForms_component_1.EditUsersFormsComponent,
            admin_component_1.AdminComponent,
            userProfile_component_1.UserProfileComponent,
            changePassword_component_1.ChangePasswordComponent,
            loader_component_1.LoaderComponent,
            tabs_component_1.TabsComponent,
            tab_component_1.TabComponent,
            modal_component_1.ModalComponent,
            user_dashboard_component_1.UserDashboardComponent,
            sidebar_component_1.SidebarComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule,
            forms_1.ReactiveFormsModule,
            routes_component_1.routing,
            animations_1.BrowserAnimationsModule,
            ng2_toastr_1.ToastModule.forRoot(),
            ng2_bs3_modal_1.Ng2Bs3ModalModule,
        ],
        providers: [
            authguard_service_1.AuthGuardService,
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
            auth_service_1.AuthService,
            error_service_1.ErrorService,
            form_service_1.FormService,
            admin_service_1.AdminService,
            adminGuard_1.AdminGuardService,
            profile_service_1.ProfileService,
            { provide: ng2_toastr_1.ToastOptions, useClass: toastr_config_1.CustomOption },
            {
                provide: angular2_jwt_1.AuthHttp,
                useFactory: getAuthHttp,
                deps: [http_1.Http]
            },
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=E:/github/project-c/src/app.module.js.map

/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
__webpack_require__("./node_modules/rxjs/operator/map.js");
__webpack_require__("./node_modules/rxjs/operator/catch.js");
var ng2_toastr_1 = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
var error_service_1 = __webpack_require__("./src/app/errorHandler/error.service.ts");
var angular2_jwt_1 = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
var config_1 = __webpack_require__("./src/app/config/config.ts");
var AuthService = (function () {
    function AuthService(authHttp, router, errorService, toastr) {
        this.authHttp = authHttp;
        this.router = router;
        this.errorService = errorService;
        this.toastr = toastr;
    }
    // sending request to back end to register our user
    AuthService.prototype.signup = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.authHttp.post(config_1.AUTH_API_URL + "/register", body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return rxjs_1.Observable.throw(error.json());
        });
    };
    // sending request to back end to login the user
    AuthService.prototype.signin = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.authHttp.post(config_1.AUTH_API_URL + "/login", body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return rxjs_1.Observable.throw(error.json());
        });
    };
    // sending request for password reset
    AuthService.prototype.forget = function (reset) {
        var _this = this;
        var body = JSON.stringify(reset);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.authHttp.post(config_1.AUTH_API_URL + "/password", body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return rxjs_1.Observable.throw(error.json());
        });
    };
    // sending request with the newly created password
    AuthService.prototype.reset = function (reset) {
        var _this = this;
        var body = JSON.stringify(reset);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.authHttp.post(config_1.AUTH_API_URL + "/reset/" + reset.token, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return rxjs_1.Observable.throw(error.json());
        });
    };
    // logout function to be used in html file of both pages (login/register) in order to clear the localStorage from token and user id.
    AuthService.prototype.logout = function () {
        this.router.navigateByUrl('/');
        localStorage.clear();
        this.toastr.info('You have been logged out');
    };
    // check if the user is logged in or not, if token is expired, token is deleted from localstorage
    AuthService.prototype.isLoggedIn = function () {
        if (!angular2_jwt_1.tokenNotExpired()) {
            localStorage.clear();
        }
        return angular2_jwt_1.tokenNotExpired();
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof angular2_jwt_1.AuthHttp !== "undefined" && angular2_jwt_1.AuthHttp) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof error_service_1.ErrorService !== "undefined" && error_service_1.ErrorService) === "function" && _c || Object, typeof (_d = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _d || Object])
], AuthService);
exports.AuthService = AuthService;
var _a, _b, _c, _d;
//# sourceMappingURL=E:/github/project-c/src/auth.service.js.map

/***/ }),

/***/ "./src/app/auth/authguard.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var auth_service_1 = __webpack_require__("./src/app/auth/auth.service.ts");
var ng2_toastr_1 = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
var AuthGuardService = (function () {
    function AuthGuardService(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    // we check if the user is logged in or not
    AuthGuardService.prototype.canActivate = function (route, state) {
        // user is actually logged in
        if (this.authService.isLoggedIn()) {
            return true;
            // user is not logged in, return the user to the login page
        }
        else {
            this.router.navigate(['/user/login']);
            this.toastr.error('Please login first');
        }
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _c || Object])
], AuthGuardService);
exports.AuthGuardService = AuthGuardService;
var _a, _b, _c;
//# sourceMappingURL=E:/github/project-c/src/authguard.service.js.map

/***/ }),

/***/ "./src/app/auth/password.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Reset = (function () {
    function Reset(email, token, password) {
        this.email = email;
        this.token = token;
        this.password = password;
    }
    ;
    return Reset;
}());
exports.Reset = Reset;
//# sourceMappingURL=E:/github/project-c/src/password.model.js.map

/***/ }),

/***/ "./src/app/auth/user.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(email, password, currentPassword, newPassword) {
        this.email = email;
        this.password = password;
        this.currentPassword = currentPassword;
        this.newPassword = newPassword;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=E:/github/project-c/src/user.model.js.map

/***/ }),

/***/ "./src/app/components/loader/loader.component.css":
/***/ (function(module, exports) {

module.exports = ".loader-wraper {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: block;\r\n}\r\n\r\n.loader {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translateX(-50%) translateY(-50%);\r\n            transform: translateX(-50%) translateY(-50%);\r\n}\r\n\r\n.loader-svg {\r\n    width: 35px;\r\n    height: 35px;\r\n}"

/***/ }),

/***/ "./src/app/components/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-wraper\">\r\n    &nbsp;\r\n    <div class=\"loader\">\r\n        <svg class=\"loader-svg\" width=\"45\" height=\"45\" viewBox=\"0 0 45 45\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"#fff\">\r\n        <g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(1 1)\" stroke-width=\"2\">\r\n            <circle cx=\"22\" cy=\"22\" r=\"6\" stroke-opacity=\"0\">\r\n                <animate attributeName=\"r\"\r\n                     begin=\"1.5s\" dur=\"3s\"\r\n                     values=\"6;22\"\r\n                     calcMode=\"linear\"\r\n                     repeatCount=\"indefinite\" />\r\n                <animate attributeName=\"stroke-opacity\"\r\n                     begin=\"1.5s\" dur=\"3s\"\r\n                     values=\"1;0\" calcMode=\"linear\"\r\n                     repeatCount=\"indefinite\" />\r\n                <animate attributeName=\"stroke-width\"\r\n                     begin=\"1.5s\" dur=\"3s\"\r\n                     values=\"2;0\" calcMode=\"linear\"\r\n                     repeatCount=\"indefinite\" />\r\n            </circle>\r\n            <circle cx=\"22\" cy=\"22\" r=\"6\" stroke-opacity=\"0\">\r\n                <animate attributeName=\"r\"\r\n                     begin=\"3s\" dur=\"3s\"\r\n                     values=\"6;22\"\r\n                     calcMode=\"linear\"\r\n                     repeatCount=\"indefinite\" />\r\n                <animate attributeName=\"stroke-opacity\"\r\n                     begin=\"3s\" dur=\"3s\"\r\n                     values=\"1;0\" calcMode=\"linear\"\r\n                     repeatCount=\"indefinite\" />\r\n                <animate attributeName=\"stroke-width\"\r\n                     begin=\"3s\" dur=\"3s\"\r\n                     values=\"2;0\" calcMode=\"linear\"\r\n                     repeatCount=\"indefinite\" />\r\n            </circle>\r\n            <circle cx=\"22\" cy=\"22\" r=\"8\">\r\n                <animate attributeName=\"r\"\r\n                     begin=\"0s\" dur=\"1.5s\"\r\n                     values=\"6;1;2;3;4;5;6\"\r\n                     calcMode=\"linear\"\r\n                     repeatCount=\"indefinite\" />\r\n            </circle>\r\n        </g>\r\n    </svg>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/loader/loader.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var LoaderComponent = (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    return LoaderComponent;
}());
LoaderComponent = __decorate([
    core_1.Component({
        selector: 'app-loader',
        template: __webpack_require__("./src/app/components/loader/loader.component.html"),
        styles: [__webpack_require__("./src/app/components/loader/loader.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoaderComponent);
exports.LoaderComponent = LoaderComponent;
//# sourceMappingURL=E:/github/project-c/src/loader.component.js.map

/***/ }),

/***/ "./src/app/components/modal/modal.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <modal #login>\r\n        <div clas=\"modal-dialogue\">\r\n            <modal-header [show-close]=\"true\" class=\"text-white\">\r\n                <span class=\"close-text\">Close</span>\r\n            </modal-header>\r\n            <modal-body>\r\n                <div class=\"card wow fadeInRight\" data-wow-delay=\"0.3s\">\r\n                    <app-login></app-login>\r\n                </div>\r\n            </modal-body>\r\n        </div>\r\n    </modal>\r\n    <modal #register>\r\n        <div clas=\"modal-dialogue\">\r\n            <modal-header [show-close]=\"true\" class=\"text-white\">\r\n                <span class=\"close-text\">Close</span>\r\n            </modal-header>\r\n            <modal-body>\r\n                <div class=\"card wow fadeInRight\" data-wow-delay=\"0.3s\">\r\n                    <app-register></app-register>\r\n                </div>\r\n            </modal-body>\r\n        </div>\r\n    </modal>\r\n</section>"

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var ModalComponent = (function () {
    function ModalComponent() {
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    return ModalComponent;
}());
ModalComponent = __decorate([
    core_1.Component({
        selector: 'app-modal',
        template: __webpack_require__("./src/app/components/modal/modal.component.html"),
        styles: [__webpack_require__("./src/app/components/modal/modal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ModalComponent);
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=E:/github/project-c/src/modal.component.js.map

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"white-label\" data-background-color=\"charcoal\">\n    <img src=\"http://clinixmyvoice.co.za/system/uploads/Clinix%20Health%20Academy/images/logo_white.png\" alt=\"Clinix\">\n</div>\n<div id=\"sidebar-nav\">\n    <ul class=\"nav\">\n        <li><a class=\"marg-6 spacing-top\" routerLink=\"/user/forms\"><i class=\"fa fa-user \"></i> User Profile</a></li>\n        <li *ngFor=\"let form of fetchedForms\"><a class=\"marg-6\" [routerLink]=\"['user/forms/edit', form._id]\"><i class=\"fas fa-edit\"> </i> Edit Profile</a></li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var form_service_1 = __webpack_require__("./src/app/form/form.service.ts");
var auth_service_1 = __webpack_require__("./src/app/auth/auth.service.ts");
var profile_service_1 = __webpack_require__("./src/app/user/profile/profile.service.ts");
var SidebarComponent = (function () {
    function SidebarComponent(formService, authService, profileService) {
        this.formService = formService;
        this.authService = authService;
        this.profileService = profileService;
        this.fetchedUser = [];
        this.fetchedForms = [];
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.authService.isLoggedIn()) {
                var userId = localStorage.getItem('userId');
                _this.profileService.getUserDetails(userId)
                    .subscribe((function (data) {
                    var userArray = [];
                    // tslint:disable-next-line:forin
                    for (var key in data) {
                        userArray.push(data[key]);
                        console.log('User', data);
                    }
                    _this.fetchedUser = userArray;
                }));
            }
            _this.formService.getUserForms()
                .subscribe(function (forms) { return _this.fetchedForms = forms; }, function (error) { return console.log(error); });
        }, 50);
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    core_1.Component({
        selector: 'app-sidebar',
        template: __webpack_require__("./src/app/components/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("./src/app/components/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _a || Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _b || Object, typeof (_c = typeof profile_service_1.ProfileService !== "undefined" && profile_service_1.ProfileService) === "function" && _c || Object])
], SidebarComponent);
exports.SidebarComponent = SidebarComponent;
var _a, _b, _c;
//# sourceMappingURL=E:/github/project-c/src/sidebar.component.js.map

/***/ }),

/***/ "./src/app/components/tabs/tab.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var TabComponent = (function () {
    function TabComponent() {
        this.active = false;
    }
    return TabComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TabComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TabComponent.prototype, "disabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TabComponent.prototype, "active", void 0);
TabComponent = __decorate([
    core_1.Component({
        selector: 'app-tab',
        template: "\n    <div *ngIf=\"active\" class=\"tab-content form-wrapper\">\n     <div  class=\"section is-active\">\n      <ng-content></ng-content>\n    </div>\n    </div>\n  "
    })
], TabComponent);
exports.TabComponent = TabComponent;
//# sourceMappingURL=E:/github/project-c/src/tab.component.js.map

/***/ }),

/***/ "./src/app/components/tabs/tabs.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tabs/tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <ul class=\"tab-container steps\" [class.nav-tabs-vertical]=\"vertical\">\r\n        <li *ngFor=\"let tab of tabs; let i = index\" (click)=\"selectTab(i)\" class=\"tab-item\" [class.active]=\"tab.active\" [class.disabled]=\"tab-disabled\">\r\n            {{tab.title}}\r\n        </li>\r\n    </ul>\r\n    <ng-content></ng-content>\r\n</div>\r\n\r\n<!-- <div class=\"container\">\r\n    <div class=\"wrapper\">\r\n        <ul class=\"steps\">\r\n            <li class=\"is-active\">Step 1</li>\r\n            <li>Step 2</li>\r\n            <li>Step 3</li>\r\n        </ul>\r\n        <form class=\"form-wrapper\">\r\n            <fieldset class=\"section is-active\">\r\n                <h3>Your Details</h3>\r\n                <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"Name\">\r\n                <input type=\"text\" name=\"email\" id=\"email\" placeholder=\"Email\">\r\n                <div class=\"button\">Next</div>\r\n            </fieldset>\r\n            <fieldset class=\"section\">\r\n                <h3>Account Type</h3>\r\n                <div class=\"row cf\">\r\n                    <div class=\"four col\">\r\n                        <input type=\"radio\" name=\"r1\" id=\"r1\" checked>\r\n                        <label for=\"r1\">\r\n                <h4>Designer</h4>\r\n              </label>\r\n                    </div>\r\n                    <div class=\"four col\">\r\n                        <input type=\"radio\" name=\"r1\" id=\"r2\"><label for=\"r2\">\r\n                <h4>Developer</h4>\r\n              </label>\r\n                    </div>\r\n                    <div class=\"four col\">\r\n                        <input type=\"radio\" name=\"r1\" id=\"r3\"><label for=\"r3\">\r\n                <h4>Project Manager</h4>\r\n              </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"button\">Next</div>\r\n            </fieldset>\r\n            <fieldset class=\"section\">\r\n                <h3>Choose a Password</h3>\r\n                <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"Password\">\r\n                <input type=\"password\" name=\"password2\" id=\"password2\" placeholder=\"Re-enter Password\">\r\n                <input class=\"submit button\" type=\"submit\" value=\"Sign Up\">\r\n            </fieldset>\r\n            <fieldset class=\"section\">\r\n                <h3>Account Created!</h3>\r\n                <p>Your account has now been created.</p>\r\n                <div class=\"button\">Reset Form</div>\r\n            </fieldset>\r\n        </form>\r\n    </div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/components/tabs/tabs.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var tab_component_1 = __webpack_require__("./src/app/components/tabs/tab.component.ts");
var TabsComponent = (function () {
    function TabsComponent() {
        this.vertical = false;
        this.selectedIndex = 0;
    }
    // contentChildren are set
    TabsComponent.prototype.ngAfterContentInit = function () {
        // Make sure there are tabs
        if (this.tabs.length) {
            this.selectTab(this.selectedIndex);
        }
    };
    TabsComponent.prototype.selectTab = function (index) {
        if (!this.tabs.toArray()[index].disabled) {
            this.tabs.toArray().forEach(function (value) { return value.active = false; });
            this.tabs.toArray()[index].active = true;
        }
    };
    return TabsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TabsComponent.prototype, "vertical", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TabsComponent.prototype, "selectedIndex", void 0);
__decorate([
    core_1.ContentChildren(tab_component_1.TabComponent),
    __metadata("design:type", typeof (_a = typeof core_1.QueryList !== "undefined" && core_1.QueryList) === "function" && _a || Object)
], TabsComponent.prototype, "tabs", void 0);
TabsComponent = __decorate([
    core_1.Component({
        selector: 'app-tabs',
        template: __webpack_require__("./src/app/components/tabs/tabs.component.html"),
        styles: [__webpack_require__("./src/app/components/tabs/tabs.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TabsComponent);
exports.TabsComponent = TabsComponent;
var _a;
//# sourceMappingURL=E:/github/project-c/src/tabs.component.js.map

/***/ }),

/***/ "./src/app/components/user-dashboard/user-dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-dashboard/user-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n    user-dashboard works!\n</p>"

/***/ }),

/***/ "./src/app/components/user-dashboard/user-dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var UserDashboardComponent = (function () {
    function UserDashboardComponent() {
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
    };
    return UserDashboardComponent;
}());
UserDashboardComponent = __decorate([
    core_1.Component({
        selector: 'app-user-dashboard',
        template: __webpack_require__("./src/app/components/user-dashboard/user-dashboard.component.html"),
        styles: [__webpack_require__("./src/app/components/user-dashboard/user-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserDashboardComponent);
exports.UserDashboardComponent = UserDashboardComponent;
//# sourceMappingURL=E:/github/project-c/src/user-dashboard.component.js.map

/***/ }),

/***/ "./src/app/config/config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// dev
exports.BASE_URL = 'http://localhost:3000';
exports.ADMIN_API_URL = 'http://localhost:3000/api/admin';
exports.AUTH_API_URL = 'http://localhost:3000/api/auth';
exports.USER_API_URL = 'http://localhost:3000/api/user';
exports.FORMS_API_URL = 'http://localhost:3000/api/forms';
// prod
// export const BASE_URL      = 'https://project-clinix.herokuapp.com/'
// export const ADMIN_API_URL = 'https://project-clinix.herokuapp.com/api/admin';
// export const AUTH_API_URL  = 'https://project-clinix.herokuapp.com/api/auth';
// export const USER_API_URL  = 'https://project-clinix.herokuapp.com/api/user';
// export const FORMS_API_URL = 'https://project-clinix.herokuapp.com/api/forms';
// prod heroku
// export const BASE_URL      = 'https://hlakaza.github.io/project-c/';
// export const ADMIN_API_URL = 'https://hlakaza.github.io/project-c/api/admin';
// export const AUTH_API_URL  = 'https://hlakaza.github.io/project-c/api/auth';
// export const USER_API_URL  = 'https://hlakaza.github.io/project-c/api/user';
// export const FORMS_API_URL = 'https://hlakaza.github.io/project-c/api/forms';
//# sourceMappingURL=E:/github/project-c/src/config.js.map

/***/ }),

/***/ "./src/app/config/toastr.config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ng2_toastr_1 = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
var CustomOption = (function (_super) {
    __extends(CustomOption, _super);
    function CustomOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animate = 'flyRight'; // you can override any options available
        _this.newestOnTop = false;
        _this.showCloseButton = true;
        _this.positionClass = 'toast-top-right';
        _this.preventDuplicates = true;
        _this.showMethod = 'fadeIn';
        _this.hideMethod = 'fadeOut';
        _this.showEasing = 'swing';
        _this.hideEasing = 'linear';
        _this.onclick = null;
        return _this;
    }
    return CustomOption;
}(ng2_toastr_1.ToastOptions));
exports.CustomOption = CustomOption;
//# sourceMappingURL=E:/github/project-c/src/toastr.config.js.map

/***/ }),

/***/ "./src/app/errorHandler/error.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/errorHandler/error.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var error_service_1 = __webpack_require__("./src/app/errorHandler/error.service.ts");
var ng2_toastr_1 = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
var ErrorComponent = (function () {
    function ErrorComponent(errorService, toastr) {
        this.errorService = errorService;
        this.toastr = toastr;
    }
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorService.errorOccured
            .subscribe(function (error) {
            _this.error = error;
            _this.toastr.error(_this.error.message);
        });
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    core_1.Component({
        selector: 'app-error',
        template: __webpack_require__("./src/app/errorHandler/error.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof error_service_1.ErrorService !== "undefined" && error_service_1.ErrorService) === "function" && _a || Object, typeof (_b = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _b || Object])
], ErrorComponent);
exports.ErrorComponent = ErrorComponent;
var _a, _b;
//# sourceMappingURL=E:/github/project-c/src/error.component.js.map

/***/ }),

/***/ "./src/app/errorHandler/error.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var error_1 = __webpack_require__("./src/app/errorHandler/error.ts");
var ErrorService = (function () {
    function ErrorService() {
        this.errorOccured = new core_1.EventEmitter();
    }
    ErrorService.prototype.handleError = function (error) {
        var errorData = new error_1.Error(error.error.message);
        this.errorOccured.emit(errorData);
    };
    return ErrorService;
}());
ErrorService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ErrorService);
exports.ErrorService = ErrorService;
//# sourceMappingURL=E:/github/project-c/src/error.service.js.map

/***/ }),

/***/ "./src/app/errorHandler/error.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Error = (function () {
    function Error(message) {
        this.message = message;
    }
    return Error;
}());
exports.Error = Error;
//# sourceMappingURL=E:/github/project-c/src/error.js.map

/***/ }),

/***/ "./src/app/errorPage/errorPage.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container topPad text-center\">\r\n  <h2>404, page not found!</h2>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/errorPage/errorPage.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var ErrorPageComponent = (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
    };
    return ErrorPageComponent;
}());
ErrorPageComponent = __decorate([
    core_1.Component({
        selector: 'app-error-page',
        template: __webpack_require__("./src/app/errorPage/errorPage.component.html")
    }),
    __metadata("design:paramtypes", [])
], ErrorPageComponent);
exports.ErrorPageComponent = ErrorPageComponent;
//# sourceMappingURL=E:/github/project-c/src/errorPage.component.js.map

/***/ }),

/***/ "./src/app/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card spacing-bottom\">\r\n    <!--Header-->\r\n    <div class=\"card-header\" data-background-color=\"charcoal\">\r\n        <h4 class=\"title\">Add Details</h4>\r\n        <p class=\"category\">Provide your details in the form below</p>\r\n    </div>\r\n    <div class=\"card-content\">\r\n\r\n        <form [formGroup]=\"myForm\" (ngSubmit)=\"submitForm()\" class=\"form-horizontal register-form clearfix\" novalidate>\r\n            <fieldset>\r\n                <app-tabs #t>\r\n                    <app-tab title=\"Company Information\">\r\n                        <div class=\"row\">\r\n                            <!--Trading Name-->\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"clearfix pad-top-10\">\r\n                                    <div class=\"md-form\" [ngClass]=\"{ 'has-error': myForm.get('tradingName').hasError('required') && myForm.get('tradingName').touched }\">\r\n                                        <i class=\"fa fa-building prefix grey-text\"></i>\r\n                                        <input class=\"form-control\" formControlName=\"tradingName\" name=\"tradingName\" type=\"text\" required/>\r\n                                        <label class=\"grey-text\" for=\"tradingName\" class=\"grey-text\">Trading Name</label>\r\n                                        <span *ngIf=\"myForm.get('tradingName').hasError('required') && myForm.get('tradingName').touched\" class=\"help-block text-danger\">Trading Name is required</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!--Company Name-->\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"clearfix pad-top-10\">\r\n                                    <div class=\"md-form\" [ngClass]=\"{ 'has-error': myForm.get('registeredCompanyName').hasError('required') && myForm.get('registeredCompanyName').touched }\">\r\n                                        <i class=\"fa fa-building prefix grey-text\"></i>\r\n                                        <input class=\"form-control\" formControlName=\"registeredCompanyName\" name=\"registeredCompanyName\" type=\"text\" />\r\n                                        <label class=\"grey-text\" for=\"registeredCompanyName\">Registered Company Name</label>\r\n                                        <span *ngIf=\"myForm.get('registeredCompanyName').hasError('required') && myForm.get('registeredCompanyName').touched\" class=\"help-block text-danger\">Company Name is required</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <!--Registration Number-->\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"clearfix pad-top-10\">\r\n                                    <div class=\"md-form\" [ngClass]=\"{ 'has-error': myForm.get('registrationNumber').hasError('required') && myForm.get('registrationNumber').touched }\">\r\n                                        <i class=\"fa fa-edit prefix grey-text\"></i>\r\n                                        <input class=\"form-control\" formControlName=\"registrationNumber\" name=\"registrationNumber\" type=\"text\" />\r\n                                        <label class=\"grey-text\" for=\"registrationNumber\">Registration Number</label>\r\n                                        <span *ngIf=\"myForm.get('registrationNumber').hasError('required') && myForm.get('registrationNumber').touched\" class=\"help-block text-danger\">Registration Number is required</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!--confirm Registration Number-->\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"clearfix pad-top-10\">\r\n                                    <div class=\"md-form\" [ngClass]=\"{ 'has-error': myForm.get('confirmRegNumber').hasError('required') && myForm.get('confirmRegNumber').touched }\">\r\n                                        <i class=\"fa fa-edit prefix grey-text\"></i>\r\n                                        <input type=\"text\" class=\"form-control\" formControlName=\"confirmRegNumber\" name=\"confirmRegNumber\" />\r\n                                        <label class=\"grey-text\" for=\"confirmRegNumber\">Confirm Registration Number</label>\r\n                                        <span *ngIf=\"myForm.get('confirmRegNumber').hasError('regNumberMatch') && myForm.get('confirmRegNumber').touched\" class=\"help-block text-danger\">Registration Numbers do not match</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <!--Vat Number-->\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"md-form\">\r\n                                    <i class=\"fa fa-archive prefix grey-text\"></i>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"vatNumber\" name=\"vatNumber\" />\r\n                                    <label class=\"grey-text\" for=\"vatNumber\">Vat Number</label>\r\n                                    <span *ngIf=\"myForm.get('vatNumber').hasError('required') && myForm.get('vatNumber').touched\" class=\"help-block text-danger\">VatNumber is required</span>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!--Confirm Vat Number-->\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"md-form\">\r\n                                    <i class=\"fa fa-archive prefix grey-text\"></i>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"confirmVatNumber\" name=\"confirmVatNumber\" />\r\n                                    <label class=\"grey-text\" for=\"confirmVatNumber\">Confirm Vat Number</label>\r\n                                    <span *ngIf=\"myForm.get('confirmVatNumber').hasError('vatNumberMatch') && myForm.get('confirmVatNumber').touched\" class=\"help-block text-danger\">Vat Numbers do not match</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <!--Address-->\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"md-form\">\r\n                                    <i class=\"far fa-address-card prefix grey-text\"></i>\r\n                                    <textarea type=\"text\" formControlName=\"physicalAddress\" name=\"physicalAddress\" class=\"form-control md-textarea\"></textarea>\r\n                                    <label class=\"grey-text\" for=\"physicalAddress\">Physical Address</label>\r\n                                    <span *ngIf=\"myForm.get('physicalAddress').hasError('required') && myForm.get('physicalAddress').touched\" class=\"help-block text-danger\">Physical Address is required</span>\r\n                                </div>\r\n                            </div>\r\n                            <!--Postal Address-->\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"md-form\">\r\n                                    <i class=\"far fa-address-card prefix grey-text\"></i>\r\n                                    <textarea type=\"text\" formControlName=\"postalAddress\" name=\"postalAddress\" class=\"form-control md-textarea\"></textarea>\r\n                                    <label class=\"grey-text\" for=\"postalAddress\">Postal Address</label>\r\n                                    <span *ngIf=\"myForm.get('postalAddress').hasError('required') && myForm.get('postalAddress').touched\" class=\"help-block text-danger\">Postal Address is required</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <!--Phone Number-->\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"md-form \">\r\n                                    <i class=\"fa fa-phone prefix grey-text\"></i>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"tel\" name=\"tel\" />\r\n                                    <label class=\"grey-text\" for=\"tel\">Telephone Number</label>\r\n                                    <span *ngIf=\"myForm.get('tel').hasError('required') && myForm.get('tel').touched\" class=\"help-block text-danger\">Your work Telephone Number is required</span>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!--Fax Number-->\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"md-form\">\r\n                                    <i class=\"fa fa-fax prefix grey-text\"></i>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"faxNo\" name=\"faxNo\" />\r\n                                    <label class=\"grey-text\" for=\"faxNo\">Fax Number</label>\r\n                                    <span *ngIf=\"myForm.get('faxNo').hasError('required') && myForm.get('faxNo').touched\" class=\"help-block text-danger\">Fax number is required</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <!--Website-->\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"md-form\">\r\n                                    <i class=\"fa fa-globe prefix grey-text\"></i>\r\n                                    <textarea type=\"text\" formControlName=\"website\" name=\"website\" class=\"form-control md-textarea\"></textarea>\r\n                                    <label class=\"grey-text\" for=\"website\">Website</label>\r\n                                    <span *ngIf=\"myForm.get('website').hasError('required') && myForm.get('website').touched\" class=\"help-block text-danger\">Website is required</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <span class=\"float-right deep-orange-text display-block\" (click)=\"t.selectTab(1)\">Next <i class=\"fa fa-angle-right\"></i></span>\r\n                            </div>\r\n                        </div>\r\n                    </app-tab>\r\n                    <app-tab title=\"Correspondence\">\r\n                        <div class=\"row\">\r\n                            <!--Acc Person  Name-->\r\n                            <div class=\"col-md-6\">\r\n\r\n                                <div class=\"md-form\" [ngClass]=\"{ 'has-error': myForm.get('accPersonName').hasError('required') && myForm.get('accPersonName').touched }\">\r\n                                    <i class=\"fa fa-user prefix grey-text\"></i>\r\n                                    <label class=\"grey-text\">Accounts Person Name</label>\r\n                                    <input class=\"form-control\" formControlName=\"accPersonName\" name=\"accPersonName\" type=\"text\" />\r\n                                    <span *ngIf=\"myForm.get('accPersonName').hasError('required') && myForm.get('accPersonName').touched\" class=\"help-block text-danger\">Accounts Person Name is required</span>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <!--Email-->\r\n                            <div class=\"col-md-6\">\r\n\r\n                                <div class=\"md-form\">\r\n                                    <i class=\"far fa-envelope prefix grey-text\"></i>\r\n                                    <label class=\"grey-text\">Accounts Person Email</label>\r\n                                    <input type=\"email\" class=\"form-control\" formControlName=\"accPersonEmail\" name=\"accPersonEmail\" />\r\n                                    <span *ngIf=\"myForm.get('accPersonEmail').hasError('required') && myForm.get('accPersonEmail').touched\" class=\"help-block text-danger\">Email is required</span>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <!--Acc Person Number-->\r\n                            <div class=\"col-md-6\">\r\n\r\n                                <div class=\"md-form\" [ngClass]=\"{ 'has-error': myForm.get('accPersonNo').hasError('required') && myForm.get('accPersonNo').touched }\">\r\n                                    <i class=\"fa fa-phone prefix grey-text\"></i>\r\n                                    <label class=\"grey-text\">Accounts Person Number</label>\r\n                                    <input class=\"form-control\" formControlName=\"accPersonNo\" name=\"accPersonNo\" type=\"text\" />\r\n                                    <span *ngIf=\"myForm.get('accPersonNo').hasError('required') && myForm.get('accPersonNo').touched\" class=\"help-block text-danger\">Phone Number is required</span>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <!--Acc Person Fax Number-->\r\n                            <div class=\"col-md-6\">\r\n\r\n                                <div class=\"md-form\" [ngClass]=\"{ 'has-error': myForm.get('accPersonFaxNo').hasError('required') && myForm.get('accPersonFaxNo').touched }\">\r\n                                    <i class=\"fa fa-fax prefix grey-text\"></i>\r\n                                    <label class=\"grey-text\">Accounts Person Fax Number</label>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"accPersonFaxNo\" name=\"accPersonFaxNo\" />\r\n                                    <span *ngIf=\"myForm.get('accPersonFaxNo').hasError('accPersonFaxNo') && myForm.get('accPersonFaxNo').touched\" class=\"help-block text-danger\">Fax Number is required</span>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <!--Sales Person  Name-->\r\n                            <div class=\"col-md-6\">\r\n\r\n                                <div class=\"md-form\" [ngClass]=\"{ 'has-error': myForm.get('salesPersonName').hasError('required') && myForm.get('salesPersonName').touched }\">\r\n                                    <i class=\"fa fa-user prefix grey-text\"></i>\r\n                                    <label class=\"grey-text\">Sales Person Name</label>\r\n                                    <input class=\"form-control\" formControlName=\"salesPersonName\" name=\"salesPersonName\" type=\"text\" />\r\n                                    <span *ngIf=\"myForm.get('salesPersonName').hasError('required') && myForm.get('salesPersonName').touched\" class=\"help-block text-danger\">Sales Person Name is required</span>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <!--Email-->\r\n                            <div class=\"col-md-6\">\r\n\r\n                                <div class=\"md-form\">\r\n                                    <i class=\"far fa-envelope prefix grey-text\"></i>\r\n                                    <label class=\"grey-text\">Sales Person Email</label>\r\n                                    <input type=\"email\" class=\"form-control\" formControlName=\"salesPersonEmail\" name=\"salesPersonEmail\" />\r\n                                    <span *ngIf=\"myForm.get('salesPersonEmail').hasError('required') && myForm.get('salesPersonEmail').touched\" class=\"help-block text-danger\">Email is required</span>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <!--Sales Person Number-->\r\n                            <div class=\"col-md-6\">\r\n\r\n                                <div class=\"md-form\" [ngClass]=\"{ 'has-error': myForm.get('salesPersonNo').hasError('required') && myForm.get('salesPersonNo').touched }\">\r\n                                    <i class=\"fa fa-phone prefix grey-text\"></i>\r\n                                    <label class=\"grey-text\">Sales Person Number</label>\r\n                                    <input class=\"form-control\" formControlName=\"salesPersonNo\" name=\"salesPersonNo\" type=\"text\" />\r\n                                    <span *ngIf=\"myForm.get('salesPersonNo').hasError('required') && myForm.get('salesPersonNo').touched\" class=\"help-block text-danger\">Phone Number is required</span>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <!--Sales Person Fax Number-->\r\n                            <div class=\"col-md-6\">\r\n\r\n                                <div class=\"md-form\" [ngClass]=\"{ 'has-error': myForm.get('salesPersonFaxNo').hasError('required') && myForm.get('salesPersonFaxNo').touched }\">\r\n                                    <i class=\"fa fa-fax prefix grey-text\"></i>\r\n                                    <label class=\"grey-text\">Sales Person Fax Number</label>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"salesPersonFaxNo\" name=\"salesPersonFaxNo\" />\r\n                                    <span *ngIf=\"myForm.get('salesPersonFaxNo').hasError('salesPersonFaxNo') && myForm.get('salesPersonFaxNo').touched\" class=\"help-block text-danger\">Fax Number is required</span>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <!--Type of business-->\r\n                            <div class=\"col-md-6\">\r\n\r\n                                <div class=\"md-form\">\r\n                                    <label class=\"text-left select-label grey-text\">Business Sector:</label>\r\n                                    <i class=\"fa fa-fax prefix grey-text\"></i>\r\n                                    <select type=\"text\" formControlName=\"serviceProduct\" class=\"form-control label-text grey-text\" id=\"exampleSelect1\">\r\n                                                    <option>Pharmaceutical</option>\r\n                                                    <option>None Pharmaceutical</option>\r\n                                                    <option name=\"service\">Service and Product</option>\r\n                                        </select>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n\r\n                                <div class=\"md-form\">\r\n                                    <i class=\"fa fa-fax prefix grey-text\"></i>\r\n                                    <label class=\"grey-text\" for=\"tel\">Please Specify the Service &amp; Product </label>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"serviceProductInfo\" name=\"service\" />\r\n                                    <span *ngIf=\"myForm.get('serviceProductInfo').hasError('serviceProductInfo') && myForm.get('serviceProductInfo').touched\" class=\"help-block text-danger\">Service &amp; product type required</span>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <span class=\"float-right deep-orange-text display-block\" (click)=\"t.selectTab(2)\">Next <i class=\"fa fa-angle-right\"></i></span>\r\n                                <span class=\"float-left deep-orange-text display-block\" (click)=\"t.selectTab(0)\"><i class=\"fa fa-angle-left\"></i> Back</span>\r\n                            </div>\r\n                        </div>\r\n                    </app-tab>\r\n                    <app-tab title=\"Rquired Documents\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"card red lighten-1 text-center z-depth-2 spacing-bottom spacing-top\">\r\n                                    <div class=\"card-body\">\r\n                                        <p class=\"white-text mb-0 font-8\">Please upload these documents, Customer General Terms and Conditions, BEE Certificate, Tax Certificate, Letter of Good Standing, Audited latest Financial Statements, Proof of Banking Details, Company Letterhead,\r\n                                            Declaration of possible conflict of Interest with Clinix Health Group (CHG), Product Price list, Identity documents of directors.</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- <div class=\"col-sm-12\">\r\n                                        <div class=\"file-field\">\r\n                                            <div class=\"btn btn-primary btn-sm\">\r\n                                                <span>Upload</span>\r\n                                                <input type=\"file\" name=\"docs\" (change)=\"onFileChange($event)\" #fileInput accept=\"PDF, JPG, DOCX,\r\n                                                        PNG\" multiple>\r\n                                            </div>\r\n\r\n                                            <div class=\"file-path-wrapper\" *ngFor=\"let item of files; let i = index\">\r\n                                                <input class=\"file-path validate\" type=\"text\" *ngIf=\"item.name\" value=\"{{item.name}}\">\r\n                        \r\n                                            </div>\r\n                                            <div class=\"file-path-wrapper\" *ngIf=\"filesCount < 1\">\r\n                                                <input class=\"file-path validate\" type=\"text\" placeholder=\"Please Select all your documents\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div> -->\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"file-field\">\r\n                                    <div class=\"btn btn-primary btn-sm\">\r\n                                        <span>Upload</span>\r\n                                        <input type=\"file\" name=\"file-1[]\" id=\"file-1\" class=\"inputfile inputfile-1\" #fileInput name=\"fileUp\" (change)=\"onFileSelect($event)\" multiple/>\r\n                                        <!-- <input type=\"file\" name=\"docs\" (change)=\"onFileChange1($event)\" #fileInput1 accept=\"PDF, JPG, DOCX,\r\n                                                        PNG\" multiple> -->\r\n                                    </div>\r\n                                    <div class=\"file-path-wrapper\" *ngFor=\"let item of files; let i = index\">\r\n                                        <input class=\"file-path validate\" type=\"text\" *ngIf=\"item.name\" value=\"{{item.name}}\">\r\n                                        <input class=\"file-path validate\" type=\"text\" *ngIf=\"item < 1\" placeholder=\"BEE Certificate\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12\">\r\n                                <input type=\"file\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload file...\" />\r\n                                <button type=\"button\" (click)=\"upload()\">Upload</button>\r\n                            </div>\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"file-field\">\r\n                                    <div class=\"btn btn-primary btn-sm\">\r\n                                        <span>Upload</span>\r\n                                        <input type=\"file\" name=\"docs\" (change)=\"onFileChange($event)\" #fileInput2 accept=\"PDF, JPG, DOCX,\r\n                                                        PNG\" multiple>\r\n                                    </div>\r\n                                    <div class=\"file-path-wrapper\" *ngFor=\"let item of files; let i = index\">\r\n                                        <input class=\"file-path validate\" type=\"text\" *ngIf=\"item.name\" value=\"{{item.name}}\">\r\n                                        <input class=\"file-path validate\" type=\"text\" *ngIf=\"!item.name\" placeholder=\"Letter of Good Standing\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"file-field\">\r\n                                    <div class=\"btn btn-primary btn-sm\">\r\n                                        <span>Upload</span>\r\n                                        <input type=\"file\" name=\"docs\" (change)=\"onFileChange($event)\" #fileInput3 accept=\"PDF, JPG, DOCX,\r\n                                                        PNG\" multiple>\r\n                                    </div>\r\n                                    <div class=\"file-path-wrapper\" *ngFor=\"let item of files; let i = index\">\r\n                                        <input class=\"file-path validate\" type=\"text\" *ngIf=\"item.name\" value=\"{{item.name}}\">\r\n                                        <input class=\"file-path validate\" type=\"text\" *ngIf=\"!item.name\" placeholder=\"Audited latest Financial Statements\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"file-field\">\r\n                                    <div class=\"btn btn-primary btn-sm\">\r\n                                        <span>Upload</span>\r\n                                        <input type=\"file\" name=\"docs\" (change)=\"onFileChange($event)\" #fileInput4 accept=\"PDF, JPG, DOCX,\r\n                                                        PNG\" multiple>\r\n                                    </div>\r\n                                    <div class=\"file-path-wrapper\" *ngFor=\"let item of files; let i = index\">\r\n                                        <input class=\"file-path validate\" type=\"text\" *ngIf=\"item.name\" value=\"{{item.name}}\">\r\n                                        <input class=\"file-path validate\" type=\"text\" *ngIf=\"!item.name\" placeholder=\"Proof of Banking Details\">\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"file-field\">\r\n                                    <div class=\"btn btn-primary btn-sm\">\r\n                                        <span>Upload</span>\r\n                                        <input type=\"file\" name=\"docs\" (change)=\"onFileChange($event)\" #fileInput5 accept=\"PDF, JPG, DOCX,\r\n                                                        PNG\" multiple>\r\n                                    </div>\r\n                                    <div class=\"file-path-wrapper\" *ngFor=\"let item of files; let i = index\">\r\n                                        <input class=\"file-path validate\" type=\"text\" *ngIf=\"item.name\" value=\"{{item.name}}\">\r\n                                        <input class=\"file-path validate\" type=\"text\" *ngIf=\"!item.name\" placeholder=\"Company Letterhead\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"file-field\">\r\n                                    <div class=\"btn btn-primary btn-sm\">\r\n                                        <span>Upload</span>\r\n                                        <input type=\"file\" name=\"docs\" (change)=\"onFileChange($event)\" #fileInput6 accept=\"PDF, JPG, DOCX,\r\n                                                        PNG\" multiple>\r\n                                    </div>\r\n                                    <div class=\"file-path-wrapper\" *ngFor=\"let item of files; let i = index\">\r\n                                        <input class=\"file-path validate\" type=\"text\" *ngIf=\"item.name\" value=\"{{item.name}}\">\r\n                                        <input class=\"file-path validate\" type=\"text\" *ngIf=\"!item.name\" placeholder=\"Tax Certificate\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"file-field\">\r\n                                    <div class=\"btn btn-primary btn-sm\">\r\n                                        <span>Upload</span>\r\n                                        <input type=\"file\" name=\"docs\" (change)=\"onFileChange($event)\" #fileInput7 accept=\"PDF, JPG, DOCX,\r\n                                                        PNG\" multiple>\r\n                                    </div>\r\n                                    <div class=\"file-path-wrapper\" *ngFor=\"let item of files; let i = index\">\r\n                                        <input class=\"file-path validate\" type=\"text\" *ngIf=\"item.name\" value=\"{{item.name}}\">\r\n                                        <input class=\"file-path validate\" type=\"text\" *ngIf=\"!item.name\" placeholder=\"MCC Certificate\">\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"file-field\">\r\n                                    <div class=\"btn btn-primary btn-sm\">\r\n                                        <span>Upload</span>\r\n                                        <input type=\"file\" name=\"docs\" (change)=\"onFileChange($event)\" #fileInput8 accept=\"PDF, JPG, DOCX,\r\n                                                        PNG\" multiple>\r\n                                    </div>\r\n                                    <div class=\"file-path-wrapper\" *ngFor=\"let item of files; let i = index\">\r\n                                        <input class=\"file-path validate\" type=\"text\" *ngIf=\"item.name\" value=\"{{item.name}}\">\r\n                                        <input class=\"file-path validate\" type=\"text\" *ngIf=\"!item.name\" placeholder=\"Declaration of possible conflict of Interest with Clinix Health Group (CHG)\">\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"file-field\">\r\n                                    <div class=\"btn btn-primary btn-sm\">\r\n                                        <span>Upload</span>\r\n                                        <input type=\"file\" name=\"docs\" (change)=\"onFileChange($event)\" #fileInput9 accept=\"PDF, JPG, DOCX,\r\n                                                        PNG\" multiple>\r\n                                    </div>\r\n                                    <div class=\"file-path-wrapper\" *ngFor=\"let item of files; let i = index\">\r\n                                        <input class=\"file-path validate\" type=\"text\" *ngIf=\"item.name\" value=\"{{item.name}}\">\r\n                                        <input class=\"file-path validate\" type=\"text\" *ngIf=\"!item.name\" placeholder=\"Copies of Identification Document (ID) of Directors\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"file-field\">\r\n                                    <div class=\"btn btn-primary btn-sm\">\r\n                                        <span>Upload</span>\r\n                                        <input type=\"file\" name=\"docs\" (change)=\"onFileChange($event)\" #fileInput10 accept=\"PDF, JPG, DOCX,\r\n                                                        PNG\" multiple>\r\n                                    </div>\r\n                                    <div class=\"file-path-wrapper\" *ngFor=\"let item of files; let i = index\">\r\n                                        <input class=\"file-path validate\" type=\"text\" *ngIf=\"item.name\" value=\"{{item.name}}\">\r\n                                        <input class=\"file-path validate\" type=\"text\" *ngIf=\"!item.name\" placeholder=\"Product price list\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <span class=\"float-left deep-orange-text display-block\" (click)=\"t.selectTab(0)\"><i class=\"fa fa-angle-left\"></i> Back</span>\r\n                            </div>\r\n                        </div>\r\n                    </app-tab>\r\n                </app-tabs>\r\n\r\n                <!-- Button -->\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <button type=\"submit\" [disabled]=\"!myForm.valid\" id=\"submitForm\" name=\"sumbitForm\" class=\"btn btn-primary btn-sm text-center\">Submit</button>\r\n                    </div>\r\n                </div>\r\n            </fieldset>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/form/form.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form/form.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var ng2_toastr_1 = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var auth_service_1 = __webpack_require__("./src/app/auth/auth.service.ts");
var config_1 = __webpack_require__("./src/app/config/config.ts");
var modal_1 = __webpack_require__("./node_modules/ng2-bs3-modal/components/modal.js");
var form_service_1 = __webpack_require__("./src/app/form/form.service.ts");
var form_model_1 = __webpack_require__("./src/app/form/form.model.ts");
var input_match_1 = __webpack_require__("./src/app/validators/input-match.ts");
var profile_service_1 = __webpack_require__("./src/app/user/profile/profile.service.ts");
var FormComponent = (function () {
    function FormComponent(fb, toastr, router, renderer, authService, formService, profileService) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.renderer = renderer;
        this.authService = authService;
        this.formService = formService;
        this.profileService = profileService;
        this.fetchedUser = [];
        // get the Auth Token from localStorage in order to Authenticate to back end while submitting the form
        this.token = localStorage.getItem('id_token');
        this.url = config_1.FORMS_API_URL + "/image";
        this.fileUrl = config_1.FORMS_API_URL + "/files";
        this.imageUrl = config_1.BASE_URL + "/uploads/tmp/";
        this.maxSize = 5000000;
        this.invalidFileSizeMessage = '{0}: Invalid file size, ';
        this.invalidFileSizeMessageDetail = 'Maximum upload size is {0}.';
        this.progress = 0;
        this.imageReady = false;
        this.onClear = new core_1.EventEmitter();
        /**
         * Upload File
         */
        this.loading = false;
        // maxSize = 10;
        this.usedSize = 0;
        this.filesToUpload = [];
    }
    FormComponent.prototype.deleteImage = function () {
        this.imageDeleteModal.dismiss();
        this.formService.deleteImage(this.imagePath)
            .subscribe(function (data) {
        });
        this.imageReady = false;
        this.clear();
    };
    FormComponent.prototype.dismissImageDelete = function () {
        this.imageDeleteModal.close();
    };
    // New File Upload
    FormComponent.prototype.upload = function () {
        this.makeFileRequest(this.fileUrl, [], this.filesToUpload).then(function (result) {
            console.log(result);
        }, function (error) {
            console.error(error);
        });
    };
    FormComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    FormComponent.prototype.makeFileRequest = function (fileUrl, params, files) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append('uploads[]', files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', fileUrl, true);
            xhr.setRequestHeader('Authorization', 'JWT ' + _this.token);
            xhr.send(formData);
        });
    };
    // New File Upload
    FormComponent.prototype.onFileChange = function (event) {
        this.usedSize = 0;
        if (event.target.files && event.target.files.length > 0) {
            for (var i = 0; i < event.target.files.length; i++) {
                if (event.target.files[i].name.match(/.jpeg|.jpg|.png|.doc|.pdf|.docx|.gif/gi)) {
                    this.files.push(event.target.files[i]);
                    this.usedSize += event.target.files[i].size;
                    this.filesCount += 1;
                }
            }
        }
    };
    FormComponent.prototype.onFileSelect = function (event) {
        var _this = this;
        this.clear();
        this.submitStarted = true;
        var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        var _loop_1 = function (i) {
            var file = files[i];
            if (this_1.validate(file)) {
                if (this_1.isFile(file)) {
                    this_1.files.push(files[i]);
                    var xhr_1 = new XMLHttpRequest();
                    var formData = new FormData();
                    // tslint:disable-next-line:no-shadowed-variable
                    for (var i_1 = 0; i_1 < this_1.files.length; i_1++) {
                        formData.append('fileUp', this_1.files[i_1], this_1.files[i_1].name);
                    }
                    xhr_1.onreadystatechange = function () {
                        if (xhr_1.readyState === 4) {
                            _this.progress = 0;
                            if (xhr_1.status === 201) {
                                _this.imagePath = xhr_1.response.replace(/^"|"$/g, '');
                                _this.imageReady = true;
                                _this.submitStarted = false;
                            }
                            else if (xhr_1.status !== 201) {
                                _this.toastr.error('There was a problem, please try again later');
                                _this.submitStarted = false;
                                _this.clear();
                            }
                            _this.clear();
                        }
                    };
                    xhr_1.upload.addEventListener('progress', function (e) {
                        if (e.lengthComputable) {
                            _this.progress = Math.round((e.loaded * 100) / e.total);
                        }
                    }, false);
                    xhr_1.open('POST', this_1.url, true);
                    xhr_1.setRequestHeader('Authorization', 'JWT ' + this_1.token);
                    xhr_1.send(formData);
                }
            }
            else if (!this_1.isFile(file)) {
                this_1.toastr.error('Only pdf, doc, jpep and png`s are allowed');
            }
        };
        var this_1 = this;
        for (var i = 0; i < files.length; i++) {
            _loop_1(i);
        }
    };
    // check if the image is actually an image by checking the mime type
    FormComponent.prototype.isFile = function (file) {
        if (!file.type.match(/.jpeg|.jpg|.png|.pdf|.doc|.docx|.gif/gi)) {
            this.toastr.error('Only pdf, doc, jpep and png`s are allowed');
            return false;
        }
        return true;
    };
    // check if the form has files ready to be uploaded
    FormComponent.prototype.hasFiles = function () {
        return this.files && this.files.length > 0;
    };
    // clears the form
    FormComponent.prototype.clear = function () {
        this.files = [];
        this.onClear.emit();
    };
    // remove the image from the preview
    FormComponent.prototype.remove = function (index) {
        this.files.splice(index, 1);
        this.fileInput.nativeElement.value = '';
    };
    // check the image file size
    FormComponent.prototype.validate = function (file) {
        if (this.maxSize && file.size > this.maxSize) {
            this.toastr.error(this.invalidFileSizeMessageDetail.replace('{0}', this.formatSize(this.maxSize)), this.invalidFileSizeMessage.replace('{0}', file.name));
            this.submitStarted = false;
            this.clear();
            return false;
        }
        return true;
    };
    // format the size to display it in toastr in case the user uploaded a file bigger than 5MB
    FormComponent.prototype.formatSize = function (bytes) {
        if (bytes === 0) {
            return '0 B';
        }
        var k = 1000, dm = 3, sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };
    FormComponent.prototype.ngOnInit = function () {
        this.files = [];
        this.myForm = this.fb.group({
            tradingName: new forms_1.FormControl(null, forms_1.Validators.required),
            registeredCompanyName: new forms_1.FormControl(null, forms_1.Validators.required),
            registrationNumber: new forms_1.FormControl(null, forms_1.Validators.required),
            confirmRegNumber: new forms_1.FormControl({ value: null, disabled: false }, [forms_1.Validators.required, input_match_1.regNumberMatch]),
            physicalAddress: new forms_1.FormControl(null, forms_1.Validators.required),
            postalAddress: new forms_1.FormControl(null, forms_1.Validators.required),
            tel: new forms_1.FormControl(null, forms_1.Validators.required),
            faxNo: new forms_1.FormControl(null, forms_1.Validators.required),
            vatNumber: new forms_1.FormControl(null, forms_1.Validators.required),
            website: new forms_1.FormControl(null, forms_1.Validators.required),
            confirmVatNumber: new forms_1.FormControl({ value: null, disabled: false }, [forms_1.Validators.required, input_match_1.vatNumberMatch]),
            accPersonName: new forms_1.FormControl(null, forms_1.Validators.required),
            accPersonNo: new forms_1.FormControl(null, forms_1.Validators.required),
            accPersonFaxNo: new forms_1.FormControl(null, forms_1.Validators.required),
            accPersonEmail: new forms_1.FormControl(null, forms_1.Validators.required),
            salesPersonName: new forms_1.FormControl(null, forms_1.Validators.required),
            salesPersonNo: new forms_1.FormControl(null, forms_1.Validators.required),
            salesPersonEmail: new forms_1.FormControl(null, forms_1.Validators.required),
            salesPersonFaxNo: new forms_1.FormControl(null, forms_1.Validators.required),
            serviceProduct: new forms_1.FormControl(null, forms_1.Validators.required),
            serviceProductInfo: new forms_1.FormControl(null, forms_1.Validators.required),
        });
    };
    // focus on first input box after the view is initialized
    FormComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.authService.isLoggedIn()) {
                var userId = localStorage.getItem('userId');
                _this.profileService.getUserDetails(userId)
                    .subscribe((function (data) {
                    var userArray = [];
                    // tslint:disable-next-line:forin
                    for (var key in data) {
                        userArray.push(data[key]);
                    }
                    _this.fetchedUser = userArray;
                }));
            }
        }, 50);
    };
    FormComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    FormComponent.prototype.logout = function () {
        return this.authService.logout();
    };
    // submit the form to back end
    FormComponent.prototype.submitForm = function () {
        var _this = this;
        this.submitStarted = true;
        var newForm = new form_model_1.Form(this.myForm.value.tradingName, this.myForm.value.registeredCompanyName, this.myForm.value.registrationNumber, this.myForm.value.physicalAddress, this.myForm.value.postalAddress, this.myForm.value.tel, this.myForm.value.faxNo, this.myForm.value.website, this.myForm.value.vatNumber, this.myForm.value.accPersonName, this.myForm.value.accPersonNo, this.myForm.value.accPersonFaxNo, this.myForm.value.accPersonEmail, this.myForm.value.salesPersonName, this.myForm.value.salesPersonNo, this.myForm.value.salesPersonFaxNo, this.myForm.value.salesPersonEmail, this.imagePath);
        console.log(this.imagePath);
        /**
         * disabling the submiting of form if files are null
         */
        // if (this.imageReady) {
        //   this.formService.submitNewForm(newForm)
        //     .subscribe(
        //       data => {
        //         this.router.navigateByUrl('/user/forms');
        //         this.toastr.success('Form submitted successfully');
        //       },
        //       error => {
        //         this.submitStarted = false;
        //         this.toastr.error('There was an error, please try again later');
        //       });
        // } else {
        //   this.submitStarted = false;
        //   this.toastr.info('Please select an image', 'Attention', {toastLife: 5000});
        //
        this.formService.submitNewForm(newForm)
            .subscribe(function (data) {
            _this.router.navigateByUrl('/user/forms');
            _this.toastr.success('Form submitted successfully');
        }, function (error) {
            _this.submitStarted = false;
            _this.toastr.error('There was an error, please try again later');
        });
    };
    return FormComponent;
}());
__decorate([
    core_1.ViewChild('fileInput'),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], FormComponent.prototype, "fileInput", void 0);
__decorate([
    core_1.ViewChild('imageDeleteModal'),
    __metadata("design:type", typeof (_b = typeof modal_1.ModalComponent !== "undefined" && modal_1.ModalComponent) === "function" && _b || Object)
], FormComponent.prototype, "imageDeleteModal", void 0);
FormComponent = __decorate([
    core_1.Component({
        selector: 'app-form',
        template: __webpack_require__("./src/app/form/form.component.html"),
        styles: [__webpack_require__("./src/app/form/form.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _c || Object, typeof (_d = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _d || Object, typeof (_e = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _e || Object, typeof (_f = typeof core_1.Renderer !== "undefined" && core_1.Renderer) === "function" && _f || Object, typeof (_g = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _g || Object, typeof (_h = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _h || Object, typeof (_j = typeof profile_service_1.ProfileService !== "undefined" && profile_service_1.ProfileService) === "function" && _j || Object])
], FormComponent);
exports.FormComponent = FormComponent;
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=E:/github/project-c/src/form.component.js.map

/***/ }),

/***/ "./src/app/form/form.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Form = (function () {
    function Form(// public textInputOne: string,
        //             public textInputTwo: string,
        tradingName, registeredCompanyName, registrationNumber, physicalAddress, postalAddress, tel, faxNo, website, vatNumber, accPersonName, accPersonNo, accPersonFaxNo, accPersonEmail, salesPersonName, salesPersonNo, salesPersonEmail, salesPersonFaxNo, fileUp, userId, formId) {
        this.tradingName = tradingName;
        this.registeredCompanyName = registeredCompanyName;
        this.registrationNumber = registrationNumber;
        this.physicalAddress = physicalAddress;
        this.postalAddress = postalAddress;
        this.tel = tel;
        this.faxNo = faxNo;
        this.website = website;
        this.vatNumber = vatNumber;
        this.accPersonName = accPersonName;
        this.accPersonNo = accPersonNo;
        this.accPersonFaxNo = accPersonFaxNo;
        this.accPersonEmail = accPersonEmail;
        this.salesPersonName = salesPersonName;
        this.salesPersonNo = salesPersonNo;
        this.salesPersonEmail = salesPersonEmail;
        this.salesPersonFaxNo = salesPersonFaxNo;
        this.fileUp = fileUp;
        this.userId = userId;
        this.formId = formId;
        // this.textInputOne = textInputOne;
        // this.textInputTwo = textInputTwo;
        this.tradingName = tradingName;
        this.registeredCompanyName = registeredCompanyName;
        this.registrationNumber = registrationNumber;
        this.physicalAddress = physicalAddress;
        this.postalAddress = postalAddress;
        this.tel = tel;
        this.faxNo = faxNo;
        this.website = website;
        this.vatNumber = vatNumber;
        this.accPersonName = accPersonName;
        this.accPersonNo = accPersonNo;
        this.accPersonFaxNo = accPersonFaxNo;
        this.accPersonEmail = accPersonEmail;
        this.salesPersonName = salesPersonName;
        this.salesPersonNo = salesPersonNo;
        this.salesPersonEmail = salesPersonEmail;
        this.salesPersonFaxNo = salesPersonFaxNo;
        this.fileUp = fileUp;
        this.userId = userId;
        this.formId = formId;
    }
    return Form;
}());
exports.Form = Form;
//# sourceMappingURL=E:/github/project-c/src/form.model.js.map

/***/ }),

/***/ "./src/app/form/form.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var error_service_1 = __webpack_require__("./src/app/errorHandler/error.service.ts");
var ng2_toastr_1 = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/add/operator/catch.js");
var config_1 = __webpack_require__("./src/app/config/config.ts");
var angular2_jwt_1 = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
var FormService = (function () {
    function FormService(authHttp, errorService, toastr) {
        this.authHttp = authHttp;
        this.errorService = errorService;
        this.toastr = toastr;
        this.token = localStorage.getItem('id_token');
        this.userId = localStorage.getItem('userId');
        this.forms = [];
        this.singleForm = Object;
        this.fetchedForms = Object;
    }
    // get user forms from backend in order to display them in the front end  WS
    FormService.prototype.getUserForms = function () {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.token);
        return this.authHttp.get(config_1.FORMS_API_URL + "/user/" + this.userId, { headers: headers })
            .timeout(1000)
            .map(function (response) {
            var forms = response.json().forms;
            var fetchedForms = [];
            for (var _i = 0, forms_1 = forms; _i < forms_1.length; _i++) {
                var form = forms_1[_i];
                fetchedForms.push(form);
            }
            _this.forms = fetchedForms;
            return fetchedForms;
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable_1.Observable.throw(error.json());
        });
    };
    FormService.prototype.submitNewForm = function (newForm) {
        var _this = this;
        var body = JSON.stringify(newForm);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.token);
        return this.authHttp.post(config_1.FORMS_API_URL + "/", body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable_1.Observable.throw(error.json());
        });
    };
    FormService.prototype.editForm = function (editForm, formId) {
        var _this = this;
        var body = JSON.stringify(editForm);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.token);
        return this.authHttp.patch(config_1.FORMS_API_URL + "/" + formId, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable_1.Observable.throw(error.json());
        });
    };
    FormService.prototype.deleteForm = function (form) {
        var _this = this;
        this.forms.splice(this.forms.indexOf(form), 1);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.token);
        return this.authHttp.delete(config_1.FORMS_API_URL + "/" + form, { headers: headers })
            .map(function (response) {
            _this.toastr.success('Form deleted successfully!');
            response.json();
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable_1.Observable.throw(error.json());
        });
    };
    FormService.prototype.getSingleForm = function (formId) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.token);
        return this.authHttp.get(config_1.FORMS_API_URL + "/" + formId, { headers: headers })
            .map(function (response) {
            _this.singleForm = response.json();
            return _this.singleForm;
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable_1.Observable.throw(error.json());
        });
    };
    FormService.prototype.deleteImage = function (image) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.token);
        return this.authHttp.delete(config_1.FORMS_API_URL + "/image/" + image, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable_1.Observable.throw(error.json());
        });
    };
    return FormService;
}());
FormService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof angular2_jwt_1.AuthHttp !== "undefined" && angular2_jwt_1.AuthHttp) === "function" && _a || Object, typeof (_b = typeof error_service_1.ErrorService !== "undefined" && error_service_1.ErrorService) === "function" && _b || Object, typeof (_c = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _c || Object])
], FormService);
exports.FormService = FormService;
var _a, _b, _c;
//# sourceMappingURL=E:/github/project-c/src/form.service.js.map

/***/ }),

/***/ "./src/app/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/app.component.ts"));
__export(__webpack_require__("./src/app/app.module.ts"));
//# sourceMappingURL=E:/github/project-c/src/index.js.map

/***/ }),

/***/ "./src/app/mainPage/mainPage.component.css":
/***/ (function(module, exports) {

module.exports = ".topPad {\r\n  margin-top: 100px !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/mainPage/mainPage.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<!--Intro Section-->\r\n\r\n<section class=\"view intro-2 custom-gradient rgba-gradient\">\r\n    <div class=\"full-bg-img\">\r\n        <div class=\"container flex-center\">\r\n            <div class=\"d-flex align-items-center content-height\">\r\n                <div class=\"row flex-center pt-5 mt-3\">\r\n                    <div class=\"col-md-10 text-center text-md-left mb-5\">\r\n                        <div class=\"white-text\">\r\n                            <h1 class=\"h1-responsive font-weight-bold wow fadeInLeft  mb-29\" data-wow-delay=\"0.3s\">Welcome to the Clinix Vendor Application Site</h1>\r\n                            <h4 class=\"wow fadeInLeft spacing-bottom\" data-wow-delay=\"0.3s\">We want to ensure that we have sufficient appropriately qualified vendors to provide goods and services when required</h4>\r\n                            <br>\r\n                            <a *ngIf=\"!isLoggedIn()\" routerLink=\"/user/login\" class=\"spacing-right btn btn-outline-white wow fadeInLeft\" data-wow-delay=\"0.3s\">Login to account <i class=\"fa fa-sign-in-alt\"></i></a>\r\n                            <a *ngIf=\"!isLoggedIn()\" routerLink=\"/user/register\" class=\"spacing-left btn btn-outline-white wow fadeInLeft\" data-wow-delay=\"0.3s\">Register as a vendor <i class=\"fa fa-user-plus\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/mainPage/mainPage.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var auth_service_1 = __webpack_require__("./src/app/auth/auth.service.ts");
var MainPageComponent = (function () {
    function MainPageComponent(authService) {
        this.authService = authService;
    }
    // check if user is logged in by asking the authentication service, we use this function in html file *ngIf directive
    MainPageComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    return MainPageComponent;
}());
MainPageComponent = __decorate([
    core_1.Component({
        selector: 'app-mainpage',
        template: __webpack_require__("./src/app/mainPage/mainPage.component.html"),
        styles: [__webpack_require__("./src/app/mainPage/mainPage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object])
], MainPageComponent);
exports.MainPageComponent = MainPageComponent;
var _a;
//# sourceMappingURL=E:/github/project-c/src/mainPage.component.js.map

/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".img-resized {\r\n    width: 8%;\r\n    margin-left: 10px;\r\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar\">\r\n    <div class=\"container\">\r\n        <a class=\"navbar-brand\" routerLink=\"/\">\r\n            <img src=\"http://clinixmyvoice.co.za/system/uploads/Clinix%20Health%20Academy/images/logo_white.png\" alt=\"Clinix\" class=\"logo\">\r\n        </a>\r\n        <div id=\"navbar\" class=\"navbar-collapse\">\r\n            <ul class=\"navbar-nav mr-auto\"> &nbsp; </ul>\r\n            <ul class=\"navbar-right navbar-nav\">\r\n                <li class=\"nav-item text-right\"><a class=\"nav-link text-orange font-bold\" href=\"#\" (click)=\"logout()\" *ngIf=\"isLoggedIn()\">Logout</a></li>\r\n                <li class=\"nav-item text-right\"><i class=\"mukam-mobile icon-3x pull-left\"></i><a class=\"nav-link text-orange font-bold\" routerLink=\"/user/login\">Admin</a></li>\r\n            </ul>\r\n            <span *ngIf=\"isLoggedIn() && !isAdmin()\" class=\"white-text phone inline\"><i class=\"mukam-mobile icon-3x pull-left\"></i><a class=\"nav-link text-orange font-bold\" routerLink=\"user/forms\">Profile</a></span>\r\n            <span *ngIf=\"isLoggedIn() && isAdmin()\" class=\"white-text phone inline\"><i class=\"mukam-mobile icon-3x pull-left\"></i><a class=\"nav-link text-orange font-bold\" routerLink=\"/admin\">Profile</a></span>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var auth_service_1 = __webpack_require__("./src/app/auth/auth.service.ts");
var admin_service_1 = __webpack_require__("./src/app/admin/services/admin.service.ts");
var profile_service_1 = __webpack_require__("./src/app/user/profile/profile.service.ts");
var NavbarComponent = (function () {
    function NavbarComponent(authService, adminService, profileService) {
        this.authService = authService;
        this.adminService = adminService;
        this.profileService = profileService;
        // private userId: string = localStorage.getItem('userId');
        // private userId: string;
        this.fetchedUser = [];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.isLoggedIn()) {
            var userId = localStorage.getItem('userId');
            this.profileService.getUserDetails(userId)
                .subscribe((function (data) {
                var userArray = [];
                // tslint:disable-next-line:forin
                for (var key in data) {
                    userArray.push(data[key]);
                }
                _this.fetchedUser = userArray;
            }));
        }
    };
    // check if user is logged in by asking our authentication service, we use this function in html file *ngIf directive
    NavbarComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    // this calls the logout function from our authentication service, it's activated when user clicks logout in front end.
    // It's called by the (click)='logout()' when the user presses the button
    NavbarComponent.prototype.logout = function () {
        return this.authService.logout();
    };
    NavbarComponent.prototype.isAdmin = function () {
        return this.adminService.isAdmin();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'app-navbar',
        template: __webpack_require__("./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof admin_service_1.AdminService !== "undefined" && admin_service_1.AdminService) === "function" && _b || Object, typeof (_c = typeof profile_service_1.ProfileService !== "undefined" && profile_service_1.ProfileService) === "function" && _c || Object])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
var _a, _b, _c;
//# sourceMappingURL=E:/github/project-c/src/navbar.component.js.map

/***/ }),

/***/ "./src/app/routes.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var user_routes_1 = __webpack_require__("./src/app/user/user.routes.ts");
var admin_routes_1 = __webpack_require__("./src/app/admin/admin.routes.ts");
var user_component_1 = __webpack_require__("./src/app/user/user.component.ts");
var form_component_1 = __webpack_require__("./src/app/form/form.component.ts");
var authguard_service_1 = __webpack_require__("./src/app/auth/authguard.service.ts");
var mainPage_component_1 = __webpack_require__("./src/app/mainPage/mainPage.component.ts");
var admin_component_1 = __webpack_require__("./src/app/admin/admin.component.ts");
var errorPage_component_1 = __webpack_require__("./src/app/errorPage/errorPage.component.ts");
var adminGuard_1 = __webpack_require__("./src/app/admin/services/adminGuard.ts");
var APP_ROUTES = [
    { path: '', component: mainPage_component_1.MainPageComponent, pathMatch: 'full' },
    { path: 'user', component: user_component_1.UserComponent, children: user_routes_1.USER_ROUTES },
    { path: 'form', component: form_component_1.FormComponent, canActivate: [authguard_service_1.AuthGuardService] },
    { path: 'admin', component: admin_component_1.AdminComponent, children: admin_routes_1.ADMIN_ROUTES, canActivate: [adminGuard_1.AdminGuardService] },
    { path: '404', component: errorPage_component_1.ErrorPageComponent },
    { path: '**', redirectTo: '404' }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=E:/github/project-c/src/routes.component.js.map

/***/ }),

/***/ "./src/app/user/accountRecover/forgetPassword.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"view intro-2 custom-gradient rgba-gradient\">\r\n    <div class=\"full-bg-img\">\r\n        <div class=\"container flex-center\">\r\n            <div class=\"d-flex align-items-center content-height\">\r\n                <div class=\"row flex-center pt-5 mt-3\">\r\n                    <div class=\"col-md-10 text-center text-md-left mb-5\">\r\n                        <div class=\"white-text\">\r\n                            <h1 class=\"h1-responsive font-weight-bold wow fadeInLeft  mb-29\" data-wow-delay=\"0.3s\">Welcome to the Clinix Vendor Application Site</h1>\r\n                            <h4 class=\"wow fadeInLeft spacing-bottom\" data-wow-delay=\"0.3s\">We want to ensure that we have sufficient appropriately qualified vendors to provide goods and services when required</h4>\r\n                            <br>\r\n                            <!-- <a appModal modal-open=\"login\" *ngIf=\"!isLoggedIn()\" routerLink=\"/user/login\" class=\"btn btn-outline-white wow fadeInLeft\" data-wow-delay=\"0.3s\">Login to account <i class=\"fa fa-sign-in-alt\"></i></a>\r\n                          <a appModal modal-open=\"register\" *ngIf=\"!isLoggedIn()\" routerLink=\"/user/register\" class=\"btn btn-outline-white wow fadeInLeft\" data-wow-delay=\"0.3s\">Register as a vendor <i class=\"fa fa-user-plus\"></i></a> -->\r\n                            <button class=\"btn btn-outline-white wow fadeInLeft spacing-right\" data-wow-delay=\"0.3s\">Login to account <i class=\"fa fa-sign-in-alt\"></i></button>\r\n                            <button class=\"btn btn-outline-white wow fadeInLeft spacing-left\" data-wow-delay=\"0.3s\">Register as a vendor <i class=\"fa fa-user-plus\"></i></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"modal display-block\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <a routerLink=\"/\" class=\"close-text text-right\">Close</a>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"card card-transparent\">\r\n                    <div class=\"card-body\">\r\n                        <!--Header-->\r\n                        <div class=\"text-header\">\r\n                            <h4 class=\"white-text\"><i class=\"fa fa-user white-text\"></i> Forgot Password:</h4>\r\n                        </div>\r\n                        <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\" class=\"login-form form\" novalidate>\r\n                            <h5 class=\"text-center white-text\">Please fill in your email and we will send you an email containing password reset instructions.</h5>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-envelope\"></span></span>\r\n                                <input #userEmail type=\"text\" formControlName=\"email\" placeholder=\"Email\" class=\"form-control\" autofocus autocapitalize=\"none\" autocomplete=\"off\" spellcheck=\"false\" autocorrect=\"none\">\r\n                            </div>\r\n                            <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">Please enter a valid email</div>\r\n                            <span class=\"help-block\"></span>\r\n                            <button class=\"btn btn-lg btn-primary btn-block margin-top\" type=\"submit\" [disabled]=\"!myForm.valid\">Submit</button>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/user/accountRecover/forgetPassword.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var auth_service_1 = __webpack_require__("./src/app/auth/auth.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var password_model_1 = __webpack_require__("./src/app/auth/password.model.ts");
var ng2_toastr_1 = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
var ForgetPasswordComponent = (function () {
    function ForgetPasswordComponent(fb, authService, router, toastr, renderer) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.renderer = renderer;
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
        this.email = new forms_1.FormControl('', [forms_1.Validators.required, this.emailValidator]);
        this.myForm = this.fb.group({
            email: this.email
        });
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['/']);
        }
    };
    ForgetPasswordComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.renderer.invokeElementMethod(_this.userEmail.nativeElement, 'focus', []);
        }, 50);
    };
    ForgetPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        var email = new password_model_1.Reset(this.myForm.value.email, null, null);
        this.authService.forget(email)
            .subscribe(function (data) {
            _this.router.navigate(['/']);
            _this.toastr.success('An email has been sent with password reset instructions');
        }, function (error) { return console.log(error); });
    };
    ForgetPasswordComponent.prototype.emailValidator = function (control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (!EMAIL_REGEXP.test(control.value)) {
            return { invalidEmail: true };
        }
    };
    return ForgetPasswordComponent;
}());
__decorate([
    core_1.ViewChild('userEmail'),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], ForgetPasswordComponent.prototype, "userEmail", void 0);
ForgetPasswordComponent = __decorate([
    core_1.Component({
        selector: 'app-forget-password',
        template: __webpack_require__("./src/app/user/accountRecover/forgetPassword.component.html"),
        styles: [__webpack_require__("./src/app/user/accountRecover/resetPagesStyle.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object, typeof (_c = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object, typeof (_e = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _e || Object, typeof (_f = typeof core_1.Renderer !== "undefined" && core_1.Renderer) === "function" && _f || Object])
], ForgetPasswordComponent);
exports.ForgetPasswordComponent = ForgetPasswordComponent;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=E:/github/project-c/src/forgetPassword.component.js.map

/***/ }),

/***/ "./src/app/user/accountRecover/resetPagesStyle.scss":
/***/ (function(module, exports) {

module.exports = ".topPad {\n  margin-top: 150px; }\n\n.form-control:focus {\n  background-color: transparent !important; }\n\n.form-control {\n  color: #fff; }\n"

/***/ }),

/***/ "./src/app/user/accountRecover/resetPassword.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"view intro-2 custom-gradient rgba-gradient\">\r\n    <div class=\"full-bg-img\">\r\n        <div class=\"container flex-center\">\r\n            <div class=\"d-flex align-items-center content-height\">\r\n                <div class=\"row flex-center pt-5 mt-3\">\r\n                    <div class=\"col-md-10 text-center text-md-left mb-5\">\r\n                        <div class=\"white-text\">\r\n                            <h1 class=\"h1-responsive font-weight-bold wow fadeInLeft  mb-29\" data-wow-delay=\"0.3s\">Welcome to the Clinix Vendor Application Site</h1>\r\n                            <h4 class=\"wow fadeInLeft spacing-bottom\" data-wow-delay=\"0.3s\">We want to ensure that we have sufficient appropriately qualified vendors to provide goods and services when required</h4>\r\n                            <br>\r\n                            <!-- <a appModal modal-open=\"login\" *ngIf=\"!isLoggedIn()\" routerLink=\"/user/login\" class=\"btn btn-outline-white wow fadeInLeft\" data-wow-delay=\"0.3s\">Login to account <i class=\"fa fa-sign-in-alt\"></i></a>\r\n                            <a appModal modal-open=\"register\" *ngIf=\"!isLoggedIn()\" routerLink=\"/user/register\" class=\"btn btn-outline-white wow fadeInLeft\" data-wow-delay=\"0.3s\">Register as a vendor <i class=\"fa fa-user-plus\"></i></a> -->\r\n                            <button class=\"btn btn-outline-white wow fadeInLeft spacing-right\" data-wow-delay=\"0.3s\">Login to account <i class=\"fa fa-sign-in-alt\"></i></button>\r\n                            <button class=\"btn btn-outline-white wow fadeInLeft spacing-left\" data-wow-delay=\"0.3s\">Register as a vendor <i class=\"fa fa-user-plus\"></i></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"modal display-block\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <a routerLink=\"/\" class=\"close-text text-right\">Close</a>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"card card-transparent\">\r\n                    <div class=\"card-body\">\r\n                        <!--Header-->\r\n                        <div class=\"text-header\">\r\n                            <h4 class=\"white-text\"><i class=\"fa fa-user white-text\"></i> Reset Password:</h4>\r\n                        </div>\r\n                        <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\" class=\"login-form form\" novalidate>\r\n                            <h5 #newPassword class=\"text-center white-text\">Please enter a new password and press submit.</h5>\r\n                            <span class=\"help-block\"></span>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-lock\"></span></span>\r\n                                <input type=\"password\" formControlName=\"password\" name=\"password\" id=\"password\" placeholder=\"Password\" class=\"form-control white-text\">\r\n                            </div>\r\n                            <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-danger\">Password must contain at least 6 characters</div>\r\n                            <br>\r\n                            <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!myForm.valid\">Submit</button>\r\n                        </form>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/user/accountRecover/resetPassword.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var auth_service_1 = __webpack_require__("./src/app/auth/auth.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var password_model_1 = __webpack_require__("./src/app/auth/password.model.ts");
var ng2_toastr_1 = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(fb, authService, router, activatedRoute, toastr, renderer) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.renderer = renderer;
        this.token = activatedRoute.snapshot.params['token'];
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.password = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6)]);
        this.myForm = this.fb.group({
            password: this.password
        });
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['/']);
        }
    };
    ResetPasswordComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.renderer.invokeElementMethod(_this.newPassword.nativeElement, 'focus', []);
        }, 50);
    };
    ResetPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        var password = new password_model_1.Reset(null, this.token, this.myForm.value.password);
        this.authService.reset(password)
            .subscribe(function (data) {
            _this.router.navigate(['/user/login']);
            _this.toastr.success('Your password has been changed succesfully');
        }, function (error) { return console.log(error); });
    };
    return ResetPasswordComponent;
}());
__decorate([
    core_1.ViewChild('newPassword'),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], ResetPasswordComponent.prototype, "newPassword", void 0);
ResetPasswordComponent = __decorate([
    core_1.Component({
        selector: 'app-reset-password',
        template: __webpack_require__("./src/app/user/accountRecover/resetPassword.component.html"),
        styles: [__webpack_require__("./src/app/user/accountRecover/resetPagesStyle.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object, typeof (_c = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object, typeof (_e = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _e || Object, typeof (_f = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _f || Object, typeof (_g = typeof core_1.Renderer !== "undefined" && core_1.Renderer) === "function" && _g || Object])
], ResetPasswordComponent);
exports.ResetPasswordComponent = ResetPasswordComponent;
var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=E:/github/project-c/src/resetPassword.component.js.map

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"view intro-2 custom-gradient rgba-gradient\">\r\n    <div class=\"full-bg-img\">\r\n        <div class=\"container flex-center\">\r\n            <div class=\"d-flex align-items-center content-height\">\r\n                <div class=\"row flex-center pt-5 mt-3\">\r\n                    <div class=\"col-md-10 text-center text-md-left mb-5\">\r\n                        <div class=\"white-text\">\r\n                            <h1 class=\"h1-responsive font-weight-bold wow fadeInLeft  mb-29\" data-wow-delay=\"0.3s\">Welcome to the Clinix Vendor Application Site</h1>\r\n                            <h4 class=\"wow fadeInLeft spacing-bottom\" data-wow-delay=\"0.3s\">We want to ensure that we have sufficient appropriately qualified vendors to provide goods and services when required</h4>\r\n                            <br>\r\n                            <!-- <a appModal modal-open=\"login\" *ngIf=\"!isLoggedIn()\" routerLink=\"/user/login\" class=\"btn btn-outline-white wow fadeInLeft\" data-wow-delay=\"0.3s\">Login to account <i class=\"fa fa-sign-in-alt\"></i></a>\r\n                            <a appModal modal-open=\"register\" *ngIf=\"!isLoggedIn()\" routerLink=\"/user/register\" class=\"btn btn-outline-white wow fadeInLeft\" data-wow-delay=\"0.3s\">Register as a vendor <i class=\"fa fa-user-plus\"></i></a> -->\r\n                            <button class=\"btn btn-outline-white wow fadeInLeft spacing-right\" data-wow-delay=\"0.3s\">Login to account <i class=\"fa fa-sign-in-alt\"></i></button>\r\n                            <button class=\"btn btn-outline-white wow fadeInLeft spacing-left\" data-wow-delay=\"0.3s\">Register as a vendor <i class=\"fa fa-user-plus\"></i></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"modal display-block\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <a routerLink=\"/\" class=\"close-text text-right\">Close</a>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"card card-transparent\">\r\n                    <div class=\"card-body\">\r\n                        <!--Header-->\r\n                        <div class=\"text-header\">\r\n                            <h4 class=\"white-text\"><i class=\"fa fa-user white-text\"></i> Login:</h4>\r\n                        </div>\r\n                        <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\" class=\"clearfix pad-top-10\" novalidate autocomplete=\"off\">\r\n                            <!--Body-->\r\n                            <div class=\"md-form \">\r\n                                <i class=\"fa fa-envelope prefix white-text\"></i>\r\n                                <input #userEmail type=\"text\" formControlName=\"email\" class=\"form-control\" autocomplete=\"off\">\r\n                                <label for=\"userEmail\">Email</label>\r\n                                <span [hidden]=\"email.valid || email.pristine\" class=\"help-block text-danger\">Please enter a valid email format</span>\r\n                            </div>\r\n                            <div class=\"md-form\">\r\n                                <i class=\"fa fa-key prefix white-text\"></i>\r\n                                <input type=\"password\" formControlName=\"password\" class=\"form-control\" autocomplete=\"off\">\r\n                                <label for=\"password\">Password</label>\r\n                                <span [hidden]=\"password.valid || password.pristine\" class=\"help-block text-danger\">Password must contain 6 or more characters</span>\r\n                            </div>\r\n                            <div class=\"text-center\">\r\n                                <button [disabled]=\"!myForm.valid\" class=\"btn btn-deep-orange btn-block waves-effect waves-light\" type=\"submit\">\r\n                                        <span *ngIf=\"!loading\">Login <i class=\"fa fa-sign-in-alt\"></i></span>\r\n                                        <span *ngIf=\"loading\">\r\n                                        <app-loader></app-loader>\r\n                                        </span>\r\n                                      </button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                    <!--Footer-->\r\n                    <div class=\"modal-footer\">\r\n                        <div class=\"options\">\r\n                            <span class=\"white-text pull-right display-block text-right\">Not a member? <a routerLink=\"/user/register\" class=\"deep-orange-text\">Sign Up</a></span>\r\n                            <span class=\"white-text pull-right display-block text-right\">Lost password? <a class=\"deep-orange-text\" [routerLink]=\"'/user/reset'\">Reset here</a></span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/user/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ".md-form input[type=date],\n.md-form input[type=datetime-local],\n.md-form input[type=email],\n.md-form input[type=number],\n.md-form input[type=password],\n.md-form input[type=search-md],\n.md-form input[type=search],\n.md-form input[type=tel],\n.md-form input[type=text],\n.md-form input[type=time],\n.md-form input[type=url],\n.md-form textarea.md-textarea {\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  outline: 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border: none;\n  border-bottom: 1px solid #ced4da;\n  border-radius: 0;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  background-color: transparent; }\n\n.form-control {\n  color: #fff; }\n"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var ng2_toastr_1 = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var auth_service_1 = __webpack_require__("./src/app/auth/auth.service.ts");
var user_model_1 = __webpack_require__("./src/app/auth/user.model.ts");
var input_match_1 = __webpack_require__("./src/app/validators/input-match.ts");
var admin_service_1 = __webpack_require__("./src/app/admin/services/admin.service.ts");
var LoginComponent = (function () {
    function LoginComponent(fb, authService, router, toastr, adminService, renderer) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.adminService = adminService;
        this.renderer = renderer;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loading = false;
        this.email = new forms_1.FormControl('', [forms_1.Validators.required, input_match_1.emailValidator]);
        this.password = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6)]);
        this.myForm = this.fb.group({
            email: this.email,
            password: this.password
        });
        // check if the user is logged in while trying to access the login page, if the user is logged in, we redirect him to the form page
        if (this.authService.isLoggedIn()) {
            this.toastr.info('You are already logged in');
            this.router.navigate(['/user/forms']);
        }
        // check if the user has a form and redirect him to the form
        /**
         * ToDo
         * Add method to redirect to edit form if it exits
         */
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.renderer.invokeElementMethod(_this.userEmail.nativeElement, 'focus', []);
        }, 50);
    };
    // submit the login form with the user credentials and navigate the user to the index page of our app
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var user = new user_model_1.User(this.myForm.value.email, this.myForm.value.password);
        this.authService.signin(user)
            .subscribe(function (data) {
            // if the user credentials are correct, set the localStorage token and userId,
            // we need these info in order to do stuff later when the user is signed in and verified
            localStorage.setItem('id_token', data.token);
            localStorage.setItem('userId', data.user._id);
            localStorage.setItem('email', data.user.email);
            localStorage.setItem('role', data.user.role[0]);
            // navigate user to index page of our app
            if (_this.adminService.isAdmin()) {
                _this.router.navigate(['admin']);
            }
            else {
                _this.router.navigate(['/user/forms']);
            }
            // display toastr success message pop up to inform the user that he logged in successfully
            _this.toastr.success('You have been logged in!');
        }, function (error) { return console.log(error); });
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild('userEmail'),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], LoginComponent.prototype, "userEmail", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        template: __webpack_require__("./src/app/user/login/login.component.html"),
        styles: [__webpack_require__("./src/app/user/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object, typeof (_c = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object, typeof (_e = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _e || Object, typeof (_f = typeof admin_service_1.AdminService !== "undefined" && admin_service_1.AdminService) === "function" && _f || Object, typeof (_g = typeof core_1.Renderer !== "undefined" && core_1.Renderer) === "function" && _g || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=E:/github/project-c/src/login.component.js.map

/***/ }),

/***/ "./src/app/user/profile/changePassword/changePassword.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container topPad\">\r\n  <form [formGroup]=\"resetPasswordForm\" (ngSubmit)=\"onSubmit()\" class=\"register-form form\" novalidate>\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-lock\"></span></span>\r\n      <input #userPassword type=\"password\" formControlName=\"currentPassword\" placeholder=\"Current Password\" class=\"form-control\">\r\n    </div>\r\n    <div [hidden]=\"currentPassword.valid || currentPassword.pristine\" class=\"alert alert-danger\">Password must contain 6 or more characters</div>\r\n    <span class=\"help-block\"></span>\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-lock\"></span></span>\r\n      <input type=\"password\" formControlName=\"newPassword\" placeholder=\"New Password\" class=\"form-control\">\r\n    </div>\r\n    <div [hidden]=\"newPassword.valid || newPassword.pristine\" class=\"alert alert-danger\">Password must contain 6 or more characters</div>\r\n    <br>\r\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!resetPasswordForm.valid\">Change Password</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/profile/changePassword/changePassword.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var ng2_toastr_1 = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var userProfile_model_1 = __webpack_require__("./src/app/user/profile/userProfile.model.ts");
var profile_service_1 = __webpack_require__("./src/app/user/profile/profile.service.ts");
var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(fb, profileService, router, toastr, renderer) {
        this.fb = fb;
        this.profileService = profileService;
        this.router = router;
        this.toastr = toastr;
        this.renderer = renderer;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.currentPassword = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6)]);
        this.newPassword = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6)]);
        this.resetPasswordForm = this.fb.group({
            currentPassword: this.currentPassword,
            newPassword: this.newPassword
        });
    };
    // focus on 'current password' input box after content is initialized
    ChangePasswordComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.renderer.invokeElementMethod(_this.userPassword.nativeElement, 'focus', []);
        }, 50);
    };
    // submit the password change form to the backend with the new desired credentials
    ChangePasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        var newPass = new userProfile_model_1.newPassword(this.resetPasswordForm.value.currentPassword, this.resetPasswordForm.value.newPassword);
        this.profileService.newPassword(newPass)
            .subscribe(function (data) {
            // after successfull registration, the user is redirected to the login page
            _this.router.navigate(['/user/login']);
            localStorage.removeItem('id_token');
            // toastr message pops up to inform user that the registration was successfull
            _this.toastr.success('Please login with your new password', 'Password changed');
        });
    };
    return ChangePasswordComponent;
}());
__decorate([
    core_1.ViewChild('userPassword'),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], ChangePasswordComponent.prototype, "userPassword", void 0);
ChangePasswordComponent = __decorate([
    core_1.Component({
        selector: 'app-change-password',
        template: __webpack_require__("./src/app/user/profile/changePassword/changePassword.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object, typeof (_c = typeof profile_service_1.ProfileService !== "undefined" && profile_service_1.ProfileService) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object, typeof (_e = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _e || Object, typeof (_f = typeof core_1.Renderer !== "undefined" && core_1.Renderer) === "function" && _f || Object])
], ChangePasswordComponent);
exports.ChangePasswordComponent = ChangePasswordComponent;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=E:/github/project-c/src/changePassword.component.js.map

/***/ }),

/***/ "./src/app/user/profile/profile.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/add/operator/catch.js");
var error_service_1 = __webpack_require__("./src/app/errorHandler/error.service.ts");
var auth_service_1 = __webpack_require__("./src/app/auth/auth.service.ts");
var angular2_jwt_1 = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
var config_1 = __webpack_require__("./src/app/config/config.ts");
var ProfileService = (function () {
    function ProfileService(http, errorService, authService) {
        this.http = http;
        this.errorService = errorService;
        this.authService = authService;
    }
    // get user details from database to display them in front end profile page
    ProfileService.prototype.getUserDetails = function (userId) {
        var _this = this;
        if (this.authService.isLoggedIn()) {
            var token = localStorage.getItem('id_token');
            // tslint:disable-next-line:no-shadowed-variable
            var userId_1 = localStorage.getItem('userId');
            var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
            headers.append('Authorization', token);
            return this.http.get(config_1.USER_API_URL + "/" + userId_1, { headers: headers })
                .map(function (response) { return response.json(); })
                .catch(function (error) {
                _this.errorService.handleError(error.json());
                return Observable_1.Observable.throw(error.json());
            });
        }
    };
    // submit the new password via the form in front end
    ProfileService.prototype.newPassword = function (newPass) {
        var _this = this;
        if (this.authService.isLoggedIn()) {
            var token = localStorage.getItem('id_token');
            var body = JSON.stringify(newPass);
            var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
            headers.append('Authorization', token);
            return this.http.post(config_1.USER_API_URL + "/password", body, { headers: headers })
                .map(function (response) { return response.json(); })
                .catch(function (error) {
                _this.errorService.handleError((error.json()));
                return Observable_1.Observable.throw(error.json());
            });
        }
    };
    return ProfileService;
}());
ProfileService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof angular2_jwt_1.AuthHttp !== "undefined" && angular2_jwt_1.AuthHttp) === "function" && _a || Object, typeof (_b = typeof error_service_1.ErrorService !== "undefined" && error_service_1.ErrorService) === "function" && _b || Object, typeof (_c = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _c || Object])
], ProfileService);
exports.ProfileService = ProfileService;
var _a, _b, _c;
//# sourceMappingURL=E:/github/project-c/src/profile.service.js.map

/***/ }),

/***/ "./src/app/user/profile/userProfile.component.css":
/***/ (function(module, exports) {

module.exports = ".img-resized {\r\n  width: 80%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/user/profile/userProfile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container pad-top-header\">\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n            <div *ngFor=\"let user of fetchedUser\" class=\"text-center\">\r\n    \r\n                <form>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"profilePictureTempEdit\">\r\n                            <button *ngIf=\"submitStarted\" class=\"disabled btn-no-hover btn btn-default centered progress-button\">\r\n                <i class=\"fa fa-circle-o-notch fa-spin fa-fw\"></i> Please wait... <span class=\"progress-percent\">{{progress}}%</span>\r\n              </button>\r\n                            <div class=\"text-center top-margin\">\r\n                                <div class=\"profilePictureTempEdit\" *ngIf=\"oldImage && !imageReady\">\r\n                                    <img *ngIf=\"user.profilePic; else noImage\" class=\"img-resized  img-thumbnail\" src=\"./uploads/profiles/{{user._id}}/{{user.profilePic}}\" alt=\"image\" onerror=\"this.src ='assets/images/no-image.jpg';\">\r\n                                    <ng-template #noImage><img src=\"./assets/images/profile-placeholder.png\" class=\"img-resized  img-thumbnail\"></ng-template>\r\n                                    <div class=\"upload-button\" *ngIf=\"!imageReady\">\r\n                                        <input type=\"file\" name=\"file-1\" id=\"file-1\" class=\"inputfile4 inputfile-4\" (change)=\"onFileSelect($event)\">\r\n                                        <label for=\"file-1\">\r\n                <span>\r\n                </span>\r\n                    </label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"profilePictureTempEdit\">\r\n                                    <img *ngIf=\"imageReady\" #image class=\"img-responsive\" src=\"{{imageUrl}}{{imagePath}}\" alt=\"image\" onerror=\"this.src ='assets/images/no-image.jpg';\" />\r\n                                    <div class=\"upload-button\">\r\n                                        <input type=\"file\" name=\"file-2\" id=\"file-2\" class=\"inputfile4 inputfile-4\" (change)=\"onFileSelect($event)\">\r\n                                        <label for=\"file-2\">\r\n                  <span>\r\n                  </span>\r\n                    </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-8 col-sm-6 col-xs-12 personal-info\">\r\n            <h3>Personal info</h3>\r\n            <form *ngFor=\"let user of fetchedUser\" class=\"form-horizontal\" role=\"form\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-lg-3 control-label\">User ID:</label>\r\n                    <div class=\"col-lg-8\">\r\n                        <p class=\"form-control-static\">{{user._id}}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-lg-3 control-label\">Email:</label>\r\n                    <div class=\"col-lg-8\">\r\n                        <p class=\"form-control-static\">{{user.email}}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-lg-3 control-label\">Joined at:</label>\r\n                    <div class=\"col-lg-8\">\r\n                        <p class=\"form-control-static\">{{user.createdAt | date: 'medium'}}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-lg-3 control-label\">Your role:</label>\r\n                    <div class=\"col-lg-8\">\r\n                        <p class=\"form-control-static\">{{user.role}}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-3 control-label\"></label>\r\n                    <div class=\"col-md-8\">\r\n                        <button class=\"btn btn-primary\" [routerLink]=\"['password']\" type=\"button\">Change Password</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n\r\n<div class=\"card card-profile\">\r\n    <div class=\"card-avatar\">\r\n        <a>\r\n            <img class=\"img\" src=\"../assets/images/vendor_profile.png\" alt=\"image\">\r\n        </a>\r\n    </div>\r\n    <div class=\"content\" *ngFor=\"let user of fetchedUser\">\r\n        <h6 class=\"category text-gray\"></h6>\r\n        <h4 class=\"card-title\">Tempest Hodings</h4>\r\n        <h4 class=\"card-title\"></h4>\r\n        <p class=\"card-content\">\r\n            <b class=\"\">Email </b> <br/>{{user.email}} <br/>\r\n            <b class=\"text-bold spacing-top display-block\">Telephone</b> 073 408 4441<br/>\r\n            <b class=\"text-bold spacing-top display-block\">Status</b> Waiting approval\r\n        </p>\r\n\r\n        <a routerLink (click)=\"logout()\" class=\"btn btn-orange btn-round btn-sm spacing-bottom\">Logout</a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/profile/userProfile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var profile_service_1 = __webpack_require__("./src/app/user/profile/profile.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var ng2_toastr_1 = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
var config_1 = __webpack_require__("./src/app/config/config.ts");
var auth_service_1 = __webpack_require__("./src/app/auth/auth.service.ts");
var UserProfileComponent = (function () {
    function UserProfileComponent(profileService, router, toastr, authService) {
        this.profileService = profileService;
        this.router = router;
        this.toastr = toastr;
        this.authService = authService;
        this.userId = localStorage.getItem('userId');
        this.token = localStorage.getItem('id_token');
        this.url = config_1.USER_API_URL + "/image";
        this.imageUrl = config_1.BASE_URL + "/uploads/tmp/";
        this.fetchedUser = [];
        this.maxSize = 5000000;
        this.invalidFileSizeMessage = '{0}: Invalid file size, ';
        this.invalidFileSizeMessageDetail = 'Maximum upload size is {0}.';
        this.onClear = new core_1.EventEmitter();
        this.progress = 0;
        this.imageReady = false;
        this.oldImage = true;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.files = [];
        this.profileService.getUserDetails(this.userId)
            .subscribe((function (data) {
            var userArray = [];
            // tslint:disable-next-line:forin
            for (var key in data) {
                userArray.push(data[key]);
            }
            _this.fetchedUser = userArray;
        }));
    };
    UserProfileComponent.prototype.onFileSelect = function (event) {
        var _this = this;
        this.clear();
        this.submitStarted = true;
        var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        var _loop_1 = function (i) {
            var file = files[i];
            if (this_1.validate(file)) {
                if (this_1.isFile(file)) {
                    this_1.files.push(files[i]);
                    var xhr_1 = new XMLHttpRequest();
                    var formData = new FormData();
                    for (var i_1 = 0; i_1 < this_1.files.length; i_1++) {
                        formData.append('fileUp', this_1.files[i_1], this_1.files[i_1].name);
                    }
                    xhr_1.onreadystatechange = function () {
                        if (xhr_1.readyState === 4) {
                            _this.progress = 0;
                            if (xhr_1.status === 201) {
                                _this.imagePath = xhr_1.response.replace(/^"|"$/g, '');
                                _this.imageReady = true;
                                _this.oldImage = false;
                                _this.submitStarted = false;
                            }
                            else if (xhr_1.status !== 201) {
                                _this.toastr.error('There was an error, please try again later');
                                _this.submitStarted = false;
                                _this.oldImage = true;
                                _this.clear();
                            }
                            _this.clear();
                        }
                    };
                    xhr_1.upload.addEventListener('progress', function (e) {
                        if (e.lengthComputable) {
                            _this.progress = Math.round((e.loaded * 100) / e.total);
                        }
                    }, false);
                    xhr_1.open('POST', this_1.url, true);
                    xhr_1.setRequestHeader('Authorization', 'JWT ' + this_1.token);
                    xhr_1.send(formData);
                    console.log(formData);
                }
            }
            else if (!this_1.isFile(file)) {
                this_1.toastr.error('Only pdf, doc, jpep and png are allowed');
                this_1.clear();
            }
        };
        var this_1 = this;
        for (var i = 0; i < files.length; i++) {
            _loop_1(i);
        }
    };
    // check if the image is actually an image by checking the mime type
    UserProfileComponent.prototype.isFile = function (file) {
        if (!file.type.match(/.jpeg|.jpg|.png|.doc|.docx|.gif/gi)) {
            this.toastr.error('Only pdf, doc, jpep and png are allowed');
            return false;
        }
        return true;
    };
    // check if the form has files ready to be uploaded
    UserProfileComponent.prototype.hasFiles = function () {
        return this.files && this.files.length > 0;
    };
    // clears the form
    UserProfileComponent.prototype.clear = function () {
        this.files = [];
        this.onClear.emit();
    };
    // remove the image from the preview
    UserProfileComponent.prototype.remove = function (index) {
        this.files.splice(index, 1);
        this.fileInput.nativeElement.value = '';
    };
    // check the image file size
    UserProfileComponent.prototype.validate = function (file) {
        if (this.maxSize && file.size > this.maxSize) {
            this.toastr.error(this.invalidFileSizeMessageDetail.replace('{0}', this.formatSize(this.maxSize)), this.invalidFileSizeMessage.replace('{0}', file.name));
            this.submitStarted = false;
            return false;
        }
        return true;
    };
    // format the size to display it in toastr in case the user uploaded a file bigger than 5MB
    UserProfileComponent.prototype.formatSize = function (bytes) {
        if (bytes === 0) {
            return '0 B';
        }
        var k = 1000, dm = 3, sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };
    UserProfileComponent.prototype.logout = function () {
        return this.authService.logout();
    };
    return UserProfileComponent;
}());
__decorate([
    core_1.ViewChild('fileInput'),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], UserProfileComponent.prototype, "fileInput", void 0);
__decorate([
    core_1.ViewChild('profileImage'),
    __metadata("design:type", typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object)
], UserProfileComponent.prototype, "profileImage", void 0);
UserProfileComponent = __decorate([
    core_1.Component({
        selector: 'app-userprofile',
        template: __webpack_require__("./src/app/user/profile/userProfile.component.html"),
        styles: [__webpack_require__("./src/app/user/profile/userProfile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof profile_service_1.ProfileService !== "undefined" && profile_service_1.ProfileService) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object, typeof (_e = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _e || Object, typeof (_f = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _f || Object])
], UserProfileComponent);
exports.UserProfileComponent = UserProfileComponent;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=E:/github/project-c/src/userProfile.component.js.map

/***/ }),

/***/ "./src/app/user/profile/userProfile.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UserProfile = (function () {
    function UserProfile(email, role, createdAt, updatedAt, id, profilePic) {
        this.email = email;
        this.role = role;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.id = id;
        this.profilePic = profilePic;
    }
    return UserProfile;
}());
exports.UserProfile = UserProfile;
// tslint:disable-next-line:class-name
var newPassword = (function () {
    function newPassword(currentPassword, newPassword) {
        this.currentPassword = currentPassword;
        this.newPassword = newPassword;
    }
    return newPassword;
}());
exports.newPassword = newPassword;
//# sourceMappingURL=E:/github/project-c/src/userProfile.model.js.map

/***/ }),

/***/ "./src/app/user/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".topPad {\r\n  margin-top: 150px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"view intro-2 custom-gradient rgba-gradient\">\r\n    <div class=\"full-bg-img\">\r\n        <div class=\"container flex-center\">\r\n            <div class=\"d-flex align-items-center content-height\">\r\n                <div class=\"row flex-center pt-5 mt-3\">\r\n                    <div class=\"col-md-10 text-center text-md-left mb-5\">\r\n                        <div class=\"white-text\">\r\n                            <h1 class=\"h1-responsive font-weight-bold wow fadeInLeft  mb-29\" data-wow-delay=\"0.3s\">Welcome to the Clinix Vendor Application Site</h1>\r\n                            <h4 class=\"wow fadeInLeft spacing-bottom\" data-wow-delay=\"0.3s\">We want to ensure that we have sufficient appropriately qualified vendors to provide goods and services when required</h4>\r\n                            <br>\r\n                            <!-- <a appModal modal-open=\"login\" *ngIf=\"!isLoggedIn()\" routerLink=\"/user/login\" class=\"btn btn-outline-white wow fadeInLeft\" data-wow-delay=\"0.3s\">Login to account <i class=\"fa fa-sign-in-alt\"></i></a>\r\n                                <a appModal modal-open=\"register\" *ngIf=\"!isLoggedIn()\" routerLink=\"/user/register\" class=\"btn btn-outline-white wow fadeInLeft\" data-wow-delay=\"0.3s\">Register as a vendor <i class=\"fa fa-user-plus\"></i></a> -->\r\n                            <button class=\"btn btn-outline-white wow fadeInLeft spacing-right\" data-wow-delay=\"0.3s\">Login to account <i class=\"fa fa-sign-in-alt\"></i></button>\r\n                            <button class=\"btn btn-outline-white wow fadeInLeft spacing-left\" data-wow-delay=\"0.3s\">Register as a vendor <i class=\"fa fa-user-plus\"></i></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"modal display-block\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <a routerLink=\"/\" class=\"close-text text-right\">Close</a>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"card card-transparent\">\r\n                    <div class=\"card-body\">\r\n                        <!--Header-->\r\n                        <div class=\"text-header\">\r\n                            <h4 class=\"white-text\"><i class=\"fa fa-user-plus white-text\"></i> Register:</h4>\r\n                        </div>\r\n                        <!--Body-->\r\n                        <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n                            <div class=\"md-form \">\r\n                                <i class=\"fa fa-envelope prefix white-text\"></i>\r\n                                <input #userEmail type=\"text\" formControlName=\"email\" class=\"form-control\">\r\n                                <label for=\"email\">Email</label>\r\n                                <span [hidden]=\"email.valid || email.pristine\" class=\"help-block text-danger\">Please enter a valid email format</span>\r\n                            </div>\r\n                            <div class=\"md-form\">\r\n                                <i class=\"fa fa-key prefix white-text\"></i>\r\n                                <input type=\"password\" formControlName=\"password\" class=\"form-control\">\r\n                                <label for=\"password\">Password</label>\r\n                                <span [hidden]=\"password.valid || password.pristine\" class=\"help-block text-danger\">Password must contain 6 or more characters</span>\r\n                            </div>\r\n                            <div class=\"md-form\" [hidden]=\"!password.valid\">\r\n                                <i class=\"fa fa-key prefix white-text\"></i>\r\n                                <input class=\"form-control\" type=\"password\" formControlName=\"confirmPassword\" name=\"confirmPassword\" />\r\n                                <label for=\"confirmPassword\">Confirm Password</label>\r\n                                <span *ngIf=\"myForm.get('confirmPassword').hasError('passwordMatch') && myForm.get('confirmPassword').touched\" class=\"help-block text-danger\">Passwords do not match</span>\r\n                            </div>\r\n                            <div class=\"text-center\">\r\n                                <button [disabled]=\"!myForm.valid\" class=\"btn btn-deep-orange btn-block waves-effect waves-light\" type=\"submit\">\r\n                                        <span *ngIf=\"!loading\">Register <i class=\"fa fa-user-plus\"></i></span>\r\n                                            <span *ngIf=\"loading\">\r\n                                                <app-loader></app-loader>\r\n                                            </span>\r\n                                        </button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n\r\n                    <!--Footer-->\r\n                    <div class=\"modal-footer\">\r\n                        <div class=\"options\">\r\n                            <span class=\"white-text pull-right display-block text-right\">Already have an account <a routerLink=\"/user/login\" class=\"deep-orange-text\">Login</a></span>\r\n                            <span class=\"white-text display-block pull-right text-right\">Lost password? <a class=\"deep-orange-text\" [routerLink]=\"'/user/reset'\">Reset here</a></span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/user/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var ng2_toastr_1 = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var auth_service_1 = __webpack_require__("./src/app/auth/auth.service.ts");
var user_model_1 = __webpack_require__("./src/app/auth/user.model.ts");
var input_match_1 = __webpack_require__("./src/app/validators/input-match.ts");
var RegisterComponent = (function () {
    function RegisterComponent(_fb, _authService, _router, toastr, renderer) {
        this._fb = _fb;
        this._authService = _authService;
        this._router = _router;
        this.toastr = toastr;
        this.renderer = renderer;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.loading = false;
        // if the user tries to hit the register page, first we check if he is logged in or not, if he is then we redirect him to the form page
        if (this._authService.isLoggedIn()) {
            this._router.navigateByUrl('/form');
        }
        this.email = new forms_1.FormControl('', [forms_1.Validators.required, input_match_1.emailValidator]);
        this.password = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6)]);
        this.confirmPassword = new forms_1.FormControl({ value: null, disabled: false }, [forms_1.Validators.required, input_match_1.passwordMatch]);
        this.myForm = this._fb.group({
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword,
        });
    };
    RegisterComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.renderer.invokeElementMethod(_this.userEmail.nativeElement, 'focus', []);
        }, 50);
    };
    // submit the register form to the backend with the user's desired credentials
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var user = new user_model_1.User(this.myForm.value.email, this.myForm.value.password);
        this._authService.signup(user)
            .subscribe(function (data) {
            // after successfull registration, the user is redirected to the login page
            _this._router.navigate(['/user/login']);
            // toastr message pops up to inform user that the registration was successfull
            _this.toastr.success('Please Login', 'Registration Successfull');
        });
    };
    return RegisterComponent;
}());
__decorate([
    core_1.ViewChild('userEmail'),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], RegisterComponent.prototype, "userEmail", void 0);
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'app-register',
        template: __webpack_require__("./src/app/user/register/register.component.html"),
        styles: [__webpack_require__("./src/app/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object, typeof (_c = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object, typeof (_e = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _e || Object, typeof (_f = typeof core_1.Renderer !== "undefined" && core_1.Renderer) === "function" && _f || Object])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=E:/github/project-c/src/register.component.js.map

/***/ }),

/***/ "./src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'app-user',
        template: __webpack_require__("./src/app/user/user.component.html")
    }),
    __metadata("design:paramtypes", [])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=E:/github/project-c/src/user.component.js.map

/***/ }),

/***/ "./src/app/user/user.routes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = __webpack_require__("./src/app/user/login/login.component.ts");
var register_component_1 = __webpack_require__("./src/app/user/register/register.component.ts");
var resetPassword_component_1 = __webpack_require__("./src/app/user/accountRecover/resetPassword.component.ts");
var forgetPassword_component_1 = __webpack_require__("./src/app/user/accountRecover/forgetPassword.component.ts");
var userForms_component_1 = __webpack_require__("./src/app/userForms/formsTable/userForms.component.ts");
var authguard_service_1 = __webpack_require__("./src/app/auth/authguard.service.ts");
var editUserForm_component_1 = __webpack_require__("./src/app/userForms/editForm/editUserForm.component.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var userProfile_component_1 = __webpack_require__("./src/app/user/profile/userProfile.component.ts");
var changePassword_component_1 = __webpack_require__("./src/app/user/profile/changePassword/changePassword.component.ts");
exports.USER_ROUTES = [
    { path: '', component: app_component_1.AppComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'reset', component: forgetPassword_component_1.ForgetPasswordComponent },
    { path: 'reset/:token', component: resetPassword_component_1.ResetPasswordComponent },
    { path: 'forms', component: userForms_component_1.UserFormsComponent, canActivate: [authguard_service_1.AuthGuardService] },
    { path: 'profile', component: userProfile_component_1.UserProfileComponent, canActivate: [authguard_service_1.AuthGuardService] },
    { path: 'profile/password', component: changePassword_component_1.ChangePasswordComponent, canActivate: [authguard_service_1.AuthGuardService] },
    { path: 'forms/edit/:id', component: editUserForm_component_1.EditUserFormComponent, canActivate: [authguard_service_1.AuthGuardService] }
];
//# sourceMappingURL=E:/github/project-c/src/user.routes.js.map

/***/ }),

/***/ "./src/app/userForms/editForm/editUserForm.component.css":
/***/ (function(module, exports) {

module.exports = ".topPad {\r\n  padding-top: 100px !important;\r\n}\r\n\r\n.topMargin {\r\n  margin-top: 20px;\r\n}\r\n\r\n.img-resized {\r\n  width: 10%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/userForms/editForm/editUserForm.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <form [formGroup]=\"myForm\" (ngSubmit)=\"submitEditedForm()\" *ngFor=\"let form of fetchedForm\" class=\"form-horizontal register-form\" novalidate>\r\n        <fieldset>\r\n            <legend class=\"topPad\">Edit Form with id: {{form._id}}</legend>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-4 control-label\" for=\"textInputOne\">Text Input One:</label>\r\n                <div class=\"col-md-4\">\r\n                    <input id=\"textInputOne\" #textOne formControlName=\"textInputOne\" name=\"textInputOne\" type=\"text\" [(ngModel)]=\"form.textInputOne\" class=\"form-control input-md\">\r\n                    <div [hidden]=\"textInputOne.valid || textInputOne.pristine\" class=\"alert alert-danger\">Please enter some text</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-4 control-label\" for=\"textInputTwo\">Text Input Two:</label>\r\n                <div class=\"col-md-4\">\r\n                    <input id=\"textInputTwo\" formControlName=\"textInputTwo\" name=\"textInputTwo\" type=\"text\" [(ngModel)]=\"form.textInputTwo\" class=\"form-control input-md\">\r\n                    <div [hidden]=\"textInputTwo.valid || textInputTwo.pristine\" class=\"alert alert-danger\">Please enter some text</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-4 col-centered\">\r\n                    <div class=\"profilePictureTempEdit\">\r\n                        <button *ngIf=\"submitStarted\" class=\"disabled btn-no-hover btn btn-default centered progress-button\">\r\n              <i class=\"fa fa-circle-o-notch fa-spin fa-fw\"></i> Please wait... <span class=\"progress-percent\">{{progress}}%</span>\r\n            </button>\r\n                        <div class=\"text-center top-margin\">\r\n                            <div class=\"profilePictureTempEdit\" *ngIf=\"oldImage\">\r\n                                <img class=\"img-responsive\" src=\"./uploads/forms/{{form.owner}}/{{form.imagePath}}\" alt=\"image\" onerror=\"this.src ='assets/images/no-image.jpg';\">\r\n                                <div class=\"upload-button\" *ngIf=\"!imageReady\">\r\n                                    <input type=\"file\" name=\"file-1\" id=\"file-1\" class=\"inputfile4 inputfile-4\" (change)=\"onFileSelect($event)\">\r\n                                    <label for=\"file-1\">\r\n                <span>\r\n                </span>\r\n                  </label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"profilePictureTempEdit\">\r\n                                <img *ngIf=\"imageReady\" #image class=\"img-responsive\" src=\"{{imageUrl}}{{imagePath}}\" alt=\"image\" onerror=\"this.src ='assets/images/no-image.jpg';\" />\r\n                                <div class=\"upload-button\">\r\n                                    <input type=\"file\" name=\"file-2\" id=\"file-2\" class=\"inputfile4 inputfile-4\" (change)=\"onFileSelect($event)\">\r\n                                    <label for=\"file-2\">\r\n                  <span>\r\n                  </span>\r\n                  </label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            /*Submit Button */\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-4 col-centered\">\r\n                    <button type=\"submit\" [disabled]=\"!myForm.valid && myForm.untouched\" id=\"submitForm\" name=\"sumbitForm\" class=\"btn btn-primary text-center bottomMargin\">Submit</button>\r\n                    <button type=\"button\" class=\"btn btn-warning\" (click)=\"cancel()\">Cancel</button>\r\n                </div>\r\n            </div>\r\n        </fieldset>\r\n    </form> -->\r\n\r\n\r\n\r\n\r\n<div class=\"card reg-card-width\">\r\n    <!--Header-->\r\n    <div class=\"card-header\" data-background-color=\"charcoal\">\r\n        <h4 class=\"title\">Update Details</h4>\r\n        <p class=\"category\">Update your current details people</p>\r\n    </div>\r\n    <div class=\"card-content\">\r\n        <form [formGroup]=\"myForm\" (ngSubmit)=\"submitEditedForm()\" *ngFor=\"let form of fetchedForm\" class=\"form-horizontal register-form clearfix\" novalidate>\r\n            <fieldset>\r\n                <!--///////////////////////////////////////////////////////////////////////////-->\r\n                <app-tabs #t>\r\n                    <app-tab title=\"Company Information\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <label class=\"control-label\" for=\"tradingName\">Trading Name</label>\r\n                                    <input class=\"form-control\" formControlName=\"tradingName\" #tradingName type=\"text\" [(ngModel)]=\"form.tradingName\" required/>\r\n                                    <span *ngIf=\"myForm.get('tradingName').hasError('required') && myForm.get('tradingName').touched\" class=\"help-block text-danger\">Trading Name is required</span>\r\n                                    <span class=\"material-input\"></span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <label class=\"control-label\" for=\"registeredCompanyName\">Registered Company Name</label>\r\n                                    <input class=\"form-control\" formControlName=\"registeredCompanyName\" #registeredCompanyName [(ngModel)]=\"form.registeredCompanyName\" type=\"text\" />\r\n                                    <span *ngIf=\"myForm.get('registeredCompanyName').hasError('required') && myForm.get('registeredCompanyName').touched\" class=\"help-block text-danger\">Company Name is required</span>\r\n                                    <span class=\"material-input\"></span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <input class=\"form-control\" formControlName=\"registrationNumber\" #registrationNumber type=\"text\" [(ngModel)]=\"form.registrationNumber\" />\r\n                                    <label class=\"control-label\" for=\"registrationNumber\">Registration Number</label>\r\n                                    <span *ngIf=\"myForm.get('registrationNumber').hasError('required') && myForm.get('registrationNumber').touched\" class=\"help-block text-danger\">Registration Number is required</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <label class=\"control-label\" for=\"vatNumber\">Vat Number</label>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"vatNumber\" #vatNumber [(ngModel)]=\"form.vatNumber\" />\r\n                                    <span *ngIf=\"myForm.get('vatNumber').hasError('required') && myForm.get('vatNumber').touched\" class=\"help-block text-danger\">VatNumber is required</span>\r\n                                    <span class=\"material-input\"></span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <label class=\"control-label\" for=\"physicalAddress\">Physical Address</label>\r\n                                    <input type=\"text\" formControlName=\"physicalAddress\" class=\"form-control\" #physicalAddress [(ngModel)]=\"form.physicalAddress\" />\r\n                                    <span *ngIf=\"myForm.get('physicalAddress').hasError('required') && myForm.get('physicalAddress').touched\" class=\"help-block text-danger\">Physical Address is required</span>\r\n                                    <span class=\"material-input\"></span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <input type=\"text\" formControlName=\"postalAddress\" class=\"form-control\" #postalAddress [(ngModel)]=\"form.postalAddress\" />\r\n                                    <label class=\"control-label\" for=\"postalAddress\">Postal Address</label>\r\n                                    <span *ngIf=\"myForm.get('postalAddress').hasError('required') && myForm.get('postalAddress').touched\" class=\"help-block text-danger\">Postal Address is required</span>\r\n                                    <span class=\"material-input\"></span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"tel\" [(ngModel)]=\"form.tel\" #tel/>\r\n                                    <label class=\"control-label\" for=\"tel\">Telephone Number</label>\r\n                                    <span *ngIf=\"myForm.get('tel').hasError('required') && myForm.get('tel').touched\" class=\"help-block text-danger\">Your work Telephone Number is required</span>\r\n                                    <span class=\"material-input\"></span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <label class=\"control-label\" for=\"faxNo\">Fax Number</label>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"faxNo\" [(ngModel)]=\"form.faxNo\" #faxNo/>\r\n                                    <span *ngIf=\"myForm.get('faxNo').hasError('required') && myForm.get('faxNo').touched\" class=\"help-block text-danger\">Fax number is required</span>\r\n                                    <span class=\"material-input\"></span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <label class=\"control-label\" for=\"website\">Website</label>\r\n                                    <input type=\"text\" formControlName=\"website\" class=\"form-control md-textarea\" #website [(ngModel)]=\"form.website\" />\r\n                                    <span *ngIf=\"myForm.get('website').hasError('required') && myForm.get('website').touched\" class=\"help-block text-danger\">Website is required</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <span class=\"float-right deep-orange-text display-block\" (click)=\"t.selectTab(1)\">Next <i class=\"fa fa-angle-right\"></i></span>\r\n                            </div>\r\n                        </div>\r\n                    </app-tab>\r\n                    <app-tab title=\"Correspondence\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <input class=\"form-control\" formControlName=\"accPersonName\" type=\"text\" #accPersonName [(ngModel)]=\"form.accPersonName\" />\r\n                                    <label class=\"control-label\">Accounts Person Name</label>\r\n                                    <span *ngIf=\"myForm.get('accPersonName').hasError('required') && myForm.get('accPersonName').touched\" class=\"help-block text-danger\">Accounts Person Name is required</span>\r\n                                    <span class=\"material-input\"></span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <input class=\"form-control\" formControlName=\"accPersonNo\" type=\"text\" #accPersonNo [(ngModel)]=\"form.accPersonNo\" />\r\n                                    <label class=\"control-label\">Accounts Person No</label>\r\n                                    <span *ngIf=\"myForm.get('accPersonNo').hasError('required') && myForm.get('accPersonNo').touched\" class=\"help-block text-danger\">Phone Number is required</span>\r\n                                    <span class=\"material-input\"></span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <label class=\"control-label\">Accounts Person Fax No</label>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"accPersonFaxNo\" #accPersonFaxNo [(ngModel)]=\"form.accPersonFaxNo\" />\r\n                                    <span *ngIf=\"myForm.get('accPersonFaxNo').hasError('accPersonFaxNo') && myForm.get('accPersonFaxNo').touched\" class=\"help-block text-danger\">Fax Number is required</span>\r\n                                    <span class=\"material-input\"></span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <label class=\"control-label\">Accounts Person Email</label>\r\n                                    <input type=\"email\" class=\"form-control\" formControlName=\"accPersonEmail\" #accPersonEmail [(ngModel)]=\"form.accPersonEmail\" />\r\n                                    <span *ngIf=\"myForm.get('accPersonEmail').hasError('required') && myForm.get('accPersonEmail').touched\" class=\"help-block text-danger\">Email is required</span>\r\n                                    <span class=\"material-input\"></span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <label class=\"control-label\">Sales Person Name</label>\r\n                                    <input class=\"form-control\" formControlName=\"salesPersonName\" #salesPersonName type=\"text\" [(ngModel)]=\"form.salesPersonName\" />\r\n                                    <span *ngIf=\"myForm.get('salesPersonName').hasError('required') && myForm.get('salesPersonName').touched\" class=\"help-block text-danger\">Sales Person Name is required</span>\r\n                                    <span class=\"material-input\"></span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <label class=\"control-label\">Sales Person No</label>\r\n                                    <input class=\"form-control\" formControlName=\"salesPersonNo\" type=\"text\" #salesPersonNo [(ngModel)]=\"form.salesPersonNo\" />\r\n                                    <span *ngIf=\"myForm.get('salesPersonNo').hasError('required') && myForm.get('salesPersonNo').touched\" class=\"help-block text-danger\">Phone Number is required</span>\r\n                                    <span class=\"material-input\"></span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <label class=\"control-label\">Sales Person Email</label>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"salesPersonFaxNo\" #salesPersonFaxNo [(ngModel)]=\"form.salesPersonFaxNo\" />\r\n                                    <span *ngIf=\"myForm.get('salesPersonFaxNo').hasError('salesPersonFaxNo') && myForm.get('salesPersonFaxNo').touched\" class=\"help-block text-danger\">Fax Number is required</span>\r\n                                    <span class=\"material-input\"></span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <input type=\"email\" class=\"form-control\" formControlName=\"salesPersonEmail\" #salesPersonEmail [(ngModel)]=\"form.salesPersonEmail\" />\r\n                                    <label class=\"control-label\">Sales Person Fax No</label>\r\n                                    <span *ngIf=\"myForm.get('salesPersonEmail').hasError('required') && myForm.get('salesPersonEmail').touched\" class=\"help-block text-danger\">Email is required</span>\r\n                                    <span class=\"material-input\"></span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <span class=\"float-right deep-orange-text display-block\" (click)=\"t.selectTab(2)\">Next <i class=\"fa fa-angle-right\"></i></span>\r\n                                <span class=\"float-left deep-orange-text display-block\" (click)=\"t.selectTab(0)\"><i class=\"fa fa-angle-left\"></i> Back</span>\r\n                            </div>\r\n                        </div>\r\n                    </app-tab>\r\n                    <app-tab title=\"Required Documents\">\r\n                        <div class=\"display-block spacing-top border-bttom pad-lr\">\r\n                            <span class=\"file-name display-inline\">BEE Certificate</span>\r\n                            <a class=\"float-right btn btn-orange btn-xs\" target=\"_blank\" href=\"http://localhost:3000/assets/images/vendor_profile.png\">View</a>\r\n                        </div>\r\n                        <div class=\"display-block spacing-top border-bttom pad-lr\">\r\n                            <span class=\"file-name display-inline\">Possible Conflict with Clinix Health Group</span>\r\n                            <a class=\"float-right btn btn-orange btn-xs\" target=\"_blank\" href=\"http://localhost:3000/assets/images/vendor_profile.png\">View</a>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <span class=\"float-left deep-orange-text display-block\" (click)=\"t.selectTab(0)\"><i class=\"fa fa-angle-left\"></i> Back</span>\r\n                            </div>\r\n                        </div>\r\n                    </app-tab>\r\n                </app-tabs>\r\n                <!--///////////////////////////////////////////////////////////////////////////-->\r\n\r\n\r\n                <!-- Button -->\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 \">\r\n                        <!-- Submit Button -->\r\n                        <button type=\"submit\" [disabled]=\"!myForm.valid && myForm.untouched\" id=\"submitForm\" name=\"sumbitForm\" class=\"btn btn-orange btn-sm\">Update profile</button>\r\n                        <button type=\"button\" class=\"btn btn-warning btn-sm\" (click)=\"cancel()\">Cancel</button>\r\n                    </div>\r\n                </div>\r\n            </fieldset>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/userForms/editForm/editUserForm.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var form_service_1 = __webpack_require__("./src/app/form/form.service.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var ng2_toastr_1 = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
var config_1 = __webpack_require__("./src/app/config/config.ts");
var form_model_1 = __webpack_require__("./src/app/form/form.model.ts");
var EditUserFormComponent = (function () {
    function EditUserFormComponent(formService, toastr, fb, router, route, renderer) {
        this.formService = formService;
        this.toastr = toastr;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.renderer = renderer;
        this.onClear = new core_1.EventEmitter();
        this.fetchedForm = [];
        this.token = localStorage.getItem('id_token');
        this.url = config_1.FORMS_API_URL + "/image";
        this.imageUrl = config_1.BASE_URL + "/uploads/tmp/";
        this.maxSize = 5000000;
        this.invalidFileSizeMessage = '{0}: Invalid file size, ';
        this.invalidFileSizeMessageDetail = 'Maximum upload size is {0}.';
        this.progress = 0;
        this.imageReady = false;
        this.oldImage = true;
    }
    EditUserFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // grabbing the form id from the url
        this.formId = this.route.snapshot.params['id'];
        this.formService.getSingleForm(this.formId)
            .subscribe((function (data) {
            var formArray = [];
            // tslint:disable-next-line:forin
            for (var key in data) {
                formArray.push(data[key]);
            }
            _this.fetchedForm = formArray;
        }));
        this.tradingName = new forms_1.FormControl('', forms_1.Validators.required);
        this.registeredCompanyName = new forms_1.FormControl('', forms_1.Validators.required);
        this.registrationNumber = new forms_1.FormControl('', forms_1.Validators.required);
        this.physicalAddress = new forms_1.FormControl('', forms_1.Validators.required);
        this.postalAddress = new forms_1.FormControl('', forms_1.Validators.required);
        this.tel = new forms_1.FormControl('', forms_1.Validators.required);
        this.faxNo = new forms_1.FormControl('', forms_1.Validators.required);
        this.vatNumber = new forms_1.FormControl('', forms_1.Validators.required);
        this.website = new forms_1.FormControl('', forms_1.Validators.required);
        this.accPersonName = new forms_1.FormControl('', forms_1.Validators.required);
        this.accPersonNo = new forms_1.FormControl('', forms_1.Validators.required);
        this.accPersonFaxNo = new forms_1.FormControl('', forms_1.Validators.required);
        this.accPersonEmail = new forms_1.FormControl('', forms_1.Validators.required);
        this.salesPersonName = new forms_1.FormControl('', forms_1.Validators.required);
        this.salesPersonNo = new forms_1.FormControl('', forms_1.Validators.required);
        this.salesPersonFaxNo = new forms_1.FormControl('', forms_1.Validators.required);
        this.salesPersonEmail = new forms_1.FormControl('', forms_1.Validators.required);
        this.myForm = this.fb.group({
            tradingName: this.tradingName,
            registeredCompanyName: this.registeredCompanyName,
            registrationNumber: this.registrationNumber,
            // confirmRegNumber: new FormControl({ value: null, disabled: false }, [Validators.required, regNumberMatch]),
            physicalAddress: this.physicalAddress,
            postalAddress: this.postalAddress,
            tel: this.tel,
            faxNo: this.faxNo,
            vatNumber: this.vatNumber,
            website: this.website,
            // confirmVatNumber: new FormControl({ value: null, disabled: false }, [Validators.required, vatNumberMatch]),
            accPersonName: this.accPersonName,
            accPersonNo: this.accPersonNo,
            accPersonFaxNo: this.accPersonFaxNo,
            accPersonEmail: this.accPersonEmail,
            salesPersonName: this.salesPersonName,
            salesPersonNo: this.salesPersonNo,
            salesPersonEmail: this.salesPersonEmail,
            salesPersonFaxNo: this.salesPersonFaxNo,
        });
    };
    // focus on first input box after the view is initialized
    EditUserFormComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            // this.renderer.invokeElementMethod(this.textOne.nativeElement, 'focus', []);
        }, 50);
    };
    // cancel and return to the user's forms page
    EditUserFormComponent.prototype.cancel = function () {
        this.router.navigate(['user/forms']);
    };
    // event fired when the user selects an image
    EditUserFormComponent.prototype.onFileSelect = function (event) {
        var _this = this;
        this.clear();
        this.submitStarted = true;
        var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        var _loop_1 = function (i) {
            var file = files[i];
            if (this_1.validate(file)) {
                if (this_1.isFile(file)) {
                    this_1.files.push(files[i]);
                    var xhr_1 = new XMLHttpRequest();
                    var formData = new FormData();
                    for (var i_1 = 0; i_1 < this_1.files.length; i_1++) {
                        formData.append('fileUp', this_1.files[i_1], this_1.files[i_1].name);
                    }
                    xhr_1.onreadystatechange = function () {
                        if (xhr_1.readyState === 4) {
                            _this.progress = 0;
                            if (xhr_1.status === 201) {
                                _this.imagePath = xhr_1.response.replace(/^"|"$/g, '');
                                _this.imageReady = true;
                                _this.oldImage = false;
                                _this.submitStarted = false;
                            }
                            else if (xhr_1.status !== 201) {
                                _this.toastr.error('There was an error, please try again later');
                                _this.submitStarted = false;
                                _this.oldImage = true;
                                _this.clear();
                            }
                            _this.clear();
                        }
                    };
                    xhr_1.upload.addEventListener('progress', function (e) {
                        if (e.lengthComputable) {
                            _this.progress = Math.round((e.loaded * 100) / e.total);
                        }
                    }, false);
                    xhr_1.open('POST', this_1.url, true);
                    xhr_1.setRequestHeader('Authorization', 'JWT ' + this_1.token);
                    xhr_1.send(formData);
                }
            }
            else if (!this_1.isFile(file)) {
                this_1.toastr.error('Only pdf, doc, jpep and png are allowed');
            }
        };
        var this_1 = this;
        for (var i = 0; i < files.length; i++) {
            _loop_1(i);
        }
    };
    EditUserFormComponent.prototype.submitEditedForm = function () {
        var _this = this;
        this.submitStarted = true;
        var editForm = new form_model_1.Form(
        // this.myForm.value.textInputOne,
        // this.myForm.value.textInputTwo,
        this.myForm.value.tradingName, this.myForm.value.registeredCompanyName, this.myForm.value.registrationNumber, this.myForm.value.physicalAddress, this.myForm.value.postalAddress, this.myForm.value.tel, this.myForm.value.faxNo, this.myForm.value.website, this.myForm.value.vatNumber, this.myForm.value.accPersonName, this.myForm.value.accPersonNo, this.myForm.value.accPersonFaxNo, this.myForm.value.accPersonEmail, this.myForm.value.salesPersonName, this.myForm.value.salesPersonNo, this.myForm.value.salesPersonFaxNo, this.myForm.value.salesPersonEmail, this.imagePath);
        this.formService.editForm(editForm, this.formId)
            .subscribe(function (data) {
            _this.router.navigateByUrl('/user/forms');
            _this.toastr.success('Form updated successfully');
        }, function (error) {
            _this.submitStarted = false;
            _this.toastr.error('There was an error, please try again later');
        });
    };
    // clears the form
    EditUserFormComponent.prototype.clear = function () {
        this.files = [];
        this.onClear.emit();
    };
    // check if the image is actually an image by checking the mime type
    EditUserFormComponent.prototype.isFile = function (file) {
        if (!file.type.match(/.jpeg|.jpg|.png|.doc|.docx|.gif/gi)) {
            this.toastr.error('Only pdf, doc, jpep and png are allowed');
            return false;
        }
        return true;
    };
    // check if the form has files ready to be uploaded
    EditUserFormComponent.prototype.hasFiles = function () {
        if (typeof this.files !== 'number') {
            return this.files && this.files.length > 0;
        }
    };
    // remove the image from the preview
    EditUserFormComponent.prototype.remove = function (index) {
        this.files.splice(index, 1);
        this.fileInput.nativeElement.value = '';
    };
    // check the image file size
    EditUserFormComponent.prototype.validate = function (file) {
        if (this.maxSize && file.size > this.maxSize) {
            this.toastr.error(this.invalidFileSizeMessageDetail.replace('{0}', this.formatSize(this.maxSize)), this.invalidFileSizeMessage.replace('{0}', file.name));
            this.submitStarted = false;
            return false;
        }
        return true;
    };
    // format the size to display it in toastr in case the user uploaded a file bigger than 5MB
    EditUserFormComponent.prototype.formatSize = function (bytes) {
        if (bytes === 0) {
            return '0 B';
        }
        var k = 1000, dm = 3, sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };
    return EditUserFormComponent;
}());
__decorate([
    core_1.ViewChild('fileInput'),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], EditUserFormComponent.prototype, "fileInput", void 0);
EditUserFormComponent = __decorate([
    core_1.Component({
        selector: 'app-edit-user-form',
        template: __webpack_require__("./src/app/userForms/editForm/editUserForm.component.html"),
        styles: [__webpack_require__("./src/app/userForms/editForm/editUserForm.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _b || Object, typeof (_c = typeof ng2_toastr_1.ToastsManager !== "undefined" && ng2_toastr_1.ToastsManager) === "function" && _c || Object, typeof (_d = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _d || Object, typeof (_e = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _e || Object, typeof (_f = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _f || Object, typeof (_g = typeof core_1.Renderer !== "undefined" && core_1.Renderer) === "function" && _g || Object])
], EditUserFormComponent);
exports.EditUserFormComponent = EditUserFormComponent;
var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=E:/github/project-c/src/editUserForm.component.js.map

/***/ }),

/***/ "./src/app/userForms/formsTable/userForms.component.css":
/***/ (function(module, exports) {

module.exports = ".topPad {\r\n  padding-top: 100px !important;\r\n}\r\n\r\n.topMargin {\r\n  margin-top: 20px;\r\n}\r\n\r\n.img-resized {\r\n  width: 10%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/userForms/formsTable/userForms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card reg-card-width\">\r\n    <!--Header-->\r\n    <div class=\"card-header\" data-background-color=\"charcoal\">\r\n        <h4 class=\"title\">Profile</h4>\r\n        <p class=\"category\">These are your details</p>\r\n    </div>\r\n    <div class=\"card-content\">\r\n        <form *ngFor=\"let form of fetchedForms\">\r\n            <fieldset>\r\n                <app-tabs #t>\r\n                    <app-tab title=\"Company Information\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <label class=\"control-label\">Trading Name</label>\r\n                                    <input type=\"text\" class=\"form-control\" value=\"{{form.tradingName}}\" disabled=\"\">\r\n                                    <span class=\"material-input\"></span></div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <label class=\"control-label\">Registered Company Name</label>\r\n                                    <input type=\"text\" class=\"form-control\" disabled=\"disabled\" value=\"{{form.registeredCompanyName}}\">\r\n                                    <span class=\"material-input\"></span></div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <label class=\"control-label\">Registration Number</label>\r\n                                    <input type=\"email\" class=\"form-control\" value=\"{{form.registrationNumber}}\" disabled>\r\n                                    <span class=\"material-input\"></span></div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <label class=\"control-label\">Vat Number</label>\r\n                                    <input type=\"text\" value=\"{{form.vatNumber}}\" class=\"form-control\" disabled=\"\">\r\n                                    <span class=\"material-input\"></span></div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <label class=\"control-label\">Physical Address</label>\r\n                                    <input type=\"text\" value=\"{{form.physicalAddress}}\" class=\"form-control\" disabled>\r\n                                    <span class=\"material-input\"></span></div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <label class=\"control-label\">Postal Address</label>\r\n                                    <input type=\"email\" value=\"{{form.postalAddress}}\" class=\"form-control\" disabled>\r\n                                    <span class=\"material-input\"></span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <label class=\"control-label\">Work Telephone Number</label>\r\n                                    <input type=\"text\" value=\"{{form.tel}}\" class=\"form-control\" disabled=\"\">\r\n                                    <span class=\"material-input\"></span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <label class=\"control-label\">Fax Number</label>\r\n                                    <input type=\"text\" value=\"{{form.faxNo}}\" class=\"form-control\" disabled>\r\n                                    <span class=\"material-input\"></span></div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <label class=\"control-label\">Website</label>\r\n                                    <input type=\"email\" value=\"{{form.website}}\" class=\"form-control\" disabled>\r\n                                    <span class=\"material-input\"></span></div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <span class=\"float-right deep-orange-text display-block\" (click)=\"t.selectTab(1)\">Next <i class=\"fa fa-angle-right\"></i></span>\r\n                            </div>\r\n                        </div>\r\n                    </app-tab>\r\n                    <app-tab title=\"Correspondence\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <label class=\"control-label\">Accounts Person Name</label>\r\n                                    <input type=\"text\" value=\"{{form.accPersonName}}\" class=\"form-control\" disabled=\"\">\r\n                                    <span class=\"material-input\"></span></div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <label class=\"control-label\">Accounts Person No</label>\r\n                                    <input type=\"text\" value=\"{{form.accPersonNo}}\" class=\"form-control\" disabled>\r\n                                    <span class=\"material-input\"></span></div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <label class=\"control-label\">Accounts Person Fax No</label>\r\n                                    <input type=\"email\" value=\"{{form.accPersonFaxNo}}\" class=\"form-control\" disabled>\r\n                                    <span class=\"material-input\"></span></div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <label class=\"control-label\">Accounts Person Email</label>\r\n                                    <input type=\"email\" value=\"{{form.accPersonEmail}}\" class=\"form-control\" disabled>\r\n                                    <span class=\"material-input\"></span></div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <label class=\"control-label\">Sales Person Name</label>\r\n                                    <input value=\"{{form.salesPersonName}}\" type=\"text\" class=\"form-control\" disabled=\"\">\r\n                                    <span class=\"material-input\"></span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <label class=\"control-label\">Sales Person No</label>\r\n                                    <input type=\"text\" value=\"{{form.salesPersonNo}}\" class=\"form-control\" disabled>\r\n                                    <span class=\"material-input\"></span></div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <label class=\"control-label\">Sales Person Email</label>\r\n                                    <input type=\"email\" value=\"{{form.salesPersonEmail}}\" class=\"form-control\" disabled>\r\n                                    <span class=\"material-input\"></span></div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group label-floating is-focused\">\r\n                                    <label class=\"control-label\">Sales Person Fax No</label>\r\n                                    <input value=\"{{form.salesPersonFaxNo}}\" type=\"email\" class=\"form-control\" disabled>\r\n                                    <span class=\"material-input\"></span></div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <span class=\"float-right deep-orange-text display-block\" (click)=\"t.selectTab(2)\">Next <i class=\"fa fa-angle-right\"></i></span>\r\n                                <span class=\"float-left deep-orange-text display-block\" (click)=\"t.selectTab(0)\"><i class=\"fa fa-angle-left\"></i> Back</span>\r\n                            </div>\r\n                        </div>\r\n                    </app-tab>\r\n                    <app-tab title=\"Rquired Documents\">\r\n                        <div class=\"display-block spacing-top border-bttom pad-lr\">\r\n                            <span class=\"file-name display-inline\">BEE Certificate</span>\r\n                            <a class=\"float-right btn btn-orange btn-xs\" target=\"_blank\" href=\"http://localhost:3000/assets/images/vendor_profile.png\">View</a>\r\n                        </div>\r\n                        <div class=\"display-block spacing-top border-bttom pad-lr\">\r\n                            <span class=\"file-name display-inline\">Possible Conflict with Clinix Health Group</span>\r\n                            <a class=\"float-right btn btn-orange btn-xs\" target=\"_blank\" href=\"http://localhost:3000/assets/images/vendor_profile.png\">View</a>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <span class=\"float-left deep-orange-text display-block\" (click)=\"t.selectTab(0)\"><i class=\"fa fa-angle-left\"></i> Back</span>\r\n                            </div>\r\n                        </div>\r\n                    </app-tab>\r\n                </app-tabs>\r\n            </fieldset>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/userForms/formsTable/userForms.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var form_service_1 = __webpack_require__("./src/app/form/form.service.ts");
var auth_service_1 = __webpack_require__("./src/app/auth/auth.service.ts");
var profile_service_1 = __webpack_require__("./src/app/user/profile/profile.service.ts");
var config_1 = __webpack_require__("./src/app/config/config.ts");
var UserFormsComponent = (function () {
    function UserFormsComponent(authService, profileService, formService) {
        this.authService = authService;
        this.profileService = profileService;
        this.formService = formService;
        this.baseUrl = "" + config_1.BASE_URL;
        this.fetchedForms = [];
        this.fetchedUser = [];
    }
    UserFormsComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.authService.isLoggedIn()) {
                var userId = localStorage.getItem('userId');
                _this.profileService.getUserDetails(userId)
                    .subscribe((function (data) {
                    var userArray = [];
                    // tslint:disable-next-line:forin
                    for (var key in data) {
                        userArray.push(data[key]);
                    }
                    _this.fetchedUser = userArray;
                }));
            }
            _this.formService.getUserForms()
                .subscribe(function (forms) { return _this.fetchedForms = forms; }, function (error) { return console.log(error); });
        }, 50);
    };
    UserFormsComponent.prototype.logout = function () {
        return this.authService.logout();
    };
    UserFormsComponent.prototype.onDelete = function (formId) {
        this.formService.deleteForm(formId)
            .subscribe();
    };
    return UserFormsComponent;
}());
UserFormsComponent = __decorate([
    core_1.Component({
        selector: 'app-user-form',
        template: __webpack_require__("./src/app/userForms/formsTable/userForms.component.html"),
        styles: [__webpack_require__("./src/app/userForms/formsTable/userForms.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof profile_service_1.ProfileService !== "undefined" && profile_service_1.ProfileService) === "function" && _b || Object, typeof (_c = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _c || Object])
], UserFormsComponent);
exports.UserFormsComponent = UserFormsComponent;
var _a, _b, _c;
//# sourceMappingURL=E:/github/project-c/src/userForms.component.js.map

/***/ }),

/***/ "./src/app/validators/input-match.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function vatNumberMatch(control) {
    if (control.parent !== undefined) {
        return control.parent.value.vatNumber === control.value ? null : { 'vatNumberMatch': true };
    }
}
exports.vatNumberMatch = vatNumberMatch;
function regNumberMatch(control) {
    if (control.parent !== undefined) {
        return control.parent.value.registrationNumber === control.value ? null : { 'regNumberMatch': true };
    }
}
exports.regNumberMatch = regNumberMatch;
function passwordMatch(control) {
    if (control.parent !== undefined) {
        return control.parent.value.password === control.value ? null : { 'passwordMatch': true };
    }
}
exports.passwordMatch = passwordMatch;
// input validator to check if the email entered by the user is actually text in an email form
function emailValidator(control) {
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (!EMAIL_REGEXP.test(control.value)) {
        return { invalidEmail: true };
    }
}
exports.emailValidator = emailValidator;
//# sourceMappingURL=E:/github/project-c/src/input-match.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=E:/github/project-c/src/environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./src/polyfills.ts");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var _1 = __webpack_require__("./src/app/index.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(_1.AppModule);
// .then((success: any) => console.log('App bootstrapped'))
// .catch((err: any) => console.error(err));
//# sourceMappingURL=E:/github/project-c/src/main.js.map

/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
__webpack_require__("./node_modules/core-js/es6/symbol.js");
__webpack_require__("./node_modules/core-js/es6/object.js");
__webpack_require__("./node_modules/core-js/es6/function.js");
__webpack_require__("./node_modules/core-js/es6/parse-int.js");
__webpack_require__("./node_modules/core-js/es6/parse-float.js");
__webpack_require__("./node_modules/core-js/es6/number.js");
__webpack_require__("./node_modules/core-js/es6/math.js");
__webpack_require__("./node_modules/core-js/es6/string.js");
__webpack_require__("./node_modules/core-js/es6/date.js");
__webpack_require__("./node_modules/core-js/es6/array.js");
__webpack_require__("./node_modules/core-js/es6/regexp.js");
__webpack_require__("./node_modules/core-js/es6/map.js");
__webpack_require__("./node_modules/core-js/es6/set.js");
__webpack_require__("./node_modules/core-js/es6/reflect.js");
__webpack_require__("./node_modules/core-js/es7/reflect.js");
__webpack_require__("./node_modules/zone.js/dist/zone.js");
//# sourceMappingURL=E:/github/project-c/src/polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map