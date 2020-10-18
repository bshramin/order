import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../../redux/user/actions'
import api from '../../../api'
import { IUserStore } from '../../../redux/user/IStore'

interface IRecipeProps {
  login: (email: string, password: string, _id: string) => void
  history: any
}

interface IRecipeState {
  email: string
  name: string
  password: string
}

class Login extends React.Component<IRecipeProps, IRecipeState> {
  constructor(props: any) {
    super(props)
    this.state = { email: '', name: '', password: '' }
  }

  handleSignup = async () => {
    const { email, password } = this.state
    const user: IUserStore = await api.users.getUserByEmailAndPassword(
      email,
      password
    )
    if (user) {
      const { email, name, _id } = user
      this.props.login(email, name, _id)
      this.props.history.replace('/dashboard')
    }
  }

  render() {
    return (
      <div className='auth-component login'>
        <div className='title'>Login</div>
        <input
          placeholder='Email'
          onChange={(e) => this.setState({ email: e.target.value })}
          value={this.state.email}
        />
        <input
          placeholder='Password'
          type='password'
          onChange={(e) => this.setState({ password: e.target.value })}
          value={this.state.password}
        />
        <button className='signup-submit' onClick={this.handleSignup}>
          Login
        </button>
      </div>
    )
  }
}

export default connect(null, { login })(Login)
