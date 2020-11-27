import { TestBed } from '@angular/core/testing';

import { RessforService } from './ressfor.service';

describe('RessforService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RessforService = TestBed.get(RessforService);
    expect(service).toBeTruthy();
  });
});
