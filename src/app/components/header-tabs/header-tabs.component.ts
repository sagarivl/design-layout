import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-tabs',
  templateUrl: './header-tabs.component.html',
  styleUrls: ['./header-tabs.component.css'],
})
export class HeaderTabsComponent implements OnInit {
  preTabs!: any[];
  tabsData!: any[];
  constructor() {
    this.preTabs = [
      { label: 'Caster Details', content: 'Content 4' },
      { label: 'Heat Under Running ID', content: 'Content 5' },
      { label: 'SOP Document', content: 'Content 6' },
    ];
    this.tabsData = [
      { label: 'Caster Details', content: 'Content 1' },
      { label: 'Heat Production', content: 'Content 2' },
      { label: 'Tundish', content: 'Content 3' },
      { label: 'Consumbles', content: 'Content 13' },
      { label: 'Abnormality', content: 'Content 4' },
      { label: 'Heat Under Running ID', content: 'Content 5' },
      { label: 'Slab', content: 'Content 6' },
    ];
  }

  ngOnInit(): void {}
}
