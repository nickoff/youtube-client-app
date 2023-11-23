import { Pipe, PipeTransform } from '@angular/core';
import { Order } from 'src/app/shared/enums/order.enum';
import { CardItem } from '../../models';

@Pipe({
  name: 'sortByCountOfView'
})
export class SortByCountOfViewPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(array: CardItem[], order:Order | null = Order.desc): CardItem[] {
    array.sort((currentValue: CardItem, nextValue: CardItem) => {
      const currentCount = Number(currentValue.statistics.viewCount);
      const nextCount = Number(nextValue.statistics.viewCount);
      return order === Order.asc
        ? currentCount - nextCount
        : nextCount - currentCount;
    });
    return array;
  }
}
