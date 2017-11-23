import { TestBed, inject } from '@angular/core/testing';

import { UsersServiceService } from './users-service.service';

describe('UsersServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersServiceService]
    });
  });

  it('should be created', inject([UsersServiceService], (service: UsersServiceService) => {
    expect(service).toBeTruthy();
  }));
});
