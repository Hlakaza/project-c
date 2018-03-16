import { Component, ElementRef, EventEmitter, OnInit, Renderer, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastsManager} from 'ng2-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from '../services/admin.service';
import {BASE_URL, FORMS_API_URL, ADMIN_API_URL} from '../../config/config';
import {Form} from '../adminForms.model';
import { vatNumberMatch, regNumberMatch } from '../../validators/input-match';
import { Http, Response, URLSearchParams} from '@angular/http';
import  'rxjs/add/operator/toPromise';
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
  fileUrl = `${BASE_URL}/uploads/forms`
  formId: string;

  constructor(private adminService: AdminService,
              private toastr: ToastsManager,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private http: Http,
              private renderer: Renderer) {
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

  approve(value) {
    let url = `${ADMIN_API_URL}/form/approve`;
    // let params: URLSearchParams = new URLSearchParams();
    const body = {
      userEmail: value
    }
    return this.http.post(url, body)
                    .subscribe(
                      res => {
                        this.toastr.success('An email has been sent to notify the vendor');
                      console.log(res)
                    },
                    err => {
                      this.router.navigate(['admin']);
                      this.toastr.success('Vendor Approved, An email has been sent to notify the vendor');
                      console.log(err)
                    })

  }
  disApprove(value) {
    let url = `${ADMIN_API_URL}/form/disaprove`;
    // let params: URLSearchParams = new URLSearchParams();
    const body = {
      userEmail: value
    }
    return this.http.post(url, body)
                    .subscribe(
                      res => {
                        this.toastr.success('An email has been sent to notify the vendor');
                      console.log(res)
                    },
                    err => {
                      this.router.navigate(['admin']);
                      this.toastr.warning('Vendor was not approved, An email has been sent to notify the vendor');
                      console.log(err)
                    })

  }

}
