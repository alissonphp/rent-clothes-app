import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsUpdateComponent } from './goals-update.component';

describe('GoalsUpdateComponent', () => {
  let component: GoalsUpdateComponent;
  let fixture: ComponentFixture<GoalsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
