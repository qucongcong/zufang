import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: '/myq',
  timeout: 5000,// 请求超时时间
  headers: {
    'content-type': "application/json;charset=utf-8"
  }
})
service.defaults.withCredentials = true
// request拦截器
service.interceptors.request.use(
  config => {
    config.headers['X-Token'] = getToken()

    return config
  },
  error => {

    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {

    return response
  },
  error => {

    return Promise.reject(error)
  }
)

export default service
