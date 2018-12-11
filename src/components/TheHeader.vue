<template lang="pug">
nav.navbar(:class="{'is-dark': darkVariant, 'is-fixed-top': isFixed}")
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
          .buttons
            router-link(class="button is-danger" :to="{name: 'registration'}") Register
            router-link(class="button is-dark" :to="{name: 'login'}") Login
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'dark'
    },
    isFixed: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    darkVariant() {
      return this.variant === 'dark'
    }
  },

  data() {
    return {
      pages: [{ name: 'home', title: 'Home' }, { name: 'about', title: 'About' }]
    }
  }
}
</script>


<style lang="sass" scoped>
.navbar
  padding: 10px 0
.navbar-start
  margin-left: 20px
</style>
