import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSetPasswordFormComponent } from './doctor-set-password-form.component';

describe('DoctorSetPasswordFormComponent', () => {
  let component: DoctorSetPasswordFormComponent;
  let fixture: ComponentFixture<DoctorSetPasswordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorSetPasswordFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorSetPasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
