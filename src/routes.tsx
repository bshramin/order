import React from 'react'
import { connect } from 'react-redux'
import * as Router from 'react-router'
import { Switch, Route, Redirect } from 'react-router-dom'
import { IRootState } from './redux/rootReducer'
import Auth from './Pages/Auth'
import Dashboard from './Pages/Dashboard'

interface IProps extends Router.RouteProps {
  history: any
  loggedIn: boolean
}

interface IState {}

class Routes extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {}
  }

  public componentDidUpdate(nextProps: IProps): void {
    const { loggedIn, history } = this.props
    if (!loggedIn && history.location.pathname !== '/auth') {
      history.replace('/auth')
    }
    if (loggedIn && history.location.pathname !== '/dashboard') {
      history.replace('/dashboard')
    }
  }

  public render(): JSX.Element {
    return (
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route path='/dashboard' component={Dashboard} />
        <Route component={() => <Redirect to='/dashboard' />} />
      </Switch>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  loggedIn: !!state.user._id,
})

export default connect(mapStateToProps, null)(Routes)
