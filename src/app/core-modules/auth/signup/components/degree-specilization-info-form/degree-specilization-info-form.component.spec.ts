import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeSpecilizationInfoFormComponent } from './degree-specilization-info-form.component';

describe('DegreeSpecilizationInfoFormComponent', () => {
  let component: DegreeSpecilizationInfoFormComponent;
  let fixture: ComponentFixture<DegreeSpecilizationInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegreeSpecilizationInfoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DegreeSpecilizationInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
