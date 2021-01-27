import axios from 'axios'

export function request (config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  // 2.axios的拦截器
  // 请求拦截
  instance.interceptors.request.use(config => {
    // config中一些信息不符合服务器的要求
    // 每次发送网络请求时，在界面中显示一个请求的图标
    // 某些网络请求例如token，必须携带一些特殊的信息
    return config
  }, err => {
    console.log(err)
  })
  // 2.2响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  // 发送真正的网络请求

  return instance(config)
}
