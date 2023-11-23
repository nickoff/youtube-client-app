import { Pipe, PipeTransform } from '@angular/core';
import { Order } from 'src/app/shared/enums/order.enum';
import { CardItem } from '../../models';

@Pipe({
  name: 'sortByDate'
})

export class SortByDatePipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(array: CardItem[], order:Order | null = Order.desc): CardItem[] {
    array.sort((a: CardItem, b: CardItem) => {
      const currentTime = new Date(a.snippet.publishedAt);
      const nextTime = new Date(b.snippet.publishedAt);
      return order === Order.asc
        ? currentTime.getTime() - nextTime.getTime()
        : nextTime.getTime() - currentTime.getTime();
    });
    return array;
  }
}
