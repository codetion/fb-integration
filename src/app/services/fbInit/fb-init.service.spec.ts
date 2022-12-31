import { TestBed } from '@angular/core/testing';

import { FbInitService } from './fb-init.service';

describe('FbInitService', () => {
  let service: FbInitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FbInitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
