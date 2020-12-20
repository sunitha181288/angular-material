import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../material.module';
import { SearchReportPaneComponent } from './search-report-pane.component';
import { PipesModule } from '../../pipes/pipes.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

describe('SearchReportPaneComponent', () => {
  let component: SearchReportPaneComponent;
  let fixture: ComponentFixture<SearchReportPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchReportPaneComponent],
      imports: [MaterialModule, PipesModule, ReactiveFormsModule, FormsModule, BrowserAnimationsModule, TimepickerModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchReportPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
