import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCardIncludeListComponent } from './pricing-card-include-list.component';

describe('PricingCardIncludeListComponent', () => {
  let component: PricingCardIncludeListComponent;
  let fixture: ComponentFixture<PricingCardIncludeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingCardIncludeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingCardIncludeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
