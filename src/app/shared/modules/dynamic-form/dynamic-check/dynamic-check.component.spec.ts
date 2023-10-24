import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCheckComponent } from './dynamic-check.component';

describe('DynamicCheckComponent', () => {
  let component: DynamicCheckComponent;
  let fixture: ComponentFixture<DynamicCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
