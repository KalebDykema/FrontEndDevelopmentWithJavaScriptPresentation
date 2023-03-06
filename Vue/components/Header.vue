<template>
  <header :class="$style.headerStyles">
    <h2 :class="$style.siteTitle">
      <router-link :to="{ name: 'home' }">Vue Site</router-link>
    </h2>
    <nav :class="$style.links">
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'about' }">About</router-link>
      <router-link :to="{ name: 'contact' }">Contact</router-link>
    </nav>
    <div :class="$style.colorBars">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </header>
</template>

<style lang="scss" module>
@import '../scss/variables';

.headerStyles {
  width: 100%;
  outline: 0.25rem solid $primaryYellow;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 3rem 2rem;
  position: relative;
  overflow: hidden;

  .links {
    display: flex;
    gap: 0.5rem;

    a {
      transition: color 0.25s ease-in-out, padding 0.3s ease-in-out;

      &:hover:not(.disabled) {
        color: $primaryOrange;
        padding: 0rem 0.25rem;
      }
    }
  }

  siteTitle:global(a) {
    transition: transform 0.25s ease-in-out, padding 0.3s ease-in-out;
    color: $primaryYellow;

    &:hover {
      padding-left: 1rem;
      text-decoration: none;
    }
  }

  .colorBars {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;

    :global div {
      height: 100vh;
      width: 4rem;
      transition: width 0.25s ease-out;

      &:hover {
        width: 6rem;
      }

      &:first-child {
        background-color: $primaryYellow;
      }

      &:nth-child(2) {
        background-color: $primaryOrange;
      }

      &:nth-child(3) {
        background-color: $primaryRed;
      }

      &:nth-child(4) {
        background-color: $primaryBlue;
      }
    }
  }
}
</style>
