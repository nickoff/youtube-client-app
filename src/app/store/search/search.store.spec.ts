import { TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { SEARCH_ACTIONS, selectSearchQueryValue } from './index';
import { searchReducer } from './search.reducer';


describe('Search Store', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ searchQuery: searchReducer }),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should update the state with when search action is dispatched', () => {
    const testSearchQuery = 'test';
    const action = SEARCH_ACTIONS.search({ searchQuery: testSearchQuery });
    store.dispatch(action);
    store.select(selectSearchQueryValue).subscribe((state) => {
      expect(state).toEqual(testSearchQuery);
    });
  });
});
