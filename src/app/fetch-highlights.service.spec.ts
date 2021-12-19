import { TestBed } from '@angular/core/testing';

import { FetchHighlightsService } from './fetch-highlights.service';

describe('FetchHighlightsService', () => {
  let service: FetchHighlightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchHighlightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
