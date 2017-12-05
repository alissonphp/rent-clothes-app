import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSellerComponent } from './sidebar-seller.component';

describe('SidebarSellerComponent', () => {
  let component: SidebarSellerComponent;
  let fixture: ComponentFixture<SidebarSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
