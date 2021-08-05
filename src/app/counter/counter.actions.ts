import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] increment');
export const decrement = createAction('[Counter Component] decrement');
export const incrementByAmount = createAction(
  '[Counter Component] incrementByAmount',
  props<{ amount: number }>()
);

