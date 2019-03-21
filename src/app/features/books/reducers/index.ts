
import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromBook from './book';
import { Book } from '../models';


const featureName = 'bookFeature';

export interface State {
  book: fromBook.State;

}

export const reducers = {
  book: fromBook.reducer

};


// Selectors
// 1. Create a feature selector
const selectFeature = createFeatureSelector<State>(featureName);

// 2. Selector for each branch
const selectBook = createSelector(selectFeature, f => f.book);

// 3. Helpers
const { selectAll: selectBookEntities } = fromBook.adapter.getSelectors(selectBook);

export const selectBooks = createSelector(selectBookEntities, e => e as Book[]);
