import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Renderer, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastsManager} from 'ng2-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from '../services/admin.service';
import {BASE_URL, FORMS_API_URL} from '../../config/config';
import {Form} from '../adminForms.model';
import { vatNumberMatch, regNumberMatch } from '../../validators/input-match';
@Component({
  selector   : 'app-edit-users-forms',
  templateUrl: './editUsersForms.component.html',
  styleUrls  : ['./editUsersForms.component.css']
})
export class EditUsersFormsComponent implements OnInit, AfterViewInit {

  onClear: EventEmitter<any> = new EventEmitter();

  fetchedForm: any[] = [];
  myForm: FormGroup;
  // textInputOne: FormControl;
  // textInputTwo: FormControl;
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
  url = `${FORMS_API_URL}/image`;
  imageUrl = `${BASE_URL}/uploads/tmp/`;
  maxSize = 5000000;
  invalidFileSizeMessage = '{0}: Invalid file size, ';
  invalidFileSizeMessageDetail = 'Maximum upload size is {0}.';
  public files: File[];
  public progress  = 0;
  public submitStarted: boolean;
  formId: string;
  imagePath: string;
  imageReady                           = false;
  oldImage                             = true;
  // @ViewChild('textOne') textOne: ElementRef;
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private adminService: AdminService,
              private toastr: ToastsManager,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
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
/**
 * Previous Validation Method
  // this.textInputOne = new FormControl('', Validators.required);
  // this.textInputTwo = new FormControl('', Validators.required);
    // textInputTwo: this.textInputTwo,
 */

    this.myForm = this.fb.group({
      // textInputOne: new FormControl(null, Validators.required),
      // textInputTwo: new FormControl(null, Validators.required),
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

  // focus on first input box after the view is initialized
  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.renderer.invokeElementMethod(this.textOne.nativeElement, 'focus', []);
    // }, 50);
  }

  // cancel and return to the user's forms page
  cancel() {
    this.router.navigate(['user/forms']);
  }

  // event fired when the user selects an image
  onFileSelect(event) {
    this.submitStarted = true;
    this.clear();
    let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      if (this.validate(file)) {
        if (this.isFile(file)) {
          this.files.push(files[i]);
          let xhr      = new XMLHttpRequest();
          let formData = new FormData();
          // tslint:disable-next-line:no-shadowed-variable
          for (let i = 0; i < this.files.length; i++) {
            formData.append('fileUp', this.files[i], this.files[i].name);
          }

          xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
              this.progress = 0;
              if (xhr.status === 201) {
                this.imagePath     = xhr.response.replace(/^"|"$/g, '');
                this.imageReady    = true;
                this.oldImage      = false;
                this.submitStarted = false;
              } else if (xhr.status !== 201) {
                this.toastr.error('There was an error, please try again later');
                this.submitStarted = false;
                this.oldImage      = true;
                this.clear();
              }
              this.clear();
            }
          };
          xhr.upload.addEventListener('progress', (e: ProgressEvent) => {
            if (e.lengthComputable) {
              this.progress = Math.round((e.loaded * 100) / e.total);
            }
          }, false);

          xhr.open('POST', this.url, true);
          xhr.setRequestHeader('Authorization', 'JWT ' + this.token);
          xhr.send(formData);
        }
      } else if (!this.isFile(file)) {
        this.toastr.error('Only pdf, doc, jpep and png are allowed');
      }
    }
  }

  // clears the form
  clear() {
    this.files = [];
    this.onClear.emit();
  }

  // check if the file is actually an image, pdf or doc by checking the mime type
  isFile(file: File): boolean {
    if (!file.type.match(/.jpeg|.jpg|.png|.doc|.docx|.gif/)) {
      this.toastr.error('Only pdf, doc, jpep and png are allowed');
      return false;
    }
    return true;
  }

  // check if the form has files ready to be uploaded
  hasFiles(): boolean {
    if (typeof this.files !== 'number') {
      return this.files && this.files.length > 0;
    }
  }

  // remove the image from the preview
  remove(index: number) {
    this.files.splice(index, 1);
    this.fileInput.nativeElement.value = '';
  }

  // check the image file size
  validate(file: File): boolean {
    if (this.maxSize && file.size > this.maxSize) {
      this.toastr.error(this.invalidFileSizeMessageDetail.replace('{0}', this.formatSize(this.maxSize)),
        this.invalidFileSizeMessage.replace('{0}', file.name));
      this.submitStarted = false;
      return false;
    }
    return true;
  }

// format the size to display it in toastr in case the user uploaded a file bigger than 5MB
  formatSize(bytes) {
    if (bytes === 0) {
      return '0 B';
    }
    let k     = 1000,
        dm    = 3,
        sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i     = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  // submit the form to back end

  submitEditedForm() {
    this.submitStarted = true;
    const editForm     = new Form(
      // this.myForm.value.textInputOne,
      // this.myForm.value.textInputTwo,
      this.myForm.value.tradingName,
      this.myForm.value.registeredCompanyName,
      this.myForm.value.registrationNumber,
      this.myForm.value.physicalAddress,
      this.myForm.value.postalAddress,
      this.myForm.value.tel,
      this.myForm.value.faxNo,
      this.myForm.value.website,
      this.myForm.value.vatNumber,
      this.myForm.value.accPersonName,
      this.myForm.value.accPersonNo,
      this.myForm.value.accPersonFaxNo,
      this.myForm.value.accPersonEmail,
      this.myForm.value.salesPersonName,
      this.myForm.value.salesPersonNo,
      this.myForm.value.salesPersonFaxNo,
      this.myForm.value.salesPersonEmail,
      this.imagePath
    );
    this.adminService.editForm(editForm, this.formId)
      .subscribe(
        data => {
          this.router.navigateByUrl('/admin');
          this.toastr.success('Form edited successfully');
        }, error => {
          this.submitStarted = false;
          this.toastr.error('There was an error, please try again later');
        }
      );
  }
}
