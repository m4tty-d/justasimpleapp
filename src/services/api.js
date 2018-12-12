import axios from 'axios'
import store from '@/store'
const apiUrl = process.env.VUE_APP_API_URL

const apiInstance = axios.create({
  baseURL: apiUrl
})

apiInstance.interceptors.request.use(
  function(config) {
    const token = store.state.token

    if (token != null) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  function(err) {
    return Promise.reject(err)
  }
)

apiInstance.interceptors.response.use(null, function(err) {
  if (err.status === 401) {
    store.commit('logout')
  }

  return Promise.reject(err)
})

export default apiInstance
