import { createReducer, on } from "@ngrx/store";
import { InitialSearchState, SearchStateModel, SEARCH_ACTIONS } from "./index";

export const searchReducer = createReducer<SearchStateModel>(
  InitialSearchState,
  on(SEARCH_ACTIONS.search, (_state, { searchQuery }): SearchStateModel => searchQuery)
);
