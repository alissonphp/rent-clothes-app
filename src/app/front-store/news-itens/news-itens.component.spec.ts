import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItensComponent } from './news-itens.component';

describe('NewsItensComponent', () => {
  let component: NewsItensComponent;
  let fixture: ComponentFixture<NewsItensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsItensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
