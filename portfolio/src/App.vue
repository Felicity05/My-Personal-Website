<template>
<div>
  <NavBar />
  <Home />
  <Footer/>
</div>
</template>

<script>
import Footer from './components/Footer';
import Home from './Pages/Home';
import NavBar from './components/NavBar';



export default {
  name: 'App',
  components: {
    NavBar,
    Home,
    Footer,
  }
}
</script>

<style>
#app {
  background: #f9f2e6;
  font-family: Avenir, Helvetica, Arial, sans-serif, "Anonymous-Pro",
  monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4E5D67;
  margin-top: 61px;
  padding: 0px;
}

@import'~bootstrap/dist/css/bootstrap.css'
</style>
