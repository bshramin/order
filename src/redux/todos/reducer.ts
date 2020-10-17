import { ADD_TODO, TOGGLE_TODO } from "./constants";

type todosStateInterface = {
  [key: string]: any
}

const initialState : todosStateInterface = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action: any) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } : {id: number, content: string } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } : { id: number } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: { ...state.byIds[id], completed: !state.byIds[id].completed }
        }
      };
    }
    default:
      return state;
  }
}