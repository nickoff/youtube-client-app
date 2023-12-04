import { InputSearchService } from './input-search.sevice';

describe('InputSearchService', () => {
  let service: InputSearchService;

  beforeEach(() => {
    service = new InputSearchService();
  });

  it('should set data correctly', () => {
    expect.assertions(2);
    const testData = 'test data';
    const setDataSpy = jest.spyOn(service, 'setData');
    service.setData(testData);
    expect(setDataSpy).toHaveBeenCalledWith(testData);
    service.data$.subscribe(data => {
      expect(data).toBe(testData);
    });
  });

  it('should clear data correctly', () => {
    expect.assertions(2);
    const clearDataSpy = jest.spyOn(service, 'clearData');
    service.clearData();
    expect(clearDataSpy).toHaveBeenCalled();
    service.data$.subscribe(data => {
      expect(data).toBe('');
    });
  });
});
