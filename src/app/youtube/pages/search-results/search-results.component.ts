import {
  Component,
  OnInit
} from '@angular/core';
import { SortDateService } from 'src/app/youtube/services/sort-data/sort-data.service';
import { SortByWordService } from 'src/app/youtube/services/sort-word/sort-by-word.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectVideosInfo } from 'src/app/redux/youtube/youtube.selector';
import { CardItem } from '../../models';
import { SortCountOfViewService } from '../../services/sort-count-of-view/sort-count-of-view.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  items$?: Observable<CardItem[]>;
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
    this.items$ = this.store.select(selectVideosInfo);
  }
}
