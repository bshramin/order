import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../../redux/user/actions'
import api from '../../../api'
import { IUserStore } from '../../../redux/user/IStore'

interface IRecipeProps {
  login: (email: string, password: string, id: string) => void
  history: any
}

interface IRecipeState {
  formError: string
  email: string
  name: string
  password: string
}

class Signup extends React.Component<IRecipeProps, IRecipeState> {
  constructor(props: any) {
    super(props)
    this.state = { formError: null, email: '', name: '', password: '' }
  }

  handleSignup = async () => {
    const { email, name, password } = this.state
    const new_user: IUserStore = await api.users.addNewUser(
      email,
      name,
      password
    )
    if (new_user) {
      const { email, name, _id } = new_user
      this.props.login(email, name, _id)
      this.props.history.replace('/dashboard')
    }
  }

  render() {
    return (
      <div className='auth-component signup'>
        <div className='title'>Signup</div>
        <input
          placeholder='Email'
          onChange={(e) => this.setState({ email: e.target.value })}
          value={this.state.email}
        />
        <input
          placeholder='Name'
          onChange={(e) => this.setState({ name: e.target.value })}
          value={this.state.name}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={(e) => this.setState({ password: e.target.value })}
          value={this.state.password}
        />
        <button className='signup-submit' onClick={this.handleSignup}>
          Signup
        </button>
      </div>
    )
  }
}

export default connect(null, { login })(Signup)
