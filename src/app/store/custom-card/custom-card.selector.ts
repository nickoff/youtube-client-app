import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CustomCardStateModel } from "./custom-card.state";

const selectCustomCardStore = createFeatureSelector<CustomCardStateModel[]>('customCards');

export const selectCustomCards = createSelector(
  selectCustomCardStore,
  (state) => state.map(item => ({ ...item }))
);

export const selectIsLoadingCustomCardList = createSelector(
  selectCustomCards,
  (data) => data?.length > 0
);
