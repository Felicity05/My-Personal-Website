<template>
  <div class="container-fluid" id="app">
    <presentation />

    <footer class="footer">
      <app-footer />
    </footer>
  </div>
</template>

<script>
// import NavBar from './components/NavBar';
import Footer from "./Components/Footer";
// import About from './components/About.vue';
// import Contact from './components/Contact.vue';
// import Projects from './components/Projects.vue';
// import Experience from './components/Experience.vue';
import Presentation from "./Pages/Presentation.vue";

export default {
  components: {
    // 'app-header': NavBar,
    Presentation,
    // About,
    // Experience,
    // Projects,
    // Contact,
    "app-footer": Footer,
  },
};
</script>

<style>
#app {
  background: #f9f2e6;
  font-family: "Avenir", Helvetica, Arial, sans-serif, "Anonymous-Pro",
    monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #698191;
  margin: 0px;
  padding: 0px;
}

@import'~bootstrap/dist/css/bootstrap.css'
</style>
