import { TestBed } from '@angular/core/testing';

import { SortDateService } from './sort-data.service';

describe('SortDataService', () => {
  let service: SortDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
