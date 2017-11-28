import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBannersComponent } from './list-banners.component';

describe('ListBannersComponent', () => {
  let component: ListBannersComponent;
  let fixture: ComponentFixture<ListBannersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBannersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
