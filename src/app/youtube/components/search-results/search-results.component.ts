import {
  Component,
  OnInit
} from '@angular/core';
import { SortDateService } from 'src/app/youtube/services/sort-data/sort-data.service';
import { SortByWordService } from 'src/app/youtube/services/sort-word/sort-by-word.service';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { selectVideosInfo } from 'src/app/redux/youtube/youtube.selector';
import { SortCountOfViewService } from '../../services/sort-count-of-view/sort-count-of-view.service';
import { CardItemModel } from '../../../shared/models/card-item.model';
import { CardItem } from '../../models';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
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

  private transformDate = (item: CardItem): CardItemModel => ({
    id: item.id,
    image: item.snippet.thumbnails.high.url,
    imageHigh: item.snippet.thumbnails.maxres?.url,
    title: item.snippet.title,
    publishedAt: item.snippet.publishedAt,
    description: item.snippet.description,
    isCustomCard: false,
    isActions: true,
    statistics: item.statistics
  });
  ngOnInit(): void {
    this.items$ = this.store.select(selectVideosInfo).pipe(
      map(items => items.map(this.transformDate))
    );
  }
}
