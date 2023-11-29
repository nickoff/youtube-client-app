import { TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { searchReducer } from './search.reducer';
import * as SearchActions from './search.action';
import { selectSearchQueryValue } from './search.selector';

describe('Your Component', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ searchReducer }),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should update the state with when search action is dispatched', () => {
    const searchQuery = 'test';
    const action = SearchActions.search({ searchQuery });
    store.dispatch(action);
    store.select(selectSearchQueryValue).subscribe((state) => {
      expect(state).toEqual(searchQuery);
    });
  });
});
