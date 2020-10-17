import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import { rootReducer } from "./rootReducer";
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'todos',
  storage: storage,
};

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());
const persistor = persistStore(store);

export { persistor, store };