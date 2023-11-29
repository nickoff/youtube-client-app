import * as SearchActions from './search.action';
import { searchReducer } from './search.reducer';
import { InitialSearchState } from './search-state.model';

describe('searchReducer', () => {
  it('should update the state', () => {
    const searchQuery = 'test';
    const action = SearchActions.search({ searchQuery });
    const state = searchReducer(InitialSearchState, action);

    expect(state).toEqual(searchQuery);
  });
});
