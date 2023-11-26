import { Pipe, PipeTransform } from '@angular/core';
import { Order } from 'src/app/shared/enums/order.enum';
import { CardItemModel } from '../../../shared/models/card-item.model';

@Pipe({
  name: 'sortByCountOfView'
})
export class SortByCountOfViewPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(array: CardItemModel[], order: Order | null = Order.desc): CardItemModel[] {
    array.sort((currentValue: CardItemModel, nextValue: CardItemModel) => {
      const currentCount = Number(currentValue.statistics?.viewCount);
      const nextCount = Number(nextValue.statistics?.viewCount);
      return order === Order.asc
        ? currentCount - nextCount
        : nextCount - currentCount;
    });
    return array;
  }
}
