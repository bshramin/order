import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from "./reducers";
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'todos',
  storage: storage,
};

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer);
const persistor = persistStore(store);

export { persistor, store };
