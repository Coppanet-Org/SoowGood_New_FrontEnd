import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveDoctorCardComponent } from './live-doctor-card.component';

describe('LiveDoctorCardComponent', () => {
  let component: LiveDoctorCardComponent;
  let fixture: ComponentFixture<LiveDoctorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveDoctorCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveDoctorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
