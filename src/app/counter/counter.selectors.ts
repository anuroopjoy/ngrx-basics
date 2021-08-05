import { createSelector } from '@ngrx/store';
import { AppState } from '../app.interfaces';

export const selectCounter = (state: AppState) => state.counter;

export const selectCount = createSelector(
  selectCounter,
  (counterState) => counterState.count
);
