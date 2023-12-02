import {
  ChangeDetectorRef, Component, DestroyRef, OnInit
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { Subject, debounceTime, filter } from 'rxjs';
import { NavigateService } from 'src/app/core/services/navigate/navigate.service';
import { selectSearchQueryValue } from 'src/app/store/search';
import { search } from 'src/app/store/search/search.action';
import { YOUTUBE_ACTIONS } from 'src/app/store/youtube';

const minQueryLength = 3;

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  private searchSubject = new Subject<string>();
  inputValue = '';

  constructor(
    private store: Store,
    private navigateService: NavigateService,
    private destroyRef: DestroyRef,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.dispatchSearch();
    this.dispatchYoutubeSearch();
  }

  emitInputValue(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchSubject.next(target.value.toLowerCase().trim());
    this.navigateService.navigateToListPage();
  }

  private dispatchSearch(): void {
    this.searchSubject.pipe(
      filter(query => query.length >= minQueryLength),
      debounceTime(500),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(searchQuery => {
      this.store.dispatch(search({ searchQuery }));
      this.cdr.markForCheck();
    });
  }

  private dispatchYoutubeSearch(): void {
    this.store.select(selectSearchQueryValue).pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(state => {
      if (state) {
        this.store.dispatch(YOUTUBE_ACTIONS.loadYouTubeVideos());
      }
      this.cdr.markForCheck();
    });
  }
}
