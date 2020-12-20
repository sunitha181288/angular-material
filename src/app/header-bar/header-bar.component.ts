import { Component } from '@angular/core';

@Component({
  selector: 'audit-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})


export class HeaderBarComponent {

  ADMIN_MENU_ITEM: string = String('ADMIN');
  SHIPMENT_MENU_ITEM: string = String('Management');
  activeLink = this.ADMIN_MENU_ITEM;

  constructor() {

  }

  onSelectNav(option) {
    this.activeLink = option;
  }

}
