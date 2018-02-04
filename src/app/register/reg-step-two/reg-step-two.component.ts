import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService, AlertService } from '../../services/index';
@Component({
  selector: 'app-reg-step-two',
  templateUrl: './reg-step-two.component.html',
  styleUrls: ['./reg-step-two.component.css']
})
export class RegStepTwoComponent implements OnInit {
  model: any = {};
  loading = false;
  accPersonName: '';
  accPersonNo: '';
  accPersonFaxNo: '';
  accPersonEmail: '';
  salesPersonName: '';
  salesPersonNo: '';
  salesPersonEmail: '';
  salesPersonFaxNo: '';
  // documents: '';
  @Output() switchStep = new EventEmitter();
  @Output() regValues = new EventEmitter();
  regStep: FormGroup;
  constructor(
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.regStep = new FormGroup({
      accPersonName: new FormControl(null, Validators.required),
      accPersonNo: new FormControl(null, Validators.required),
      accPersonFaxNo: new FormControl(null, Validators.required),
      accPersonEmail: new FormControl(null, Validators.required),
      salesPersonName: new FormControl(null, Validators.required),
      salesPersonNo: new FormControl(null, Validators.required),
      salesPersonEmail: new FormControl(null, Validators.required),
      salesPersonFaxNo: new FormControl(null, Validators.required),
      // vatNumber: new FormControl(null, Validators.required),
      // website: new FormControl(null, null),
    });

    this.regStep.valueChanges.subscribe(value => {
      if (this.regStep.valid) {
        this.switchStep.emit(3);
        this.regValues.emit(this.regStep.value);
        // console.log(this.regStep.value);
      }

    });
  }

}
