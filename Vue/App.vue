<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  },
}
</script>

<template>
  <Header />
  <router-view />
  <footer :class="$style.footer">Copyright&#169; 2023 Kaleb Dykema</footer>
</template>

<style lang="scss" module>
@import './scss/variables';

.footer {
  width: 100%;
  background-color: $primaryOrange;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  position: fixed;
  bottom: 0;
  font-weight: bold;
}
</style>
