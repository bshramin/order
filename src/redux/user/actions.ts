import { LOGOUT, LOGIN } from './constants'

export const logout = () => ({ type: LOGOUT })
export const login = (email: string, name: string, _id: string) => ({
  type: LOGIN,
  payload: { email, name, _id },
})
