import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSizesCreateComponent } from './item-sizes-create.component';

describe('ItemSizesCreateComponent', () => {
  let component: ItemSizesCreateComponent;
  let fixture: ComponentFixture<ItemSizesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSizesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSizesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
