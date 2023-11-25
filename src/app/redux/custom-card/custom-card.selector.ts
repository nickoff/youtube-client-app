import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CustomCardStateModel } from "./custom-card-state.model";

const selectCustomCardStore = createFeatureSelector<CustomCardStateModel[]>('customCards');

export const selectCustomCards = createSelector(
  selectCustomCardStore,
  (state) => state.map(item => ({ ...item }))
);

export const selectIsLoadingCustomCardList = createSelector(
  selectCustomCards,
  (data) => {
    if (data && data.length > 0) return true;
    return false;
  }
);
