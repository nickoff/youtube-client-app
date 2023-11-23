import { createAction, props } from '@ngrx/store';

export const search = createAction(
  '[Search] Input query',
  props<{ searchQuery: string }>()
);
