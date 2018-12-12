import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  getters: {
    isLoggedIn: state => state.token
  },
  mutations: {
    login(state, payload) {
      state.token = payload.token

      localStorage.setItem('x-jasa-token', state.token)

      router.push({ name: 'profile' })
    },

    logout(state) {
      state.token = ''

      localStorage.removeItem('x-jasa-token')

      router.push({ name: 'login' })
    },

    autoLogin(state) {
      state.token = localStorage.getItem('x-jasa-token')
    }
  },
  actions: {}
})
