import { createAction, props } from '@ngrx/store';
import { SEARCH_TYPES } from './search.types';

export const search = createAction(
  SEARCH_TYPES.SEARCH,
  props<{ searchQuery: string }>()
);
