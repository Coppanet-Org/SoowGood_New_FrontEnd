import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupMarketingBannerComponent } from './signup-marketing-banner.component';

describe('SignupMarketingBannerComponent', () => {
  let component: SignupMarketingBannerComponent;
  let fixture: ComponentFixture<SignupMarketingBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupMarketingBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupMarketingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
