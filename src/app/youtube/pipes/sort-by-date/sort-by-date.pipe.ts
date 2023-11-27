import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../../../shared/enums/order.enum';
import { CardItemModel } from '../../../shared/models/card-item.model';

@Pipe({
  name: 'sortByDate'
})

export class SortByDatePipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(array: CardItemModel[], order: Order | null = Order.desc): CardItemModel[] {
    array.sort((a: CardItemModel, b: CardItemModel) => {
      const currentTime = new Date(a.publishedAt);
      const nextTime = new Date(b.publishedAt);
      return order === Order.asc
        ? currentTime.getTime() - nextTime.getTime()
        : nextTime.getTime() - currentTime.getTime();
    });
    return array;
  }
}
