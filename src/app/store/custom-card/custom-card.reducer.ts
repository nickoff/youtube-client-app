import { createReducer, on } from "@ngrx/store";
import { CustomCardStateModel, CustomCardState, CUSTOM_CARD_ACTIONS } from "./index";

export const customCardReducer = createReducer<CustomCardStateModel[]>(
  CustomCardState,
  on(
    CUSTOM_CARD_ACTIONS.addCustomCard,
    (state, { customCard }): CustomCardStateModel[] => [
      ...state,
      { id: new Date().getTime().toString(), customCard }
    ]
  ),
  on(
    CUSTOM_CARD_ACTIONS.deleteCustomCard,
    (state, { id }): CustomCardStateModel[] => state.filter(item => item.id !== id)
  )
);
