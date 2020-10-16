import React from 'react';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import TodoApp from "./Pages/TodoApp";
import './App.css';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoApp />
      </Provider>
    </div>
  );
}

export default App;
