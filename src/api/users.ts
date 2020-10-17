import axios from 'axios'
import { USERS_COLLECTION_URL } from './consts'

export const getAllUsers = () => {
  axios.get(USERS_COLLECTION_URL).then((res) => {
    const users = res.data
    console.log(users)
  })
}

export const addNewUser = async (
  email: string,
  name: string,
  password: string
) => {
  const res = await axios.post(USERS_COLLECTION_URL, { email, name, password })
  if (res.status == 200) {
    return res.data
  } else {
    return null
  }
}

export const getUserByEmail = (email: string) => {
  axios.get(USERS_COLLECTION_URL + `?email=${email}`).then((res) => {
    if (res.status == 200) {
      return res.data
    } else {
      return null
    }
  })
}

// export const addNewUser = (email: string, name: string, password: string) => {
//   let users: {
//     [email: string]: { email: string; name: string; password: string }
//   } = getAllUsers()
//   console.log('got users: ', users)
//   if (!users[email]) {
//     users[email] = { email, name, password }
//   }
// }

// export const getUserByEmail = (email: string) => {}
