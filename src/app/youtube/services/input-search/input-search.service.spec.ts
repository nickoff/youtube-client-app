import { InputSearchService } from './input-search.sevice';

describe('InputSearchService', () => {
  let service: InputSearchService;

  beforeEach(() => {
    service = new InputSearchService();
  });

  it('should set data correctly', () => {
    const testData = 'test data';
    service.setData(testData);
    service.data$.subscribe(data => {
      expect(data).toBe(testData);
    });
  });

  it('should clear data correctly', () => {
    service.clearData();
    service.data$.subscribe(data => {
      expect(data).toBe('');
    });
  });
});
