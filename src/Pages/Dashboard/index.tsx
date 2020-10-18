import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../redux/user/actions'
import './style.scss'

interface IDashboardProps {
  logout: () => void
}

interface IDashboardState {}

class Dashboard extends React.Component<IDashboardProps, IDashboardState> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='dashboard'>
        <button className='logout-btn' onClick={this.props.logout}>
          Logout
        </button>
      </div>
    )
  }
}

export default connect(null, { logout })(Dashboard)
