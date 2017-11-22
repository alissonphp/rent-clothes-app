import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSizesComponent } from './item-sizes.component';

describe('ItemSizesComponent', () => {
  let component: ItemSizesComponent;
  let fixture: ComponentFixture<ItemSizesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSizesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
