import { TestBed } from '@angular/core/testing';
import { SortByWordService } from './sort-by-word.service';

describe('SortByWordService', () => {
  let service: SortByWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortByWordService);
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('should set the initial sort order to ascending', () => {
    service.inputData$.subscribe(value => {
      expect(value).toBe('');
    });
  });

  it('should set the input data correctly', () => {
    const testData = 'test data';
    service.setData(testData);
    service.inputData$.subscribe(value => {
      expect(value).toBe(testData);
    });
  });
});
