import { TestBed, inject } from '@angular/core/testing';

import { CashierServiceService } from './cashier-service.service';

describe('CashierServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CashierServiceService]
    });
  });

  it('should be created', inject([CashierServiceService], (service: CashierServiceService) => {
    expect(service).toBeTruthy();
  }));
});
