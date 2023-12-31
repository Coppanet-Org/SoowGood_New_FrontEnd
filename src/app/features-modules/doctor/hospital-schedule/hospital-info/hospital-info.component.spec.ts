import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalInfoComponent } from './hospital-info.component';

describe('HospitalInfoComponent', () => {
  let component: HospitalInfoComponent;
  let fixture: ComponentFixture<HospitalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
