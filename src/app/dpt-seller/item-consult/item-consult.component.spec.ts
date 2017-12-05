import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemConsultComponent } from './item-consult.component';

describe('ItemConsultComponent', () => {
  let component: ItemConsultComponent;
  let fixture: ComponentFixture<ItemConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
