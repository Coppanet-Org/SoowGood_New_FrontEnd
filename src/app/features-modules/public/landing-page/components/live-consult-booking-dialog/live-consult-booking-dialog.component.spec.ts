import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveConsultBookingDialogComponent } from './live-consult-booking-dialog.component';

describe('LiveConsultBookingDialogComponent', () => {
  let component: LiveConsultBookingDialogComponent;
  let fixture: ComponentFixture<LiveConsultBookingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveConsultBookingDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveConsultBookingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
