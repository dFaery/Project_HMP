import { TestBed } from '@angular/core/testing';

import { Akunservice } from './akunservice';

describe('Akunservice', () => {
  let service: Akunservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Akunservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
