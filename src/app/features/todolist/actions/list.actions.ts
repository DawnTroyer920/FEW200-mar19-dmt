import { Action } from '@ngrx/store';
import { ToDoEntity } from '../reducers/list';

const tempID = 999;

export const ITEM_ADDED = '[todolist] Item Added';
export class AddedTodoItem implements Action {
  readonly type = ITEM_ADDED;
  payload: ToDoEntity;
  constructor(description: string) {

    this.payload = {
      id: 'T' + tempID,
      description
    };
  }
}

export type All = AddedTodoItem;
