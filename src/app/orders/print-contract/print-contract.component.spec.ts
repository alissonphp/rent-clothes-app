import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintContractComponent } from './print-contract.component';

describe('PrintContractComponent', () => {
  let component: PrintContractComponent;
  let fixture: ComponentFixture<PrintContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
