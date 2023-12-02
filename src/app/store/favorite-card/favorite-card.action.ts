import { createAction, props } from '@ngrx/store';
import { CardItemModel } from 'src/app/shared/models/card-item.model';
import { FAVORITE_CARD_TYPES } from './favorite-card.types';

export const addFavoriteCard = createAction(
  FAVORITE_CARD_TYPES.ADD,
  props<{ favoriteCard: CardItemModel }>()
);

export const deleteFavoriteCard = createAction(
  FAVORITE_CARD_TYPES.DELETE,
  props<{ id: string }>()
);
