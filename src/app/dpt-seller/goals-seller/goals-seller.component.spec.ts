import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsSellerComponent } from './goals-seller.component';

describe('GoalsSellerComponent', () => {
  let component: GoalsSellerComponent;
  let fixture: ComponentFixture<GoalsSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
