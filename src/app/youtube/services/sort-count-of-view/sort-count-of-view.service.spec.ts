import { TestBed } from '@angular/core/testing';

import { SortCountOfViewService } from './sort-count-of-view.service';

describe('SortCountOfViewService', () => {
  let service: SortCountOfViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortCountOfViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
