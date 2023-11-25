/* eslint-disable class-methods-use-this */
import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCustomCards } from 'src/app/redux/custom-card/custom-card.selector';
import { CustomCardStateModel } from 'src/app/redux/custom-card';
import { CardItemModel } from '../card-item/card-item.model';
import { SortDateService } from '../../services/sort-data/sort-data.service';
import { SortCountOfViewService } from '../../services/sort-count-of-view/sort-count-of-view.service';
import { SortByWordService } from '../../services/sort-word/sort-by-word.service';

@Component({
  selector: 'app-custom-card-list',
  templateUrl: './custom-card-list.component.html',
  styleUrls: ['./custom-card-list.component.scss']
})
export class CustomCardListComponent implements OnInit {
  items$?: Observable<CardItemModel[]>;
  sortDateOrder = this.sortDateService.sortDateOrder$;
  sortCountOfViewOrder = this.sortCountOfViewService.sortCountOfViewOrder$;
  inputData = this.sortByWordService.inputData$;

  constructor(
    private sortDateService: SortDateService,
    private sortCountOfViewService: SortCountOfViewService,
    private sortByWordService: SortByWordService,
    private store: Store
  ) { }

  private transformDate = (item: CustomCardStateModel): CardItemModel => ({
    id: item.id,
    image: item.customCard.img,
    title: item.customCard.title,
    publishedAt: item.customCard.creationDate,
    isCustomCard: true,
    isActions: false,
  });

  ngOnInit(): void {
    this.items$ = this.store.select(selectCustomCards).pipe(
      map(items => items.map(this.transformDate))
    );
  }
}
