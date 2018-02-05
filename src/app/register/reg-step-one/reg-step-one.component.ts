import {  Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService, AlertService } from '../../services/index';
import { vatNumberMatch, regNumberMatch } from '../../validators/input-match';
import { Data } from '@angular/router/src/config';
@Component({
  selector: 'app-reg-step-one',
  templateUrl: './reg-step-one.component.html',
  styleUrls: ['./reg-step-one.component.css']
})
export class RegStepOneComponent implements OnInit {
  model: any = {};
  loading = false;
  username: '';
  password: '';
  tradingName: '';
  registeredCompanyName: '';
  registrationNumber: '';
  physicalAddress: '';
  postalAddress: '';
  tel: '';
  faxNo: '';
  website: '';
  vatNumber: '';
  @Output() switchStep = new EventEmitter();
  @Output() regValues = new EventEmitter();

  regStep: FormGroup;
  constructor(
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.regStep = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
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
    });

    this.regStep.valueChanges.subscribe(value => {
      if (this.regStep.valid) {
        this.switchStep.emit(2);
        this.regValues.emit(this.regStep.value);
        // console.log(this.regStep.value);
      }
    });
  }

}
