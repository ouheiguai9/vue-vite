import { defineStore } from 'pinia'
const id = 'system'

export default defineStore(id, {
  state() {
    return {
      showConsult: true,
    }
  },
  actions: {
    dontShowConsult() {
      this.showConsult = false
    },
  },
})
