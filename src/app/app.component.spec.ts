import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { HomeTitleComponent } from './home-title/home-title.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { SearchReportPaneComponent } from './search-report-pane/search-report-pane.component';
import { PipesModule } from '../pipes/pipes.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        TimepickerModule,
        PipesModule
      ],
      declarations: [
        AppComponent,
        FooterBarComponent,
        HeaderBarComponent,
        HomeTitleComponent,
        SearchReportPaneComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Audit Management'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Audit Management');
  });
});
