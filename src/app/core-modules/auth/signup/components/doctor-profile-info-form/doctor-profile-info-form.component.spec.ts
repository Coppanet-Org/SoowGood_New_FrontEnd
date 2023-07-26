import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorProfileInfoFormComponent } from './doctor-profile-info-form.component';

describe('DoctorProfileInfoFormComponent', () => {
  let component: DoctorProfileInfoFormComponent;
  let fixture: ComponentFixture<DoctorProfileInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorProfileInfoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorProfileInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
