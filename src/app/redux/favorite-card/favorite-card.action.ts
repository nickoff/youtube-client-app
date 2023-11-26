import { createAction, props } from '@ngrx/store';
import { CardItemModel } from 'src/app/shared/models/card-item.model';

export const addFavoriteCard = createAction(
  '[Card Item] add to Favorite list',
  props<{ favoriteCard: CardItemModel }>()
);

export const deleteFavoriteCard = createAction(
  '[Card Item] delete from Favorite list',
  props<{ id: string }>()
);
