import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrdersPdvComponent } from './list-orders-pdv.component';

describe('ListOrdersPdvComponent', () => {
  let component: ListOrdersPdvComponent;
  let fixture: ComponentFixture<ListOrdersPdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrdersPdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrdersPdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
