<template lang="pug">
section.hero.is-white.is-fullheight
  .hero-head
    the-header(:isFixed="false")
  .hero-body
    .container.has-text-centered
      h1.title.is-1.is-spaced I know... <br> this app doesn't do anything fancy
      h2.subtitle.is-3 but hey, at least it's in VueJS 🖐 😁
  .hero-foot
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
export default {
  name: 'home',
  components: {
    TheHeader
  }
}
</script>
