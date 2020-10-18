import React, { useState } from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import './style.scss'

export default function Auth({ history }: { history: any }) {
  const [isNewUser, setIsNewUser] = useState(true)

  return (
    <div className='auth-page'>
      {isNewUser ? <Signup history={history} /> : <Login history={history} />}
      {isNewUser ? (
        <div className='toggle-newuser' onClick={() => setIsNewUser(false)}>
          Already a user? Login.
        </div>
      ) : (
        <div className='toggle-newuser' onClick={() => setIsNewUser(true)}>
          Don't have an account? Signup.
        </div>
      )}
    </div>
  )
}
