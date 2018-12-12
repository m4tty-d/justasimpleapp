<template lang="pug">
  #app
    template(v-if="isHome")
      router-view
    template(v-else)
      the-header
      .container.fixed-navbar-margin
        router-view
    notifications(position="bottom right" :duration="5500")
      template(slot="body" slot-scope="props")
        article.message.my-notification(:class="{'is-danger': props.item.type === 'error', 'is-primary': props.item.type === 'success', 'is-warning': props.item.type === 'warning'}")
          .message-body(v-html="props.item.text")
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'

export default {
  components: {
    TheHeader
  },

  computed: {
    isHome() {
      return this.$route.name === 'home'
    }
  },

  created() {
    this.$store.commit('autoLogin')
  }
}
</script>


<style lang="sass">
  @import '~bulma/bulma'

  .fixed-navbar-margin
    margin-top: 72px
    padding-top: 40px
  
  .cursor-pointer
    cursor: pointer
  
  .my-notification
    margin-right: 1rem
    margin-bottom: 1rem
  
  .m-1
    margin-top: 1.5rem
</style>
