import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../material.module';
import { FooterBarComponent } from './footer-bar.component';
import { By } from '@angular/platform-browser';

describe('FooterBarComponent', () => {
  let component: FooterBarComponent;
  let fixture: ComponentFixture<FooterBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterBarComponent],
      imports: [MaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create footer bar component', () => {
    expect(component).toBeTruthy();
  });

  it('should check that \'Terms of Use\' link is present', () => {
    const termsOfUseLink = fixture.debugElement.queryAll(By.css('.footer-items'))[0].nativeElement.textContent;
    expect(termsOfUseLink).toEqual('Terms of Use');
  });

  it('should check that \'Privacy\' link is present', () => {
    const privacyLink = fixture.debugElement.queryAll(By.css('.footer-items'))[1].nativeElement.textContent;
    expect(privacyLink).toEqual('Privacy');
  });

  it('should check that \'Help\' link is present', () => {
    const helpLink = fixture.debugElement.queryAll(By.css('.footer-items'))[2].nativeElement.textContent;
    expect(helpLink).toEqual('Help');
  });
});
