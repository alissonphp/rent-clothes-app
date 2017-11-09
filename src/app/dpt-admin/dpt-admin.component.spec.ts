import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DptAdminComponent } from './dpt-admin.component';

describe('DptAdminComponent', () => {
  let component: DptAdminComponent;
  let fixture: ComponentFixture<DptAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DptAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DptAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
