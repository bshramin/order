import React from 'react';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Auth from "./Pages/Auth";
import './App.css';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Auth />
      </Provider>
    </div>
  );
}

export default App;
