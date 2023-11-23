import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from '../../../shared/enums/order.enum';

@Injectable({
  providedIn: 'root'
})

export class SortDateService {
  private sortDateOrder = new BehaviorSubject<Order>(Order.asc);
  sortDateOrder$ = this.sortDateOrder.asObservable();

  toggleSortOrder(): void {
    this.sortDateOrder.next(this.sortDateOrder.value === Order.asc ? Order.desc : Order.asc);
  }
}
