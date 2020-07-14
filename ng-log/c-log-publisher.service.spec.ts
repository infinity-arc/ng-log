import { TestBed } from '@angular/core/testing';

import { CLogPublisherService } from './c-log-publisher.service';

describe('CLogPublisherService', () => {
  let service: CLogPublisherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CLogPublisherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
