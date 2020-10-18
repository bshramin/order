import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../redux/user/actions'
import './style.scss'

interface IDashboardProps {
  logout: () => void
}

interface IDashboardState {
  tab: 1 | 2 | 3 | 4 | 5
}

class Dashboard extends React.Component<IDashboardProps, IDashboardState> {
  constructor(props: any) {
    super(props)
    this.state = {
      tab: 1,
    }
  }

  render() {
    const { tab } = this.state
    return (
      <div className='dashboard'>
        <div className='header'>
          <button
            className={`btn ${tab === 1 ? 'selected' : ''}`}
            onClick={() => {}}
          >
            Pages I have access to
          </button>
          <button
            className={`btn ${tab === 2 ? 'selected' : ''}`}
            onClick={() => {}}
          >
            My Own page
          </button>
          <button
            className={`btn ${tab === 3 ? 'selected' : ''}`}
            onClick={() => {}}
          >
            Add page
          </button>
          <button
            className={`btn logout-btn ${tab === 4 ? 'selected' : ''}`}
            onClick={this.props.logout}
          >
            Logout
          </button>
        </div>
      </div>
    )
  }
}

export default connect(null, { logout })(Dashboard)
