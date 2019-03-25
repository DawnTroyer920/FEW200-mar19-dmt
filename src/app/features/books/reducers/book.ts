
import * as actions from '../actions/book.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';




export interface BookEntity {
  id: string;
  title: string;
  author: string;
  type: string;
}


export interface State extends EntityState<BookEntity> {
  bookTypes: string[]; // just adding this in so you can see how this would work

}

export const adapter = createEntityAdapter<BookEntity>();

const initialState: State = {
  ids: ['1', '2', '3'],
  entities: {
    1: { id: '1', title: 'Moby Dick', author: 'Herman Melville', type: 'Hard Cover' },
    2: { id: '2', title: 'War and Peace', author: 'Leo Tolstoy', type: 'Paperback' },
    3: { id: '3', title: 'Little Women', author: 'Louisa May Alcott', type: 'Paperback' }
  },
  bookTypes: [
    'Paperback', 'Hard Cover', 'E-Book'
  ]
};

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.BOOK_ADDED: {
      return adapter.addOne(action.payload, state);
    }
    default: {
      return state;
    }
  }
}
