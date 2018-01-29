import { Component, ContentChildren, QueryList, AfterContentInit, Input } from '@angular/core';
import { TabComponent } from './tab.component';
import { Console } from '@angular/core/src/console';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})

export class TabsComponent implements AfterContentInit {
  constructor() { }
  activeTabs: any[];

  @Input() vertical = false;
  @Input() selectedIndex = 0;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  // contentChildren are set
  ngAfterContentInit() {
    // Make sure there are tabs
    if (this.tabs.length) {
      this.selectTab(this.selectedIndex);
    }
  }

  selectTab(index) {

    if (!this.tabs.toArray()[index].disabled) {
      this.tabs.toArray().forEach(value => value.active = false);
      this.tabs.toArray()[index].active = true;
    }
  }

}

