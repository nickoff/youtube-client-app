import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CustomCardStateModel } from "./custom-card-state.model";

const selectCustomCardStore = createFeatureSelector<CustomCardStateModel[]>('customCards');

export const selectCustomCards = createSelector(
  selectCustomCardStore,
  (state) => state
);
