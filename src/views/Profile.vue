<template lang="pug">
div
  .title my profile

  .columns
    .column.is-half
      form(@submit.prevent="save")
        my-input(label="Firstname"
                 v-model="data.firstName")
        my-input(label="Lastname"
                v-model="data.lastName")
        my-input(label="Username" :value="username" disabled)
        my-input(label="E-mail" type="email" :value="email" disabled)
        my-input(label="Something about you"
                type="textarea"
                v-model="data.about")
        
        .control.m-1
          button.button.is-primary(type="submit") Save
</template>

<script>
import api from '@/services/api'

export default {
  data() {
    return {
      username: '',
      email: '',
      data: {
        firstName: '',
        lastName: '',
        about: ''
      }
    }
  },

  methods: {
    async save() {
      try {
        await api.post('/myProfile', {
          data: this.data
        })

        this.$notify({
          type: 'sucess',
          text: 'Success!'
        })
      } catch ({ response: { data } }) {
        this.$notify({
          type: 'error',
          text: data.error
        })
      }
    }
  },

  async created() {
    try {
      const {
        data: { data }
      } = await api.get('/myProfile', {
        token: this.$store.state.token
      })

      this.username = data.username
      this.email = data.email
      this.data.firstName = data.data.firstName
      this.data.lastName = data.data.lastName
      this.data.about = data.data.about
    } catch (e) {
      console.log(e)
    }
  }
}
</script>
