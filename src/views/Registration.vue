<template lang="pug">
div
  .title there you go, create it

  .columns
    .column.is-half
      form(@submit.prevent="register")
        my-input(label="Firstname"
                 v-model="data.firstName")
        my-input(label="Lastname"
                v-model="data.lastName")
        my-input(label="Username"
                v-model="username"
                :validation="$v.username")
        my-input(label="E-mail"
                type="email"
                v-model="email"
                :validation="$v.email")
        my-input(label="Password"
                type="password"
                v-model="password"
                :validation="$v.password")
        my-input(label="Something about you"
                type="textarea"
                v-model="data.about"
                :validation="$v.about")
        
        .control.m-1
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
      password: '',
      data: {
        firstName: '',
        lastName: '',
        about: ''
      }
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
            data: this.data
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
