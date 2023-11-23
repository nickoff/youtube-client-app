import { TestBed } from '@angular/core/testing';

import { SortByWordService } from './sort-by-word.service';

describe('SortByWordService', () => {
  let service: SortByWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortByWordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
