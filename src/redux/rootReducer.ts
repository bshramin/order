import { combineReducers } from "redux";
import todosReducer from "./todos/reducer"
import visibilityFilterReducer from "./visibilityFilter/reducer";
import userReducer from "./user/reducer";
import { ITodosStore } from './todos/IStore';
import { IVisibilityFilterStore } from "./visibilityFilter/IStore";
import { IUserStore } from "./user/IStore";


export interface IRootState {
  todos: ITodosStore;
  visibilityFilter: IVisibilityFilterStore;
  user: IUserStore;
}

export const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
  user: userReducer,
});
