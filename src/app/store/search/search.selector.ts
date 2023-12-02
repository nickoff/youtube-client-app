import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SearchStateModel } from "./search.state";

const selectSearchStore = createFeatureSelector<SearchStateModel>('searchQuery');

export const selectSearchQueryValue = createSelector(
  selectSearchStore,
  (state) => state
);
