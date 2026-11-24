import { TestBed } from '@angular/core/testing';
import { Dexieservice } from './dexieservice';

describe('Dexieservice', () => {
  let service: Dexieservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dexieservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
