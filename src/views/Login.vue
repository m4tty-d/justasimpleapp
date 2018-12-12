<template lang="pug">
div
  .title log in

  .columns
    .column.is-half
      form(@submit.prevent="login")
        my-input(label="Username"
                icon="user"
                v-model="username"
                :validation="$v.username"
                :showValidationMessage="false")
        my-input(label="Password"
                type="password"
                icon="lock"
                v-model="password"
                :validation="$v.password"
                :showValidationMessage="false")
        
        .control.m-1
          button.button.is-primary(type="submit") Login
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import api from '@/services/api'

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },

  validations: {
    username: {
      required
    },
    password: {
      required
    }
  },

  methods: {
    async login() {
      this.$v.$touch()

      if (!this.$v.$error) {
        try {
          const { data } = await api.post('/login', {
            username: this.username,
            password: this.password
          })

          this.$store.commit('login', data)

          this.$notify({
            type: 'success',
            text: 'Successful login!'
          })
        } catch ({ response: { data } }) {
          this.$notify({
            type: 'error',
            text: data.error
          })
        }
      }
    }
  }
}
</script>
