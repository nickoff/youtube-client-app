import { createReducer, on } from "@ngrx/store";
import { CustomCardStateModel, CustomCardState } from "./custom-card-state.model";
import * as CustomCardActions from "./custom-card.action";

export const customCardReducer = createReducer<CustomCardStateModel[]>(
  CustomCardState,
  on(
    CustomCardActions.addCustomCard,
    (state, { customCard }): CustomCardStateModel[] => [
      ...state,
      { id: new Date().getTime().toString(), customCard }
    ]
  ),
  on(
    CustomCardActions.deleteCustomCard,
    (state, { id }): CustomCardStateModel[] => state.filter(item => item.id !== id)
  )
);
