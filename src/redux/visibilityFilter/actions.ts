import { SET_FILTER} from "./constants";


export const setFilter = (filter: string) => ({ type: SET_FILTER, payload: { filter } });
