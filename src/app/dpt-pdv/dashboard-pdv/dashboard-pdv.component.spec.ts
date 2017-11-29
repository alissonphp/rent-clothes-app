import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPdvComponent } from './dashboard-pdv.component';

describe('DashboardPdvComponent', () => {
  let component: DashboardPdvComponent;
  let fixture: ComponentFixture<DashboardPdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
