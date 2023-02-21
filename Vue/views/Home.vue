<template>
  <h1>Home</h1>
  <br>
  <ul>
    <li>
      <router-link :to="{ name: 'home' }">Home</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'about' }">About</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'contact' }">Contact</router-link>
    </li>
    <li>
      <router-link to="/contactesdafs">Contact</router-link>
    </li>
  </ul>
</template>