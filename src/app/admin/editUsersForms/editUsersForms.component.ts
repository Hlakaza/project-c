import { Component, ElementRef, EventEmitter, OnInit, Renderer, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastsManager} from 'ng2-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from '../services/admin.service';
import {BASE_URL, FORMS_API_URL, ADMIN_API_URL} from '../../config/config';
import {Form} from '../adminForms.model';
import { vatNumberMatch, regNumberMatch } from '../../validators/input-match';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  'rxjs/add/operator/toPromise';
import { AuthHttp } from 'angular2-jwt';
@Component({
  selector   : 'app-edit-users-forms',
  templateUrl: './editUsersForms.component.html',
  styleUrls  : ['./editUsersForms.component.css']
})
export class EditUsersFormsComponent implements OnInit {

  onClear: EventEmitter<any> = new EventEmitter();

  fetchedForm: any[] = [];
  myForm: FormGroup;
  tradingName: FormControl;
  registeredCompanyName: FormControl;
  registrationNumber: FormControl;
  physicalAddress: FormControl;
  postalAddress: FormControl;
  tel: FormControl;
  faxNo: FormControl;
  website: FormControl;
  vatNumber: FormControl;
  accPersonName: FormControl;
  accPersonNo: FormControl;
  accPersonFaxNo: FormControl;
  accPersonEmail: FormControl;
  accPersaccPersonEmailnFaxNo: FormControl;
  salesPersonName: FormControl;
  salesPersonNo: FormControl;
  salesPersonEmail: FormControl;
  salesPersonFaxNo: FormControl;

  token: string = localStorage.getItem('id_token');
  userId: string = localStorage.getItem('userId');
  fileUrl = `${BASE_URL}/uploads/forms`
  formId: string;

  constructor(private adminService: AdminService,
              private toastr: ToastsManager,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private http: Http,
              private renderer: Renderer,
              private authHttp: AuthHttp) {
  }

  ngOnInit() {
    this.formId = this.route.snapshot.params['id'];
    this.adminService.getSingleForm(this.formId)
      .subscribe(
        (data => {
          const formArray = [];
          // tslint:disable-next-line:forin
          for (let key in data) {
            formArray.push(data[key]);
          }
          this.fetchedForm = formArray;
        })
      );
    this.myForm = this.fb.group({
      tradingName: new FormControl(null, Validators.required),
      registeredCompanyName: new FormControl(null, Validators.required),
      registrationNumber: new FormControl(null, Validators.required),
      confirmRegNumber: new FormControl({ value: null, disabled: false }, [Validators.required, regNumberMatch]),
      physicalAddress: new FormControl(null, Validators.required),
      postalAddress: new FormControl(null, Validators.required),
      tel: new FormControl(null, Validators.required),
      faxNo: new FormControl(null, Validators.required),
      vatNumber: new FormControl(null, Validators.required),
      website: new FormControl(null, Validators.required),
      confirmVatNumber: new FormControl({ value: null, disabled: false }, [Validators.required, vatNumberMatch]),
      accPersonName: new FormControl(null, Validators.required),
      accPersonNo: new FormControl(null, Validators.required),
      accPersonFaxNo: new FormControl(null, Validators.required),
      accPersonEmail: new FormControl(null, Validators.required),
      salesPersonName: new FormControl(null, Validators.required),
      salesPersonNo: new FormControl(null, Validators.required),
      salesPersonEmail: new FormControl(null, Validators.required),
      salesPersonFaxNo: new FormControl(null, Validators.required),
    });
  }

  // cancel and return to the user's forms page
  cancel() {
    this.router.navigate(['user/forms']);
  }

  /**
   *  Send Email to approve the vendor
   * @param value
   */
  approve(value) {
    let url = `${FORMS_API_URL}/form/approve`;
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.token);
    const body = {userEmail: value}
    this.authHttp.post(url, body, {headers: headers})
    .subscribe(
      res => {
        this.toastr.success('You have approved this Vendor, An email has been sent to notify approval');
        this.router.navigate(['admin']);
    }, err => {
        this.toastr.error('Sorry, There was an error sending email to the vendor!');
     })
  }

  /**
   *  Send Email to disaprove the vendor
   * @param value
   */
  disApprove(value) {
    let url = `${FORMS_API_URL}/form/disapprove`;
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.token);
    const body = {userEmail: value}
    this.authHttp.post(url, body, {headers: headers})
    .subscribe(
      res => {
        this.toastr.warning('Thr Vendor has been rejected, An email has been sent to notify the vendor');
        this.router.navigate(['admin']);
    }, err => {
        this.toastr.error('Sorry, There was an error sending email to the vendor!');
     })
  }

}
