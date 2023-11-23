import { Pipe, PipeTransform } from '@angular/core';
import { CardItem } from "../../models";

@Pipe({
  name: 'sortByWord'
})
export class SortByWordPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(array: CardItem[], word: string | null): CardItem[] {
    if (word === "" || word === null) return array;
    return array.filter(item => item.snippet.title.toLowerCase().trim().split(' ').includes(word.toLowerCase()));
  }
}
