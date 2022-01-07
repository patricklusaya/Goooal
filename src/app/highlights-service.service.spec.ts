import { TestBed } from '@angular/core/testing';

import { HighlightsServiceService } from './highlights-service.service';

describe('HighlightsServiceService', () => {
  let service: HighlightsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighlightsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
