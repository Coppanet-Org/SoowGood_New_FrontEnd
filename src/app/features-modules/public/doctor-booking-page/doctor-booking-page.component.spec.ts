import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorBookingPageComponent } from './doctor-booking-page.component';

describe('DoctorBookingPageComponent', () => {
  let component: DoctorBookingPageComponent;
  let fixture: ComponentFixture<DoctorBookingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorBookingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorBookingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
