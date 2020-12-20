import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { HomeTitleComponent } from './home-title/home-title.component';
import { SearchReportPaneComponent } from './search-report-pane/search-report-pane.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterBarComponent,
    HeaderBarComponent,
    HomeTitleComponent,
    SearchReportPaneComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    MaterialModule,
    PipesModule,
    ReactiveFormsModule,
    TimepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
