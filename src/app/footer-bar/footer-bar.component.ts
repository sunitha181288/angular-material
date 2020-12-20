import { Component, OnInit } from '@angular/core';
import { version } from 'package.json';
@Component({
  selector: 'audit-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.scss']
})
export class FooterBarComponent {

  constructor() { }

  public version: string = version;

}
