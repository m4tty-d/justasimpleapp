<template lang="pug">
nav.navbar(:class="{'is-fixed-top': isFixed}")
  .container
    .navbar-brand
      .navbar-item
        router-link(class="is-size-4 is-family-monospace has-text-weight-bold cursor-pointer" :to="{name: 'home'}" tag="div") JUSTASIMPLEAPP
      span.navbar-burger.burger(data-target='navbarMenuHeroA')
        span
        span
        span
    #navbarMenuHeroA.navbar-menu
      //- .navbar-start
      //-   router-link(v-for="page in pages"
      //-               :key="page.name"
      //-               class="navbar-item"
      //-               :class="{'is-active': $route.name === page.name}"
      //-               :to="{name: page.name}") {{ page.title }}
      .navbar-end
        .navbar-item
          .buttons(v-if="isLoggedIn")
            router-link(class="button is-outlined" :to="{name: 'profile'}") my profile
            .button.is-outlined.is-danger(@click="logout") logout
          .buttons(v-else)
            router-link(class="button is-danger" :to="{name: 'registration'}") I WANT an account
            router-link(class="button is-dark" :to="{name: 'login'}") Already have one, just let me in
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  props: {
    isFixed: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    ...mapGetters(['isLoggedIn'])
  },

  data() {
    return {
      pages: [{ name: 'home', title: 'Home' }, { name: 'about', title: 'About' }]
    }
  },

  methods: {
    ...mapMutations(['logout'])
  }
}
</script>


<style lang="sass" scoped>
.navbar
  padding: 10px 0
.navbar-start
  margin-left: 20px
</style>
