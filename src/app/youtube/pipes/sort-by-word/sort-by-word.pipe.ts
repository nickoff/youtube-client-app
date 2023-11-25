import { Pipe, PipeTransform } from '@angular/core';
import { CardItemModel } from '../../components/card-item/card-item.model';

@Pipe({
  name: 'sortByWord'
})
export class SortByWordPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(array: CardItemModel[], word: string | null): CardItemModel[] {
    if (word === "" || word === null) return array;
    return array.filter(item => item.title.toLowerCase().trim().split(' ').includes(word.toLowerCase()));
  }
}
