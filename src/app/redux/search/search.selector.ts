import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SearchStateModel } from "./search-state.model";

const selectSearchStore = createFeatureSelector<SearchStateModel>('searchQuery');

export const selectSearchQueryValue = createSelector(
  selectSearchStore,
  (state) => state
);
