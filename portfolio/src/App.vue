<template>
  <v-app>
  <v-app-bar app flat dense color="transparent" hide-on-scroll>
    <app-header />
  </v-app-bar>

  <v-main>
    <presentation></presentation>
  </v-main>
  
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div> -->
  </v-app>
</template>

<script>
import Header from './components/Header';
import Presentation from './components/Presentation.vue';

export default {
  components: {
    'app-header': Header,
    Presentation,
  }
}
</script>

<style>
#app {
    background: #F9F2E6;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #698191;
}
</style>
