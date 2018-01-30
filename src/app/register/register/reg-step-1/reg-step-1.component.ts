import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { codiceValidator } from '../../../validators/codice-fiscale';
import { AccountService } from '../../../services/account.service';
import { RegistrationService } from '../../../services/registration.service';
import { makeDecorator } from '@angular/core/src/util/decorators';
import { ModalService } from '../../../services/modal.service';
import { ContentService } from '../../../services/content.service';

@Component({
  selector: 'app-reg-step-1',
  templateUrl: './reg-step-1.component.html',
  styleUrls: ['./reg-step-1.component.scss']
})
export class RegStep1Component implements OnInit {
  @Output() switchStep = new EventEmitter();
  @Output() regValues = new EventEmitter();

  @Input() currencyList: any = [];
  regStep: FormGroup;
  dobDayArr = [];
  dobMonthArr = [];
  dobYearArr = [];
  regValid = false;
  countriesLoad = true;
  provincesLoad = true;
  cityLoad = true;
  countryList: any = [];
  provinceList: any = [];
  cityList: any = [];
  count = 0;
  currentCountry: any = null;
  currentProvince: any = null;
  resourceStrings: any = {};
  constructor(
    private acct: AccountService,
    private reg: RegistrationService,
    private modal: ModalService,
    private copy: ContentService
  ) {
    const today = new Date();
    let year = today.getFullYear() - 18;
    for (let i = 1; i < 32; i++) {
      this.dobDayArr.push(i);
    }
    for (let i = 1; i < 9; i++) {
      this.dobMonthArr.push(i);
    }
    for (let i = 1; i < 101; i++) {
      this.dobYearArr.push(year);
      year = year - 1;
    }
    this.reg.countryList.subscribe(res => {
      this.countriesLoad = false;
      this.countryList = res['Countries'];
    });
    this.reg.birthProvinceList.subscribe(res => {
      this.provincesLoad = false;
      this.provinceList = res['Provinces'];
    });

    this.reg.countryCall();

    this.copy.resourceStringPackEmit.subscribe(res => {
      this.resourceStrings = res;
    });
    this.copy.getResourceStringValue('casino.register');
  }

  ngOnInit() {
    this.regStep = new FormGroup({
      FirstName: new FormControl(null, Validators.required),
      LastName: new FormControl(null, Validators.required),
      DOBDay: new FormControl(null, Validators.required),
      DOBMonth: new FormControl(null, Validators.required),
      DOBYear: new FormControl(null, Validators.required),
      CountryOfBirth: new FormControl(null, Validators.required),
      ProvinceOfBirth: new FormControl(null, Validators.required),
      CityOfBirth: new FormControl({ value: '', disabled: true }, Validators.required),
      CodiceFiscale: new FormControl(null, [Validators.required, codiceValidator]),
    });

    this.regStep.valueChanges.subscribe(value => {
      if (this.regStep.valid) {
        this.switchStep.emit(2);
        this.regValues.emit(this.regStep.value);
      }
      if ((value.CountryOfBirth !== null && value.ProvinceOfBirth === null) || (this.currentCountry !== value.CountryOfBirth)) {
        this.currentCountry = value.CountryOfBirth;
        if (this.currentCountry !== null) {
          this.reg.birthProvinceCall(value.CountryOfBirth).subscribe(res => {
            if (res !== undefined) {
              this.provinceList = res['Provinces'];
              this.countriesLoad = false;
              if (value.CountryOfBirth === 'ITA' && this.count === 0) {

                this.regStep.controls.CityOfBirth.enable();
                this.count++;
              } else {
                this.count = 0;
              }
            }

            // console.log(value);
          });
        }
      }
      if ((value.ProvinceOfBirth !== null && value.CityOfBirth === null) || (this.currentProvince !== value.ProvinceOfBirth)) {
        this.currentProvince = value.ProvinceOfBirth;
        if (this.currentProvince !== null) {
          if (value.CountryOfBirth === 'ITA' && this.count === 0) {
            this.reg.cityCall(value.ProvinceOfBirth).subscribe(res => {
              if (res !== undefined) {
                this.cityLoad = false;
                this.cityList = res;
                this.count++;
              } else {
                this.count = 0;
              }
            });
          }
        }


      }
    });
  }
  modalOpen(id: string) {
    this.modal.open(id, '');

  }

  modalClose(id: string) {
    this.modal.close(id);
  }

  openLogin() {
    this.modal.clearAll();
    this.modal.open('login', '');
  }
}

