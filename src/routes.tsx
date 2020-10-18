import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { IRootState } from './redux/rootReducer'
import Auth from './Pages/Auth'
import Dashboard from './Pages/Dashboard'

function Routes({ loggedIn, history }: { loggedIn: boolean; history: any }) {
  if (!loggedIn && history.location.pathname !== '/auth') {
    history.replace('/auth')
  }
  return (
    <Switch>
      <Route path='/auth' component={Auth} />
      <Route path='/dashboard' component={Dashboard} />
      <Route component={() => <Redirect to='/dashboard' />} />
    </Switch>
  )
}

const mapStateToProps = (state: IRootState) => ({
  loggedIn: !!state.user._id,
})

export default connect(mapStateToProps, null)(Routes)
