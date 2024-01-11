import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TearmsServicesComponent } from './tearms-services.component';

describe('TearmsServicesComponent', () => {
  let component: TearmsServicesComponent;
  let fixture: ComponentFixture<TearmsServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TearmsServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TearmsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
