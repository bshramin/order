import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import { IUserStore } from "./user/IStore";


export interface IRootState {
  user: IUserStore;
}

export const rootReducer = combineReducers({
  user: userReducer,
});
