import { createReducer, on } from "@ngrx/store";
import { FAVORITE_CARD_ACTIONS, FavoriteCardStateModel, FavoriteCardState } from "./index";

export const favoriteCardReducer = createReducer<FavoriteCardStateModel>(
  FavoriteCardState,
  on(
    FAVORITE_CARD_ACTIONS.addFavoriteCard,
    (state, { favoriteCard }): FavoriteCardStateModel => [
      ...state,
      favoriteCard
    ]
  ),
  on(
    FAVORITE_CARD_ACTIONS.deleteFavoriteCard,
    (state, { id }): FavoriteCardStateModel => state.filter(item => item.id !== id)
  )
);
