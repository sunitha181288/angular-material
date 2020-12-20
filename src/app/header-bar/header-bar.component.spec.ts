import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderBarComponent } from './header-bar.component';
import { MaterialModule } from '../material.module';

describe('HeaderBarComponent', () => {
  let component: HeaderBarComponent;
  let fixture: ComponentFixture<HeaderBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderBarComponent],
      imports: [MaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
