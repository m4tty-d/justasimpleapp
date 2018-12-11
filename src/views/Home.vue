<template lang="pug">
section.hero.is-light.is-fullheight
  .hero-head
    nav.navbar
      .container
        .navbar-brand
          .navbar-item
            .title JUSTASIMPLEAPP
          span.navbar-burger.burger(data-target='navbarMenuHeroA')
            span
            span
            span
        #navbarMenuHeroA.navbar-menu
          .navbar-start
            a.navbar-item.is-active Home
            a.navbar-item About
          .navbar-end
            .navbar-item
              .buttons
                a.button.is-primary Register
                a.button.is-dark Login
  .hero-body
    .container.has-text-centered
      h1.title.is-1.is-spaced This app doesn't do anything fancy
      h2.subtitle.is-3 but hey, it's in VueJS 🖐 😁
  .hero-foot
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="sass" scoped>
.navbar
  padding: 10px 0
.navbar-start
  margin-left: 20px
</style>
