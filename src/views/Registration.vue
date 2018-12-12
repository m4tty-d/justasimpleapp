<template lang="pug">
div
  .title there you go, create it

  .columns
    .column.is-half
      form(@submit.prevent="register")
        my-input(label="Username"
                icon="user"
                v-model="username"
                :validation="$v.username")
        my-input(label="E-mail"
                type="email"
                icon="envelope"
                v-model="email"
                :validation="$v.email")
        my-input(label="Password"
                type="password"
                icon="lock"
                v-model="password"
                :validation="$v.password")
        
        .control.account-create-btn
          button.button.is-primary(type="submit") Create my account
</template>

<script>
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
import api from '@/services/api'

export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },

  validations: {
    username: {
      required
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(40)
    }
  },

  methods: {
    async register() {
      this.$v.$touch()

      if (!this.$v.$error) {
        try {
          const { data } = await api.post('/register', {
            username: this.username,
            email: this.email,
            password: this.password,
            data: {}
          })

          this.$store.commit('login', data)

          this.$notify({
            type: 'sucess',
            text: 'Successfull registration!'
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

<style lang="sass" scoped>
  .account-create-btn
    margin-top: 1.5rem
</style>
