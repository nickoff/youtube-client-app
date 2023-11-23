import { createReducer, on } from "@ngrx/store";
import { InitialSearchState, SearchStateModel } from "./search-state.model";
import * as SearchActions from "./search.action";

export const searchReducer = createReducer<SearchStateModel>(
  InitialSearchState,
  on(SearchActions.search, (_state, { searchQuery }): SearchStateModel => searchQuery)
);
