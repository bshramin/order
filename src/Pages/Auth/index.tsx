import React, { useState } from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import './style.scss'

export default function Auth() {
  const [isNewUser, setIsNewUser] = useState(true)

  return (
    <div className='auth-page'>
      {isNewUser ? <Signup /> : <Login />}
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
