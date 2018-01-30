import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegStepEndComponent } from './reg-step-end.component';

describe('RegStepEndComponent', () => {
  let component: RegStepEndComponent;
  let fixture: ComponentFixture<RegStepEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegStepEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegStepEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
