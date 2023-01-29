import axios from 'axios'
const HEADER_TOKEN_KEY = 'X-Auth-Token'
const TENANT_ID = '10000'

const instance = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL })

export const headerTokenKey = HEADER_TOKEN_KEY

export const isHttpError = axios.isAxiosError

export const isNetworkError = function (error) {
  return axios.isAxiosError(error) && error.code === 'ERR_NETWORK'
}

export const bindTokenGetter = (getter) => {
  if (getter && typeof getter === 'function') {
    instance.interceptors.request.use((conf) => {
      if (!conf.headers[HEADER_TOKEN_KEY]) {
        conf.headers[HEADER_TOKEN_KEY] = getter()
      }
      return conf
    })
  }
}

export const apiSendCaptcha = (to = '') => {
  const params = new URLSearchParams()
  params.append('sender', 'SubMail')
  params.append('tenantId', TENANT_ID)
  params.append('template', 'LuWdC')
  params.append('addUser', 'true')
  params.append('minutes', '30')
  params.append('to', to)
  params.append('target', 'C' + to)
  return instance.post('/api/sms/login/captcha', params)
}

export const apiLogin = (phone, captcha) => {
  return instance.post('/api/login', null, {
    headers: {
      _auth_type_key_: 'dynamic-captcha',
      tenantId: TENANT_ID,
      targetType: 'phone',
      target: `C${phone}`,
      captcha: captcha,
    },
  })
}

export const apiGetMyInfo = () => instance.get('dfb/customers')

export const apiLogout = () => instance.post('logout')
