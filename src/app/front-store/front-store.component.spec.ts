import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontStoreComponent } from './front-store.component';

describe('FrontStoreComponent', () => {
  let component: FrontStoreComponent;
  let fixture: ComponentFixture<FrontStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
