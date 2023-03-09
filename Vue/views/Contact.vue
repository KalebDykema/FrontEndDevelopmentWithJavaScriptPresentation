<script>
import Newsletter from '../components/Newsletter.vue'

export default {
  name: 'About',
  components: {
    Newsletter,
  },
}
</script>

<template>
  <div :class="$style.contact" class="container">
    <main>
      <h3>Contact Me</h3>
      <a href="tel:+16158675309">(615) 867-5309</a>
      <a href="mailto:gordonfreeman@valve.com">gordonfreeman@valve.com</a>
    </main>

    <Newsletter />
  </div>
</template>

<style lang="scss" module>
.contact {
  :global(main a) {
    display: block;
    margin-bottom: 1rem;
  }
}
</style>
