
import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromBook from './book';
import { BookItem } from '../models';


const featureName = 'booksFeature';

export interface State {
  books: fromBook.State;

}

export const reducers = {
  books: fromBook.reducer

};


// Selectors
// 1. Create a feature selector
const selectFeature = createFeatureSelector<State>(featureName);

// 2. Selector for each branch
const selectBook = createSelector(selectFeature, f => f.books);

const { selectAll: selectBookEntities } = fromBook.adapter.getSelectors(selectBook);

export const selectBooks = createSelector(selectBookEntities, e => e as BookItem[]);
