<template>
<v-app>

    <v-app-bar app flat dense color="transparent" hide-on-scroll>
        <app-header />
    </v-app-bar>

    <v-main>
        
            <presentation></presentation>

            <!-- <about></about> 

           <experience></experience>

           <projects></projects> -->
      
            <contact></contact>

            <app-footer></app-footer>

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
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Experience from './components/Experience.vue';
import NavBar from './components/NavBar';
import Presentation from './components/Presentation.vue';
import Projects from './components/Projects.vue';
import Footer from './components/Footer';

export default {
    components: {
        'app-header': NavBar,
        Presentation,
        // About,
        // Experience,
        // Projects,
        Contact,
        'app-footer': Footer,
    }
}
</script>

<style>
#app {
    background: #F9F2E6;
    font-family: "Avenir", Helvetica, Arial, sans-serif, "Anonymous-Pro", monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #698191;
}
</style>
