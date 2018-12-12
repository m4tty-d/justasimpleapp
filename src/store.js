import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    profileId: ''
  },
  getters: {
    isLoggedIn: state => state.token && state.profileId
  },
  mutations: {
    login(state, payload) {
      state.token = payload.token
      state.profileId = payload.profileId

      localStorage.setItem('x-jasa-token', state.token)
      localStorage.setItem('jasa-profile-id', state.profileId)

      router.push({ name: 'profile' })
    },

    logout(state) {
      state.token = ''
      state.profileId = ''

      localStorage.removeItem('x-jasa-token')
      localStorage.removeItem('jasa-profile-id')

      router.push({ name: 'home' })
    },

    autoLogin(state) {
      state.token = localStorage.getItem('x-jasa-token')
      state.profileId = localStorage.getItem('jasa-profile-id')
    }
  },
  actions: {}
})
