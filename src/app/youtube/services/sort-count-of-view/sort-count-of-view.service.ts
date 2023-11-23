import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from '../../../shared/enums/order.enum';

@Injectable({
  providedIn: 'root'
})
export class SortCountOfViewService {
  private sortCountOfViewOrder = new BehaviorSubject<Order>(Order.asc);
  sortCountOfViewOrder$ = this.sortCountOfViewOrder.asObservable();

  toggleSortOrder(): void {
    this.sortCountOfViewOrder
      .next(this.sortCountOfViewOrder.value === Order.asc ? Order.desc : Order.asc);
  }
}
