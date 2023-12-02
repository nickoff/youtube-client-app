import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FavoriteCardStateModel } from "./favorite-card.state";

const selectFavoriteCardStore = createFeatureSelector<FavoriteCardStateModel>('favoriteCards');

export const selectFavoriteCards = createSelector(
  selectFavoriteCardStore,
  (state) => state.map(item => ({ ...item }))
);
