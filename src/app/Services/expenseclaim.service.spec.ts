import { TestBed } from '@angular/core/testing';

import { ExpenseClaimService } from './expenseclaim.service';

describe('ExpenseClaimService', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({});
   
  });

  it('should be created', () => {
    const service: ExpenseClaimService = TestBed.get(ExpenseClaimService);
    expect(service).toBeTruthy();
  });
});
