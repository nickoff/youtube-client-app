import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectFavoriteCards } from 'src/app/redux/favorite-card/favorite-card.selector';
import { CardItemModel } from 'src/app/shared/models/card-item.model';
import { SortCountOfViewService } from 'src/app/youtube/services/sort-count-of-view/sort-count-of-view.service';
import { SortDateService } from 'src/app/youtube/services/sort-data/sort-data.service';
import { SortByWordService } from 'src/app/youtube/services/sort-word/sort-by-word.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent implements OnInit {
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

  ngOnInit(): void {
    this.items$ = this.store.select(selectFavoriteCards);
  }
}
