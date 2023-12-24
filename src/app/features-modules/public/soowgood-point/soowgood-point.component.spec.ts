import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoowgoodPointComponent } from './soowgood-point.component';

describe('SoowgoodPointComponent', () => {
  let component: SoowgoodPointComponent;
  let fixture: ComponentFixture<SoowgoodPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoowgoodPointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoowgoodPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
