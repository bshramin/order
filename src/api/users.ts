import axios from 'axios'
import { USERS_COLLECTION_URL } from './consts'
var md5 = require('md5')

const getAllUsers = () => {
  axios.get(USERS_COLLECTION_URL).then((res) => {
    const users = res.data
  })
}

const addNewUser = async (email: string, name: string, password: string) => {
  const email_exists = await getUserByEmail(email)
  if (email_exists) {
    return null
  }

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

const getUserByEmail = async (email: string) => {
  const { status, data } = await axios.get(
    USERS_COLLECTION_URL + `?q=email:${email}`
  )
  if (status === 200 && data.length >= 1) {
    return data[0]
  } else {
    return null
  }
}

const getUserByEmailAndPassword = async (email: string, password: string) => {
  const { status, data } = await axios.get(
    USERS_COLLECTION_URL + `?q=email:${email},password:${md5(password)}`
  )
  if (status === 200 && data.length >= 1) {
    return data[0]
  } else {
    return null
  }
}

export default {
  getAllUsers,
  addNewUser,
  getUserByEmail,
  getUserByEmailAndPassword,
}
