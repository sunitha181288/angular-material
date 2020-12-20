import { Component, ViewEncapsulation, ElementRef, DoCheck } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatInput } from '@angular/material';
import { SearchInputModel } from '../../models/user';
import { TimepickerConfig } from 'ngx-bootstrap/timepicker';

export function getTimepickerConfig(): TimepickerConfig {
  return Object.assign(new TimepickerConfig(), {
    hourStep: 2,
    minuteStep: 10,
    showMeridian: false,
    readonlyInput: false,
    mousewheel: true,
    showMinutes: true,
    showSeconds: false
  });
}

@Component({
  selector: 'audit-search-report-pane',
  templateUrl: './search-report-pane.component.html',
  styleUrls: ['./search-report-pane.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: TimepickerConfig, useFactory: getTimepickerConfig }]
})

export class SearchReportPaneComponent implements DoCheck {
  userTextvalue: string;
  userControl = new FormControl();
  filteredUsers: SearchInputModel[];
  selectedFunctionItem: SearchInputModel;
  isSearch: boolean;
  startTime: any;
  endTime: any;
  startDate: any;
  endDate: any;
  showStartTime: boolean;
  showEndTime: boolean;
  showEndDate: boolean;
  showStartDate: boolean;
  users: SearchInputModel[] = [
    {
      name: 'Leslie Kyles',
      code: 'JT8GG'
    },
    {
      name: 'John Doe',
      code: 'TFQUN'

    },
    {
      name: 'Jermanine Marshall',
      code: 'P33J5'
    }
  ];

  functionOptions: Array<object> = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Customer' },
    { id: 3, name: 'Dealer' },
    { id: 4, name: 'Terminal' },
  ];

  constructor() {
    this.userControl.valueChanges.subscribe((user) => {
      this.userTextvalue = user;
    });
  }

  clearUserValues() {
    this.userControl.setValue('');
  }

  onSelectFunction(item) {
    this.selectedFunctionItem = item;
  }

  handleSearchButton() {
    if (this.selectedFunctionItem || (this.filteredUsers && this.filteredUsers.length > 0)) {
      this.isSearch = true;
    } else {
      this.isSearch = false;
    }
  }

  onStartTimeFocus() {
    this.showStartTime = true;
    if (!this.startTime) {
      const date = new Date();
      date.setHours(0);
      date.setMinutes(0);
      this.startTime = date;
    }
  }

  onStartDateFocus(startDatePicker) {
    startDatePicker.open();
    this.showStartDate = true;
    if (!this.startDate || this.startDate === 'Invalid Date') {
      const date = new Date();
      this.startDate = date;
    }
  }

  onEndDateFocus(endDatePicker) {
    endDatePicker.open();
    this.showEndDate = true;
    if (!this.endDate || this.endDate === 'Invalid Date') {
      this.endDate = this.startDate;
    }
  }

  onEndTimeFocus() {
    this.showEndTime = true;
    if (!this.endTime) {
      const date = new Date();
      date.setHours(0);
      date.setMinutes(0);
      this.endTime = date;
    }
  }

  onChangeStartDate(date) {
    this.startDate = new Date(date);
  }

  onChangeStartTime(date) {
    const currentDate = new Date();
    if (date) {
      const time = date.split(':');
      currentDate.setHours(Number(time[0]));
      currentDate.setMinutes(Number(time[1]));
    }
    this.startTime = currentDate;
  }

  onChangeEndDate(date) {
    this.endDate = new Date(date);
  }

  onChangeEndTime(date) {
    const currentDate = new Date();
    if (date) {
      const time = date.split(':');
      currentDate.setHours(Number(time[0]));
      currentDate.setMinutes(Number(time[1]));
    }
    this.endTime = currentDate;
  }

  onCloseTimePicker() {
    this.showEndTime = false;
    this.showStartTime = false;
    this.showStartDate = false;
    this.showEndDate = false;
  }

  ngDoCheck() {
    this.handleSearchButton();
  }
}
