import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderImagesComponent } from './slider-images.component';

describe('SliderImagesComponent', () => {
  let component: SliderImagesComponent;
  let fixture: ComponentFixture<SliderImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
