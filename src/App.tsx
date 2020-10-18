import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Routes from './routes'
import './App.scss'

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Router>
          <Route component={Routes} />
        </Router>
      </Provider>
    </div>
  )
}

export default App
