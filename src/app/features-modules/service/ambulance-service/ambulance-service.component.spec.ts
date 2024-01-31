import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulanceServiceComponent } from './ambulance-service.component';

describe('AmbulanceServiceComponent', () => {
  let component: AmbulanceServiceComponent;
  let fixture: ComponentFixture<AmbulanceServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbulanceServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmbulanceServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
