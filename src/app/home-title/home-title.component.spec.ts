import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../material.module';
import { HomeTitleComponent } from './home-title.component';
import { SearchReportPaneComponent } from '../search-report-pane/search-report-pane.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PipesModule } from '../../pipes/pipes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

describe('HomeTitleComponent', () => {
  let component: HomeTitleComponent;
  let fixture: ComponentFixture<HomeTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTitleComponent, SearchReportPaneComponent],
      imports: [MaterialModule, ReactiveFormsModule, FormsModule, PipesModule, BrowserAnimationsModule, TimepickerModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Home title component', () => {
    expect(component).toBeTruthy();
  });
});
