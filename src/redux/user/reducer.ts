import { LOGIN, LOGOUT } from './constants'
import { IUserStore } from './IStore'

const initialState: IUserStore = {
  email: null,
  name: null,
  _id: null,
}

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN: {
      const { email, name, _id } = action.payload
      return { email, name, _id }
    }
    case LOGOUT: {
      return { email: null, name: null, _id: null }
    }
    default: {
      return state
    }
  }
}

export default userReducer
