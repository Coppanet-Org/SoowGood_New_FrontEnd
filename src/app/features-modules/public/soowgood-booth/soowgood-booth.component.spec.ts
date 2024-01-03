import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoowgoodBoothComponent } from './soowgood-booth.component';

describe('SoowgoodBoothComponent', () => {
  let component: SoowgoodBoothComponent;
  let fixture: ComponentFixture<SoowgoodBoothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoowgoodBoothComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoowgoodBoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
