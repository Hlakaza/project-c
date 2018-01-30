import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationService } from '../../../services/registration.service';
import { ContentService } from '../../../services/content.service';
@Component({
  selector: 'app-reg-step-3',
  templateUrl: './reg-step-3.component.html',
  styleUrls: ['./reg-step-3.component.scss']
})
export class RegStep3Component implements OnInit {
  @Output() switchStep = new EventEmitter();
  @Output() regValues = new EventEmitter();
  regStep: FormGroup;
  dayArr = [];
  monthArr = [];
  yearArr = [];
  docTypeList = [];
  issuedByList = [];
  resourceStrings: any = {};
  constructor(private reg: RegistrationService, private copy: ContentService) {
    this.copy.resourceStringPackEmit.subscribe(res => {
      this.resourceStrings = res;
    });
    this.copy.getResourceStringValue('casino.register');
    const today = new Date();
    let year = today.getFullYear() + 20;
    for (let i = 1; i < 32; i++) {
      this.dayArr.push(i);
    }
    for (let i = 1; i < 9; i++) {
      this.monthArr.push(i);
    }
    for (let i = 1; i < 41; i++) {
      this.yearArr.push(year);
      year = year - 1;
    }
    this.reg.idDocType().subscribe(res => {
      this.docTypeList = res['IdTypes'];
    });
    this.reg.issuedBy().subscribe(res => {
      this.issuedByList = res['IssuedBy'];
    });
  }

  ngOnInit() {
    this.regStep = new FormGroup({
      DocumentType: new FormControl(null, Validators.required),
      IssuedBy: new FormControl(null, Validators.required),
      IdNumber: new FormControl(null, Validators.required),
      IssuedInLocality: new FormControl(null, Validators.required),
      validFDay: new FormControl(null, Validators.required),
      validFMonth: new FormControl(null, Validators.required),
      validFYear: new FormControl(null, Validators.required),
      validTDay: new FormControl(null, Validators.required),
      validTMonth: new FormControl(null, Validators.required),
      validTYear: new FormControl(null, Validators.required),
    });
    this.regStep.valueChanges.subscribe(value => {
      if (this.regStep.valid) {
        this.switchStep.emit(4);
        this.regValues.emit(this.regStep.value);
      }
    });
  }
}
