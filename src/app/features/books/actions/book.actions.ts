import { Action } from '@ngrx/store';
import { BookEntity } from '../reducers/book';

const tempID = 999;

export const BOOK_ADDED = '[books] Book Added';

export class AddedBook implements Action {
  readonly type = BOOK_ADDED;
  payload: BookEntity;
  constructor(title: string, author: string, type: string) {

    this.payload = {
      id: 'T' + tempID,
      title,
      author,
      type
    };
  }
}

export type All = AddedBook;
