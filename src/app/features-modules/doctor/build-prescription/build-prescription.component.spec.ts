import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildPrescriptionComponent } from './build-prescription.component';

describe('BuildPrescriptionComponent', () => {
  let component: BuildPrescriptionComponent;
  let fixture: ComponentFixture<BuildPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildPrescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
