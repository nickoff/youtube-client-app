import { TestBed } from '@angular/core/testing';
import { take } from 'rxjs';
import { SortCountOfViewService } from './sort-count-of-view.service';
import { Order } from '../../../shared/enums/order.enum';

describe('SortCountOfViewService', () => {
  let service: SortCountOfViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortCountOfViewService);
  });

  it('should create the service', () => {
    expect.assertions(1);
    expect(service).toBeTruthy();
  });

  it('should set the initial sort order to ascending', (done) => {
    expect.assertions(1);
    service.sortCountOfViewOrder$.pipe(take(1)).subscribe(value => {
      expect(value).toBe(Order.asc);
      done();
    });
  });

  it('should toggle the sort order to the opposite', (done) => {
    expect.assertions(2);
    const spy = jest.spyOn(service, 'toggleSortOrder');
    service.toggleSortOrder();
    expect(spy).toHaveBeenCalled();
    service.sortCountOfViewOrder$.pipe(take(1)).subscribe(value => {
      expect(value).toBe(Order.desc);
    });
    done();
  });

  it('should double toggle the sort order', (done) => {
    expect.assertions(2);
    const spy = jest.spyOn(service, 'toggleSortOrder');
    service.sortCountOfViewOrder$.pipe(take(1)).subscribe(value => {
      if (value === Order.asc) {
        service.toggleSortOrder();
        expect(spy).toHaveBeenCalled();
        service.sortCountOfViewOrder$.pipe(take(1)).subscribe(data => {
          expect(data).toBe(Order.desc);
        });
      } else {
        service.toggleSortOrder();
        expect(spy).toHaveBeenCalled();
        service.sortCountOfViewOrder$.subscribe(data => {
          expect(data).toBe(Order.asc);
        });
      }
    });
    done();
  });
});
