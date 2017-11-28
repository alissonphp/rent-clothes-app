import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHeaderBarComponent } from './nav-header-bar.component';

describe('NavHeaderBarComponent', () => {
  let component: NavHeaderBarComponent;
  let fixture: ComponentFixture<NavHeaderBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavHeaderBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHeaderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
