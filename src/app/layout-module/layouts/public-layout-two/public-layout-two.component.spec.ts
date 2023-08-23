import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicLayoutTwoComponent } from './public-layout-two.component';

describe('PublicLayoutTwoComponent', () => {
  let component: PublicLayoutTwoComponent;
  let fixture: ComponentFixture<PublicLayoutTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicLayoutTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicLayoutTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
