// import { Action } from '@ngrx/store';
import * as actions from '../actions/list.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';


export interface ToDoEntity {
  id: string;
  description: string;

}

export interface State extends EntityState<ToDoEntity> {

}

export const adapter = createEntityAdapter<ToDoEntity>();

const initialState: State = {
  ids: ['1', '2', '18'],
  entities: {
    1: { id: '1', description: 'Clean Deck' },
    2: { id: '2', description: 'Get Haircut' },
    18: { id: '18', description: 'Wash Van' }
  }

};

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.ITEM_ADDED: {
      return adapter.addOne(action.payload, state);
    }
    default: {
      return state;
    }
  }
}
