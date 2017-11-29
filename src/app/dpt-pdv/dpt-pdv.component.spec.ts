import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DptPdvComponent } from './dpt-pdv.component';

describe('DptPdvComponent', () => {
  let component: DptPdvComponent;
  let fixture: ComponentFixture<DptPdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DptPdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DptPdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
