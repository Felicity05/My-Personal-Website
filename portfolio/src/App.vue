<template>
  <div class="container-fluid" id="app">

    <landing-page></landing-page>

    <header class="header" id="home">
        <Header />
    </header>

    <div class="container content">
      <section class="presentation">
        <Presentation />
      </section>

      <section class="about" id="about">
        <About />
      </section>

      <section class="experience" id="experience">
        <Experience />
      </section>

      <section class="projects" id="projects">
        <Projects />
      </section>

      <section class="contact" id="contact">
        <Contact />
      </section>
    </div>

    <footer class="footer">
      <Footer />
    </footer>

  </div>
</template>

<script>
import Presentation from "./components/Presentation.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import About from "./components/About.vue";
import Experience from "./components/Experience.vue";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import LandingPage from "./components/LandingPage";



export default {
  name: "app",
  components: {
    Presentation,
    Header,
    Footer,
    About,
    Experience,
    Contact,
    Projects,
    LandingPage,
  },
  methods: {
    //custom function
    scrollTo(element) {
      const el = document.querySelector('#'+ element);
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    },
    // animateElement(element){
    //   // const el = document.querySelector('#'+ element);
      
    // }
  }
}
</script>


<style>
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  /* #2c3e50*/
  background: #212b36;
  height: 100%;
  margin: 0;
  padding: 0;
}
a {
  color: #5cdb95;
}
a:hover {
  color: #469168;
}
a:not([href]):not([tabindex]) {
  color: #5cdb95;
  cursor: pointer;
}
.header {
  padding-top: 0.4em;
}
.content {
  padding-bottom: 7em;
}
.footer {
  position: absolute;
  background: #212529;
  bottom: 0;
  margin: 0;
  width: 100%;
}
.container-fluid {
  position: relative;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
