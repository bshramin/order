import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../redux/user/actions'
import './style.scss'

interface IDashboardProps {
  logout: () => void
}

interface IDashboardState {
  tab: 1 | 2 | 3
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
    const tabsComponent = {
      1: <div>hel1</div>,
      2: <div>hel2</div>,
      3: <div>hel3</div>,
    }
    return (
      <div className='dashboard'>
        <div className='header'>
          <button
            className={`btn ${tab === 1 ? 'selected' : ''}`}
            onClick={() => {
              this.setState({ tab: 1 })
            }}
          >
            Pages I have access to
          </button>
          <button
            className={`btn ${tab === 2 ? 'selected' : ''}`}
            onClick={() => {
              this.setState({ tab: 2 })
            }}
          >
            My Own page
          </button>
          <button
            className={`btn ${tab === 3 ? 'selected' : ''}`}
            onClick={() => {
              this.setState({ tab: 3 })
            }}
          >
            Add page
          </button>
          <button className={`btn logout-btn`} onClick={this.props.logout}>
            Logout
          </button>
        </div>

        <div className='dashboard-content'>{tabsComponent[this.state.tab]}</div>
      </div>
    )
  }
}

export default connect(null, { logout })(Dashboard)
