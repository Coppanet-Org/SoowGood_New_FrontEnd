import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveDoctorsComponent } from './live-doctors.component';

describe('LiveDoctorsComponent', () => {
  let component: LiveDoctorsComponent;
  let fixture: ComponentFixture<LiveDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveDoctorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
