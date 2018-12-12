import axios from 'axios'
const apiUrl = process.env.VUE_APP_API_URL

export default axios.create({
  baseURL: apiUrl
})
