import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Renderer, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastsManager} from 'ng2-toastr';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';
import {BASE_URL, FORMS_API_URL} from '../config/config';
import {ModalComponent} from 'ng2-bs3-modal/components/modal';
import {FormService} from './form.service';
import {Form} from './form.model';
import { vatNumberMatch, regNumberMatch } from '../validators/input-match';
@Component({
  selector   : 'app-form',
  templateUrl: './form.component.html',
  styleUrls  : ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {
  account: any;
  filesToUpload: Array<File>;
  // setting up the form
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
  salesPersonName: FormControl;
  salesPersonNo: FormControl;
  salesPersonEmail: FormControl;
  salesPersonFaxNo: FormControl;

  // get the Auth Token from localStorage in order to Authenticate to back end while submitting the form
  token: string  = localStorage.getItem('id_token');
  url  = `${FORMS_API_URL}/image`;
  imageUrl = `${BASE_URL}/uploads/tmp/`;
  // maxSize  = 5000000;
  invalidFileSizeMessage = '{0}: Invalid file size, ';
  invalidFileSizeMessageDetail = 'Maximum upload size is {0}.';
  // public files: File[];
  public progress  = 0;
  public submitStarted: boolean;
  public imageReady   = false;
  public imagePath: string;
  name: string;
  onClear: EventEmitter<any>   = new EventEmitter();
  /**
   * Upload File
   */
  loading = false;
  maxSize = 10;
  usedSize = 0;
  files: any;
  filesCount: number;
  validExtension: any[];
  // @ViewChild('textOne') textOne: ElementRef;
  @ViewChild('fileInput') fileInput: ElementRef;
  @ViewChild('fileInput1') fileInput1: ElementRef;
  @ViewChild('fileInput2') fileInput2: ElementRef;
  @ViewChild('fileInput3') fileInput3: ElementRef;
  @ViewChild('fileInput4') fileInput4: ElementRef;
  @ViewChild('fileInput5') fileInput5: ElementRef;
  @ViewChild('fileInput6') fileInput6: ElementRef;
  @ViewChild('fileInput7') fileInput7: ElementRef;
  @ViewChild('fileInput8') fileInput8: ElementRef;
  @ViewChild('fileInput9') fileInput9: ElementRef;
  @ViewChild('fileInput10') fileInput10: ElementRef;
  @ViewChild('imageDeleteModal') imageDeleteModal: ModalComponent;

  deleteImage() {
    this.imageDeleteModal.dismiss();
    this.formService.deleteImage(this.imagePath)
      .subscribe(data => {
      });
    this.imageReady = false;
    this.clear();
  }

  dismissImageDelete() {
    this.imageDeleteModal.close();
  }
  // createForm() {
  //   this.form = this.fb.group({
  //     name: [''],
  //     docs: null
  //   });

  //   this.files = [];
  // }
  constructor(private fb: FormBuilder,
              private toastr: ToastsManager,
              private router: Router,
              private renderer: Renderer,
              private authService: AuthService,
              private formService: FormService,
            ) {
              this.filesToUpload = [];
  }

/////////////////////////////////////////////////////////////////////////////////////////////////


onFileChange(event) {
  this.usedSize = 0;

  if (event.target.files && event.target.files.length > 0) {

    for (let i = 0; i < event.target.files.length; i++) {

      if (event.target.files[i].name.match(/.jpeg|.jpg|.png|.doc|.docx|.gif/gi)) {
        this.files.push(event.target.files[i]);
        this.usedSize += event.target.files[i].size;
        this.filesCount += 1;
      }
    }
  }
}

// onSubmit(object) {
//   const formData = new FormData();
//   formData.append('DocumentId', object.DocumentId);
//   formData.append('DocumentTypeId', object.DocumentTypeId);

//   for (let i = 0; i < this.files.length; i++) {

//     if (!this.files[i].remove) {
//       formData.append('FileDataByteArrayList_', this.files[i]);
//       formData.append('ItemName', this.files[i].name);
//       this.files[i].loading = true;
//       this.loadFile(formData, i);
//     }
//   }
// }

loadFile(object, index) {
  if (this.usedSize < (1000 * 1000) * this.maxSize) {
    this.account.documentUploader(object)
      .subscribe(
      data => { this.files[index].success = true; },
      err => { console.log(err); }
      );
  }
}

removeFile(index) {
  this.filesCount -= 1;
  this.files[index].remove = true;
  this.usedSize -= this.files[index].size;
}


///////////////////////////////////////////////////////////////////////////////////////////////
  // event fired when the user selects an imageng
  onFileSelect(event) {
    this.clear();
    this.submitStarted = true;
    let files  = event.dataTransfer ? event.dataTransfer.files : event.target.files;
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
                this.submitStarted = false;
              } else if (xhr.status !== 201) {
                this.toastr.error('There was a problem, please try again later');
                this.submitStarted = false;
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
    return this.files && this.files.length > 0;
  }

  // clears the form
  clear() {
    this.files = [];
    this.onClear.emit();
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
      this.clear();
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

  ngOnInit() {
    this.filesCount = 0;
    this.files        = [];
    // this.textInputOne = new FormControl('', Validators.required);
    // this.textInputTwo = new FormControl('', Validators.required);
    // textInputOne: this.textInputOne,
    // textInputTwo: this.textInputTwo

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
        name: [''],
        docs: null
      });
      this.files = [];
  }

  // focus on first input box after the view is initialized
  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.renderer.invokeElementMethod(this.textOne.nativeElement, 'focus', []);
    // }, 50);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  // submit the form to back end

  submitForm() {
    this.submitStarted = true;
    const newForm      = new Form(
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
        .subscribe(
          data => {
            this.router.navigateByUrl('/user/forms');
            this.toastr.success('Form submitted successfully');
          },
          error => {
            this.submitStarted = false;
            this.toastr.error('There was an error, please try again later');
     });
  }
}