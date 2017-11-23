import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdadeClientComponent } from './updade-client.component';

describe('UpdadeClientComponent', () => {
  let component: UpdadeClientComponent;
  let fixture: ComponentFixture<UpdadeClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdadeClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdadeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
