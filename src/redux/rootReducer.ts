import { combineReducers } from "redux";
import todosReducer from "./todos/reducer"
import visibilityFilterReducer from "./visibilityFilter/reducer";
import { ITodosStore } from './todos/IStore';
import { IVisibilityFilterStore } from "./visibilityFilter/IStore";



export interface IRootState {
  todos: ITodosStore;
  visibilityFilter: IVisibilityFilterStore;
}

export const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
});
