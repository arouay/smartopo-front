import { TestBed } from '@angular/core/testing';

import { DepensechargeService } from './depensecharge.service';

describe('DepensechargeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepensechargeService = TestBed.get(DepensechargeService);
    expect(service).toBeTruthy();
  });
});
