import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Renderer, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormService} from '../../form/form.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastsManager} from 'ng2-toastr';
import {BASE_URL, FORMS_API_URL} from '../../config/config';
import {Form} from '../../form/form.model';
import { vatNumberMatch, regNumberMatch } from '../../validators/input-match';
@Component({
  selector   : 'app-edit-user-form',
  templateUrl: './editUserForm.component.html',
  styleUrls  : ['./editUserForm.component.css']
})
export class EditUserFormComponent implements OnInit, AfterViewInit {

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

  token: string  = localStorage.getItem('id_token');
  url   = `${FORMS_API_URL}/image`;
  imageUrl  = `${BASE_URL}/uploads/tmp/`;
  formId: string;
  maxSize   = 5000000;
  invalidFileSizeMessage   = '{0}: Invalid file size, ';
  invalidFileSizeMessageDetail = 'Maximum upload size is {0}.';
  public files: File[];
  public progress  = 0;
  public submitStarted: boolean;
  imagePath: string;
  imageReady    = false;
  oldImage      = true;
  // @ViewChild('textOne') textOne: ElementRef;
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private formService: FormService,
              private toastr: ToastsManager,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private renderer: Renderer) {
  }

  ngOnInit() {
    // grabbing the form id from the url
    this.formId = this.route.snapshot.params['id'];
    this.formService.getSingleForm(this.formId)
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

    this.tradingName = new FormControl('', Validators.required);
    this.registeredCompanyName = new FormControl('', Validators.required);
    this.registrationNumber = new FormControl('', Validators.required);
    this.physicalAddress = new FormControl('', Validators.required);
    this.postalAddress = new FormControl('', Validators.required);
    this.tel = new FormControl('', Validators.required);
    this.faxNo = new FormControl('', Validators.required);
    this.vatNumber = new FormControl('', Validators.required);
    this.website = new FormControl('', Validators.required);
    this.accPersonName = new FormControl('', Validators.required);
    this.accPersonNo = new FormControl('', Validators.required);
    this.accPersonFaxNo = new FormControl('', Validators.required);
    this.accPersonEmail = new FormControl('', Validators.required);
    this.salesPersonName = new FormControl('', Validators.required);
    this.salesPersonNo = new FormControl('', Validators.required);
    this.salesPersonFaxNo = new FormControl('', Validators.required);
    this.salesPersonEmail = new FormControl('', Validators.required);

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
  }

  // focus on first input box after the view is initialized
  ngAfterViewInit() {
    setTimeout(() => {
      // this.renderer.invokeElementMethod(this.textOne.nativeElement, 'focus', []);
    }, 50);
  }

  // cancel and return to the user's forms page
  cancel() {
    this.router.navigate(['user/forms']);
  }

  // event fired when the user selects an image
  onFileSelect(event) {
    this.clear();
    this.submitStarted = true;

    let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      if (this.validate(file)) {
        if (this.isFile(file)) {
          this.files.push(files[i]);
          let xhr      = new XMLHttpRequest();
          let formData = new FormData();

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
    this.formService.editForm(editForm, this.formId)
      .subscribe(
        data => {
          this.router.navigateByUrl('/user/forms');
          this.toastr.success('Form edited successfully');
        }, error => {
          this.submitStarted = false;
          this.toastr.error('There was an error, please try again later');
        }
      );
  }

  // clears the form
  clear() {
    this.files = [];
    this.onClear.emit();
  }

  // check if the image is actually an image by checking the mime type
  isFile(file: File): boolean {
    if (!file.type.match(/.jpeg|.jpg|.png|.doc|.docx|.gif/gi)) {
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

}
