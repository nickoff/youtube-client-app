import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, debounceTime, filter } from 'rxjs';
import { NavigateService } from 'src/app/core/services/navigate/navigate.service';
import { search } from 'src/app/redux/search/search.action';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  private searchSubject = new Subject<string>();
  inputValue = '';

  constructor(
    private store: Store,
    private navigateService: NavigateService
  ) {
    this.searchSubject.pipe(
      filter(query => query.length >= 3),
      debounceTime(500)
    ).subscribe(searchQuery => {
      this.store.dispatch(search({ searchQuery }));
    });
  }

  emitInputValue(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchSubject.next(target.value.toLowerCase().trim());
    this.navigateService.navigateToListPage();
  }
}
