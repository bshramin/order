import { combineReducers } from "redux";
import todosReducer from "./todos/reducer"
import visibilityFilterReducer from "./visibilityFilter/reducer";
import { ITodosStore } from './todos/storeInterface';
import { IVisibilityFilterStore } from "./visibilityFilter/storeInterface";



export interface IRootState {
  todos: ITodosStore;
  visibilityFilter: IVisibilityFilterStore;
}

export const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
});
