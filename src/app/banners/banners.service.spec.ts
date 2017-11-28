import { TestBed, inject } from '@angular/core/testing';

import { BannersServiceService } from './banners.service';

describe('BannersServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BannersServiceService]
    });
  });

  it('should be created', inject([BannersServiceService], (service: BannersServiceService) => {
    expect(service).toBeTruthy();
  }));
});
