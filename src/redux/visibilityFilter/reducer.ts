import { SET_FILTER } from "./constants";
import { VISIBILITY_FILTERS } from "./constants";

const initialState = VISIBILITY_FILTERS.ALL;

const visibilityFilterReducer = (state = initialState, action : any) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilterReducer;
