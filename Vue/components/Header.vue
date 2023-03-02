<template>
  <header>
    <h2>Vue Site</h2>
    <nav>
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'about' }">About</router-link>
      <router-link :to="{ name: 'contact' }">Contact</router-link>
    </nav>
  </header>
</template>

<style lang="scss">
  header {
    width: 100%;
    outline: 0.25rem solid $primaryYellow;
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 3rem 2rem;
    position: relative;
    overflow: hidden;
  }

  header nav {
    display: flex;
    gap: 0.5rem;
  }

  header h2 a {
    transition: transform 0.25s ease-in-out, padding 0.3s ease-in-out;
    color: $primaryYellow;
  }
  header h2 a:hover {
    padding-left: 1rem;
    text-decoration: none;
  }

  header nav a {
    transition: color 0.25s ease-in-out, padding 0.3s ease-in-out;
  }
  header nav a:hover:not(.disabled) {
    color: $primaryOrange;
    padding: 0rem 0.25rem;
  }

  #colorBars {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
  }
  .colorBar {
    /* height: 4.08rem; */
    height: 100vh;
    width: 4rem;
    transition: width 0.25s ease-out;
  }
  .colorBar:hover {
    width: 6rem;
  }
  .colorBar:first-child {
    background-color: $primaryYellow;
  }
  .colorBar:nth-child(2) {
    background-color: $primaryOrange;
  }
  .colorBar:nth-child(3) {
    background-color: $primaryRed;
  }
  .colorBar:nth-child(4) {
    background-color: $primaryBlue;
  }

</style>