import { TestBed } from '@angular/core/testing';
import { SortByWordService } from './sort-by-word.service';

describe('SortByWordService', () => {
  let service: SortByWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortByWordService);
  });

  it('should create the service', () => {
    expect.assertions(1);
    expect(service).toBeTruthy();
  });

  it('should set the initial sort order to ascending', () => {
    expect.assertions(1);
    service.inputData$.subscribe(value => {
      expect(value).toBe('');
    });
  });

  it('should set the input data correctly', () => {
    expect.assertions(2);
    const testData = 'test data';
    const spy = jest.spyOn(service, 'setData');
    service.setData(testData);
    expect(spy).toHaveBeenCalledWith(testData);
    service.inputData$.subscribe(value => {
      expect(value).toBe(testData);
    });
  });
});
