import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBannersComponent } from './upload-banners.component';

describe('UploadBannersComponent', () => {
  let component: UploadBannersComponent;
  let fixture: ComponentFixture<UploadBannersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadBannersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
