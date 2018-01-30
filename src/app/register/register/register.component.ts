import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { RegistrationService } from '../../services/registration.service';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  regObject = {
    FirstName: '',
    LastName: '',
    DateOfBirth: null,
    CountryOfBirth: '',
    ProvinceOfBirth: '',
    CityOfBirth: '',
    CodiceFiscale: '',
    CountryCode: '',
    StateProvince: '',
    StateIsoCode: '',
    Address1: '',
    Address2: '',
    City: '',
    ZipPostalCode: '',
    InternationalDialingCode: '',
    PhoneMobile: '',
    PhoneWork: '',
    PhoneHome: '',
    FaxNumber: '',
    BannerTag: '',
    BannerTag4: '',
    EmailAddress: '',
    DocumentType: '',
    IssuedBy: '',
    IdNumber: '',
    IssuedInLocality: '',
    ValidFrom: null,
    ValidTo: null,
    LoginName: '',
    Password: '',
    SecurityQuestion: '',
    SecurityAnswer: '',
    SessionDurationPeriod: '',
    WeeklyDepositLimit: 0,
    CurrencyCode: '',
    AcceptedLegalContract: false,
    PrivacyPolicy: false,
    IncludeInCommunications: false,
    SessionToken: '',
    MasterToken: '',
    ReturnUrl: '',
    Gender: '',
    IdempotencyId: '',
    Occupation: '',
    PromoCode: '',
  };
  resourceStrings: any = {};
  countryList: any = [];
  currentStep = 1;

  constructor(
    private acct: AccountService,
    private auth: AuthService,
    private user: UserService,
    private reg: RegistrationService,
    private copy: ContentService
  ) {
    this.reg.countryCall().subscribe(res => { });
    this.copy.resourceStringPackEmit.subscribe(res => {
      this.resourceStrings = res;
    }
    );
    this.copy.getResourceStringValue('casino.register');
  }

  stepChange(data) {
    this.currentStep = data;
  }
  regValues(data) {
    let day = 0, month = 0, year = 0;
    for (const key in data) {
      // console.log(key);
      //       console.log(data[key]);
      if (this.regObject.hasOwnProperty(key)) {
        this.regObject[key] = data[key];
      } else {
        if (key.indexOf('Day') !== -1) {
          day = parseInt(data[key], 10);
        }
        if (key.indexOf('Month') !== -1) {
          month = parseInt(data[key], 10);
        }
        if (key.indexOf('Year') !== -1) {
          year = parseInt(data[key], 10);
        }
        if (day > 0 && month > 0 && year > 0) {
          if (key.indexOf('DOB') !== -1) {
            this.regObject['DateOfBirth'] = new Date(year, month - 1, day).toISOString();
          }
          if (key.indexOf('validF') !== -1) {
            this.regObject['ValidFrom'] = new Date(year, month - 1, day).toISOString();
          }
          if (key.indexOf('validT') !== -1) {
            this.regObject['ValidTo'] = new Date(year, month - 1, day).toISOString();
          }

        }
      }



    }

    for (const key in this.regObject) {
      if (this.regObject.hasOwnProperty(key)) {
        this.acct.setAcctProperty(key, this.regObject[key]);
        this.user.setUser('username', this.regObject.LoginName);
        this.user.setUser('password', this.regObject.Password);
      }

    }
  }
  submit() {
    console.table(this.regObject);
    console.table(this.acct.getAcctProperty('all'));
    console.table(this.user.getUser());
  }
  ngOnInit() {
  }

}
