import { TestBed } from '@angular/core/testing';

import { TypeprojetService } from './typeprojet.service';

describe('TypeprojetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeprojetService = TestBed.get(TypeprojetService);
    expect(service).toBeTruthy();
  });
});
