import { createAction, props } from '@ngrx/store';
import { CustomCard } from './custom-card.state';
import { CUSTOM_CARD_TYPES } from './custom-card.types';

export const addCustomCard = createAction(
  CUSTOM_CARD_TYPES.ADD,
  props<{ customCard: CustomCard }>()
);

export const deleteCustomCard = createAction(
  CUSTOM_CARD_TYPES.DELETE,
  props<{ id: string }>()
);
