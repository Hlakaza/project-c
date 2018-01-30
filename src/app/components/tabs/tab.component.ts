import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tab',
    template: `
    <div *ngIf="active" class="tab-content form-wrapper">
     <div  class="section is-active">
      <ng-content></ng-content>
    </div>
    </div>
  `
})
export class TabComponent {
    @Input() title: string;
    @Input() disabled: boolean;
    @Input() active = false;
}
