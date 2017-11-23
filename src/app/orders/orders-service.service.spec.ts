import { TestBed, inject } from '@angular/core/testing';

import { OrdersServiceService } from './orders-service.service';

describe('OrdersServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdersServiceService]
    });
  });

  it('should be created', inject([OrdersServiceService], (service: OrdersServiceService) => {
    expect(service).toBeTruthy();
  }));
});
