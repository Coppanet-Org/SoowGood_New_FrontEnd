import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoutDeleteRequestComponent } from './accout-delete-request.component';

describe('AccoutDeleteRequestComponent', () => {
  let component: AccoutDeleteRequestComponent;
  let fixture: ComponentFixture<AccoutDeleteRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccoutDeleteRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccoutDeleteRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
