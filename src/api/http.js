import axios from 'axios'
// 创建axios实例
const service = axios.create({
    withCredentials: true,
    baseURL: '/api',
    timeout: 15000 // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(config => {
    config.headers['Accept'] = 'application/json'
    // config.headers.common['apikey'] = '0df993c66c0c636e29ecbb5344252a4a';

    if (config.method === 'get') {
      config.params = {
        "apikey": '0df993c66c0c636e29ecbb5344252a4a',
        ...config.params
      }
    }

    // config.data = Object.assign({}, config.data, {
    //   // authToken: window.localStorage.getItem('authToken')
    //   authToken: 'tokenplaceholder_xxxxxxxx'
    // });

    return config
}, error => {
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
    response => {
      if (response.status === 200) {
        // console.log(response.data)
        return response.data
      } else {
        this.$dialog.alert({
          title: '响应数据报错',
          message: response.statusText
        })
        return Promise.reject(response)
      }
    },
    error => {
      if (error.response) {
        const res = error.response.data

        return Promise.reject(res)
      } else {
        return Promise.reject(error)
      }
    }
)

export default service
