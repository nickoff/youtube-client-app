import { createReducer, on } from "@ngrx/store";
import { FavoriteCardStateModel, FavoriteCardState } from "./favorite-card.model";
import * as FavoriteCardActions from "./favorite-card.action";

export const favoriteCardReducer = createReducer<FavoriteCardStateModel>(
  FavoriteCardState,
  on(
    FavoriteCardActions.addFavoriteCard,
    (state, { favoriteCard }): FavoriteCardStateModel => [
      ...state,
      favoriteCard
    ]
  ),
  on(
    FavoriteCardActions.deleteFavoriteCard,
    (state, { id }): FavoriteCardStateModel => state.filter(item => item.id !== id)
  )
);
