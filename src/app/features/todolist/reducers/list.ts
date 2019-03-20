import { Action } from '@ngrx/store';
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

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
