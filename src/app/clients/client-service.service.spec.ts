import { TestBed, inject } from '@angular/core/testing';

import { ClientServiceService } from './client-service.service';

describe('ClientServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientServiceService]
    });
  });

  it('should be created', inject([ClientServiceService], (service: ClientServiceService) => {
    expect(service).toBeTruthy();
  }));
});
