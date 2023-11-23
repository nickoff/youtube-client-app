import { createAction, props } from '@ngrx/store';
import { CustomCard } from './custom-card-state.model';

export const addCustomCard = createAction(
  '[Admin page] add Custom Card',
  props<{ customCard: CustomCard }>()
);

export const deleteCustomCard = createAction(
  '[Custom Card] delete Custom Card',
  props<{ id: string }>()
);
