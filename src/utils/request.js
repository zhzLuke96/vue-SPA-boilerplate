import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: process.env.APP_BASE_API,
  withCredentials: true,
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    // eg:
    // config.headers['X-Token'] = ''// getToken()
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
    response => {
        const data = response.data
        // Do something for auth manage
        return data
    },
    error => {
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

export default service