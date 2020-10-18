import axios from 'axios'
import { PAGES_COLLECTION_URL } from './consts'

const getUserPages = async (user_id: string) => {
  const { status, data } = await axios.get(
    PAGES_COLLECTION_URL + `?q=owner:${user_id}`
  )
  if (status === 200 && data.length >= 1) {
    return data
  } else {
    return null
  }
}

const addNewPage = async () => {}

export default {
  getUserPages,
  addNewPage,
}
