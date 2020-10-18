import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../redux/user/actions'
import './style.scss'

interface IPageProps {
  logout: () => void
}

interface IPageState {}

class Page extends React.Component<IPageProps, IPageState> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  render() {
    return <div className='page'>Page</div>
  }
}

export default connect(null, { logout })(Page)
