import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierComponent } from './cashier.component';

describe('CashierComponent', () => {
  let component: CashierComponent;
  let fixture: ComponentFixture<CashierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
