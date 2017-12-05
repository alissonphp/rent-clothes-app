import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DptSellerComponent } from './dpt-seller.component';

describe('DptSellerComponent', () => {
  let component: DptSellerComponent;
  let fixture: ComponentFixture<DptSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DptSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DptSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
