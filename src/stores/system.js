import { defineStore } from 'pinia'
import { apiLogout, apiLogin, apiGetMyInfo, headerTokenKey } from '@/api.js'
const id = 'system'
const tokenKey = 'security_auth_token'
export default defineStore(id, {
  state() {
    const token = localStorage.getItem(tokenKey)
    return {
      token,
      user: null,
    }
  },
  getters: {
    isAuthenticated() {
      return this.user !== null
    },
    isApproved() {
      return this.user && this.user.state !== 'CREATED'
    },
  },
  actions: {
    async loadMyInfo() {
      if (!this.token) return null
      try {
        const { data } = await apiGetMyInfo()
        this.user = data
        return data
      } catch (error) {
        return null
      }
    },
    login(phone, captcha) {
      return apiLogin(phone, captcha).then((response) => {
        this.token = response.headers[headerTokenKey.toLowerCase()]
        localStorage.setItem(tokenKey, this.token)
        return response
      })
    },
    logout() {
      return apiLogout().then((res) => {
        this.token = null
        this.user = null
        localStorage.removeItem(tokenKey)
        return res
      })
    },
  },
})
