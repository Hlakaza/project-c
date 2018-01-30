import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordMatch } from '../../../validators/password-match';
import { AccountService } from '../../../services/account.service';
import 'rxjs/add/operator/debounceTime';
import { UserService } from '../../../services/user.service';
import { RegistrationService } from '../../../services/registration.service';
import { GlobalInfoService } from '../../../services/global-info.service';
import { ContentService } from '../../../services/content.service';
@Component({
  selector: 'app-reg-step-4',
  templateUrl: './reg-step-4.component.html',
  styleUrls: ['./reg-step-4.component.scss']
})
export class RegStep4Component implements OnInit {
  @Output() switchStep = new EventEmitter();
  @Output() regValues = new EventEmitter();
  regStep: FormGroup;
  passSwitch = true;
  confSwitch = true;
  @Input() countryList;
  sessionDurationList = [];
  sessionLoad = true;
  currencyList = [];
  dayArr = [];
  monthArr = [];
  yearArr = [];
  confirmDisable = true;
  validUsername = true;
  suggestedUsernames = [];
  resourceStrings: any = {};
  constructor(
    private acct: AccountService,
    private user: UserService,
    private reg: RegistrationService,
    private globalInfo: GlobalInfoService,
    private copy: ContentService
  ) {
    this.copy.resourceStringPackEmit.subscribe(res => {
      this.resourceStrings = res;
    });
    this.copy.getResourceStringValue('casino.register');
    this.globalInfo.currencyInLang.subscribe(res => {
      this.currencyList = res;
    });
    for (let i = 1; i < 32; i++) {
      this.dayArr.push(i);
    }
    for (let i = 1; i < 9; i++) {
      this.monthArr.push(i);
    }
    this.regStep = new FormGroup({
      LoginName: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
      Password: new FormControl(null, [Validators.required, Validators.minLength(4),
      Validators.maxLength(20), Validators.pattern('^[a-zA-Z0-9_]+$')]),
      confirmPassword: new FormControl({ value: null, disabled: false }, [Validators.required, passwordMatch]),
      SecurityQuestion: new FormControl(null, Validators.required),
      SecurityAnswer: new FormControl(null, Validators.required),
      SessionDurationPeriod: new FormControl(null, Validators.required),
      WeeklyDepositLimit: new FormControl(null, Validators.required),
      CurrencyCode: new FormControl(null, Validators.required),
      AcceptedLegalContract: new FormControl(null, Validators.required),
      legalAge: new FormControl(null, Validators.required),
      PrivacyPolicy: new FormControl(null, Validators.required),
      IncludeInCommunications: new FormControl(false, Validators.required),
    });
    this.regStep.get('confirmPassword').disable();
    this.regStep.valueChanges.subscribe(value => {
      if (this.regStep.valid) {
        this.switchStep.emit(4);
        this.regValues.emit(this.regStep.value);
      }
      if (value.CurrencyCode === null) {
        this.currencyList = this.globalInfo.metaData.CurrenciesInLanguage;
        this.regStep.controls.CurrencyCode.patchValue(this.user.getUser().CurrencyCode);
      }

    });
    this.regStep.get('LoginName').valueChanges.debounceTime(1000).subscribe(value => {
      if (value.length > 0) {
        this.reg.checkExistingLoginName(
          value,
          this.user.getUser().CasinoCode).subscribe(res => {
            this.validUsername = res['valid'];
            this.suggestedUsernames = res['RN'];
          });
      }
    });
    this.reg.sessionReminders().subscribe(res => {
      this.sessionLoad = false;
      this.sessionDurationList = res;
    });
  }
  getLocalResourceStrings(key) {
    this.copy.getResourceString(key).subscribe(res => {
      this.resourceStrings = res;
    });
  }
  ngOnInit() {
    if (this.globalInfo.metaData.CurrenciesInLanguage.length === 0) {
      this.globalInfo.getMetaData();
    }
  }
  newUserName(name) {
    this.regStep.get('LoginName').patchValue(name);
    this.validUsername = true;
  }

  checkValue(data) {
    if (data.target.value.length > 0) {
      this.regStep.get('confirmPassword').enable();

    }
  }
  togglePassView() {
    this.passSwitch = !this.passSwitch;
  }
  toggleConfView() {
    this.confSwitch = !this.confSwitch;
  }
}
