<template>
<v-app>
    <app-header />

    <v-main>
        
          <router-view></router-view>
            <!-- <presentation></presentation> -->

            <!-- <about></about> 

           <experience></experience>

           <projects></projects> -->
      
            <!-- <contact></contact> -->

            

    </v-main>

    <!-- <v-footer padless>
      <app-footer></app-footer>
    </v-footer> -->

</v-app>
</template>

<script>
import NavBar from './components/NavBar';
// import Footer from './components/Footer';
// import About from './components/About.vue';
// import Contact from './components/Contact.vue';
// import Projects from './components/Projects.vue';
// import Experience from './components/Experience.vue';
// import Presentation from './components/Presentation.vue';



export default {
    components: {
        'app-header': NavBar,
        // Presentation,
        // About,
        // Experience,
        // Projects,
        // Contact,
        // 'app-footer': Footer,
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
    margin: 0px;
    padding: 0px;
}
</style>
