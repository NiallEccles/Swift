import { TestBed } from '@angular/core/testing';

import { BumpService } from './bump.service';

describe('BumpService', () => {
  let service: BumpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BumpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
