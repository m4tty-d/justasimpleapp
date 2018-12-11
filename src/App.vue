<template lang="pug">
  #app
    template(v-if="isHome")
      router-view
    template(v-else)
      the-header
      .container.fixed-navbar-margin
        router-view
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
</style>
