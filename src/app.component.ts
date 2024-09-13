import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';

import { Component } from '@angular/core';
import { MaskedDateTimeService } from '@syncfusion/ej2-angular-calendars';
@Component({
  imports: [DateTimePickerModule],
  standalone: true,
  selector: 'app-root',
  templateUrl: './maskplaceholder.html',
  providers: [MaskedDateTimeService],
})
export class AppComponent {
  constructor() {}
  public enableMaskSupport: boolean = true;
  public dateFormat: string = 'dd/MM/yyyy hh:mm a';
  public timeFormat: string = 'hh:mm a';
  public maskPlaceholderValue: Object = {
    day: 'dd',
    month: 'MM',
    year: 'yyyy',
    hour: 'hh',
    minute: 'mm',
    second: 'ss',
  };
}
