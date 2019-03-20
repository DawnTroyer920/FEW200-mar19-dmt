import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromList from './list';
import { ToDoItem } from '../models';

const featureName = 'todosFeature';

export interface State {
  list: fromList.State;


}

export const reducers = {
  list: fromList.reducer

};

// Selectors
// 1. Create a feature selecotr
const selectFeature = createFeatureSelector<State>(featureName);

// 2. Selector for each branch
const selectList = createSelector(selectFeature, f => f.list);

// 3. Helpers
const { selectAll: selectTodoEntities } = fromList.adapter.getSelectors(selectList);



// 4. The Selectors for the components

// TodoItem[]
export const selectTodoItems = createSelector(selectTodoEntities, e => e as ToDoItem[]);


