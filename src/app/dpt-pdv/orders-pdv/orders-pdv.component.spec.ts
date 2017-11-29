import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersPdvComponent } from './orders-pdv.component';

describe('OrdersPdvComponent', () => {
  let component: OrdersPdvComponent;
  let fixture: ComponentFixture<OrdersPdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersPdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersPdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
