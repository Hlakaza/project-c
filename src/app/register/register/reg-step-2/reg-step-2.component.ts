import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from '../../../services/account.service';
import { RegistrationService } from '../../../services/registration.service';
import { GlobalInfoService } from '../../../services/global-info.service';
import { UserService } from '../../../services/user.service';
import { ContentService } from '../../../services/content.service';
@Component({
  selector: 'app-reg-step-2',
  templateUrl: './reg-step-2.component.html',
  styleUrls: ['./reg-step-2.component.scss']
})
export class RegStep2Component implements OnInit {
  @Output() switchStep = new EventEmitter();
  @Output() regValues = new EventEmitter();
  regStep: FormGroup;
  countriesLoad = true;
  countryList = [];
  provincesLoad = true;
  provinceList = [];
  currentCountry = '';
  count = 0;
  resourceStrings: any = {};
  constructor(
    private acct: AccountService,
    private reg: RegistrationService,
    private globalInfo: GlobalInfoService,
    private user: UserService,
    private copy: ContentService
  ) {

    this.copy.resourceStringPackEmit.subscribe(res => {
      this.resourceStrings = res;
    });
    this.copy.getResourceStringValue('casino.register');
    this.reg.countryList.subscribe(res => {
      this.countriesLoad = false;
      this.countryList = res['Countries'];
    });
    this.reg.provinceList.subscribe(res => {
      this.provincesLoad = false;
      this.provinceList = res['CountryStates'];
    });
  }

  ngOnInit() {
    this.countriesLoad = false;
    this.regStep = new FormGroup({
      CountryCode: new FormControl(null, Validators.required),
      StateProvince: new FormControl(null, Validators.required),
      Address1: new FormControl(null, Validators.required),
      City: new FormControl(null, Validators.required),
      ZipPostalCode: new FormControl(null, Validators.required),
      InternationalDialingCode: new FormControl(null, Validators.required),
      PhoneMobile: new FormControl(null, Validators.required),
      EmailAddress: new FormControl(null, [Validators.required, Validators.email]),
    });

    this.regStep.valueChanges.subscribe(value => {
      if (this.regStep.valid) {
        this.switchStep.emit(3);
        this.regStep['StateIsoCode'] = this.regStep.get('StateProvince').value;
        this.regValues.emit(this.regStep.value);
      }

      if (value.CountryCode !== null && value.StateProvince === null) {
        if (value.CountryCode !== undefined) {
          this.reg.provinceCall(value.CountryCode).subscribe(res => {
            this.provinceList = res['CountryStates'];
            this.countriesLoad = false;
            if (value.CountryCode === 'ITA' && this.count === 0) {
              this.regStep.controls.townOfBirth.enable();
              this.count++;
            } else {
              this.count = 0;
            }
          });
        }
      }

      if (value.CountryCode !== null && value.InternationalDialingCode == null) {
        console.log(value.CountryCode);
        this.globalInfo.metaData.CountriesInLanguage.filter((val) => {
          if (val.CCId === value.CountryCode) {
            this.currentCountry = value.CountryCode;
            this.regStep.controls.InternationalDialingCode.patchValue(parseInt(val.DC, 10));
            return false;
          }
        });
      }
      if (value.CountryCode !== this.currentCountry) {
        console.log(value.CountryCode);
        if (value.CountryCode !== null) {
          this.globalInfo.metaData.CountriesInLanguage.filter((val) => {
            if (val.CCId === value.CountryCode) {
              this.currentCountry = value.CountryCode;
              this.regStep.controls.InternationalDialingCode.patchValue(parseInt(val.DC, 10));
              return false;
            }
          });
        }
      }
    });
  }

}
