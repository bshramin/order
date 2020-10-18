import axios from 'axios'
import { USERS_COLLECTION_URL } from './consts'
var md5 = require('md5')

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
  const res = await axios.post(USERS_COLLECTION_URL, {
    email,
    name,
    password: md5(password),
  })
  if (res.status === 200) {
    return res.data
  } else {
    return null
  }
}

export const getUserByEmailAndPassword = async (
  email: string,
  password: string
) => {
  const res = await axios.get(
    USERS_COLLECTION_URL + `?email=${email}&password=${md5(password)}`
  )
  if (res.status === 200) {
    return res.data
  } else {
    return null
  }
}
