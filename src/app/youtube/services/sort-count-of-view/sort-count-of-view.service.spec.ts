import { TestBed } from '@angular/core/testing';
import { SortCountOfViewService } from './sort-count-of-view.service';
import { Order } from '../../../shared/enums/order.enum';

describe('SortCountOfViewService', () => {
  let service: SortCountOfViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortCountOfViewService);
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('should set the initial sort order to ascending', (done) => {
    service.sortCountOfViewOrder$.subscribe(value => {
      expect(value).toBe(Order.asc);
      done();
    });
  });

  it('should toggle the sort order to the opposite', () => {
    service.toggleSortOrder();
    service.sortCountOfViewOrder$.subscribe(value => {
      expect(value).toBe(Order.desc);
    });
  });

  it('should double toggle the sort order', () => {
    service.sortCountOfViewOrder$.subscribe(value => {
      if (value === Order.asc) {
        service.toggleSortOrder();
        service.sortCountOfViewOrder$.subscribe(data => {
          expect(data).toBe(Order.desc);
        });
      } else {
        service.toggleSortOrder();
        service.sortCountOfViewOrder$.subscribe(data => {
          expect(data).toBe(Order.asc);
        });
      }
    });
  });
});
