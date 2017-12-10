import { TestBed, inject } from '@angular/core/testing';

import { GoalsService } from './goals.service';

describe('GoalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoalsService]
    });
  });

  it('should be created', inject([GoalsService], (service: GoalsService) => {
    expect(service).toBeTruthy();
  }));
});
