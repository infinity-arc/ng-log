import { TestBed } from '@angular/core/testing';

import { CLogService } from './c-log.service';

describe('CLogService', () => {
  let service: CLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
