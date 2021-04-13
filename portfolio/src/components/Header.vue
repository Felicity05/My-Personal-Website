<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg justify-content-end">
      <a class="navbar-brand" href="#">
        <img src="../assets/personal_logo.png" alt="personal brand" class="personal-logo" />
      </a>
      <!-- <button class="btn btn-outline-success ml-auto mr-1 resume">Resume</button> -->
      <button
        class="navbar-toggler"
        type="button" 
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
        <ul class="navbar-nav text-right">
          <li class="nav-item menu">
            <a class="nav-link" @click="scrollTo('about')">About</a>
          </li>
          <li class="nav-item menu">
            <a class="nav-link" @click="scrollTo('experience')">Experience</a>
          </li>
          <li class="nav-item menu">
            <a class="nav-link" @click="scrollTo('contact')">Contact</a>
          </li>
          <li class="nav-item resume">
            <a class="nav-link" v-on:click="openResumeNewTab">
            Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import ArelysResume from "../static/ArelysResume2019-1.pdf";

export default {
  name: "Header",
  methods: {
    //custom function
    scrollTo(element) {
      const el = document.querySelector("#" + element);
      el.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    },
    openResumeNewTab: function() {
      var pdf = ArelysResume;
      window.open(pdf, "_blank");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.personal-logo {
  width: 30px;
  height: 40px;
  color: #5cdb95;
}
.display-3 {
  margin-left: 7%;
  text-align: left;
  padding-top: 23rem;
}
.lead {
  margin-left: 7%;
  font-size: 30px;
}
/* .navbar {
  position: fixed;
} */
.navbar-expand-lg {
  padding-top: 0;
  margin: 0 auto;
  /* background-color: #212529;
  opacity: 20%; */
}
.navbar-brand {
  margin-right: auto !important;
  padding-left: 0.7em;
  padding-top: .3em;
  padding-bottom: 0;
}
li > a {
  cursor: pointer;
  position: relative;
  text-decoration: none;
}
li > a:not([href]) {
  color: #5cdb95;
}
li > a:hover {
  color: azure;
}
.menu > a:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background: #5cdb95;
  visibility: hidden;
  border-radius: 5px;
  transform: scaleX(0);
  transition: 0.25s linear;
  box-shadow: 0 0 10px 2px #9cf5a6;
}
.menu > a:hover:before,
.menu > a:focus:before {
  visibility: visible;
  transform: scaleX(1);
}
.resume > a:before {
  content: "";
  /* background: #9CF5A6; */
  position: absolute;
  width: 100%;
  height: 5px;
  bottom: 0;
  left: 0;
  border-radius: 5px;
  transform: scaleX(0);
  animation: 1.4s forwards no-hover-o linear;
  animation-fill-mode: forwards;
  z-index: -1;
  box-shadow: 0 0 10px 2px #9cf5a6;
}
.resume > a:hover:before,
.resume > a:focus:before {
  animation: 0.5s forwards hover-o linear;
  animation-fill-mode: forwards;
}
.resume > button:before {
  content: "";
  /* background: #9CF5A6; */
  position: absolute;
  width: 100%;
  height: 5px;
  bottom: 0;
  left: 0;
  border-radius: 5px;
  transform: scaleX(0);
  animation: 1.4s forwards no-hover-o linear;
  animation-fill-mode: forwards;
  z-index: -1;
  box-shadow: 0 0 10px 2px #9cf5a6;
}
.resume > button:hover:before,
.resume > button:focus:before {
  animation: 0.5s forwards hover-o linear;
  animation-fill-mode: forwards;
}
@keyframes hover-o {
  0% {
    transform: scaleX(0);
    height: 5px;
  }
  45% {
    transform: scaleX(1.05);
    height: 5px;
  }
  55% {
    height: 5px;
  }
  100% {
    transform: scaleX(1.05);
    height: 2.4rem;
  }
}
@keyframes no-hover-o {
  0% {
    transform: scaleX(1.05);
    height: 2.4rem;
  }
  45% {
    height: 5px;
  }
  55% {
    transform: scaleX(1.05);
    height: 5px;
    opacity: 1;
  }
  100% {
    transform: scaleX(0);
    height: 5px;
    opacity: 0.02;
  }
}
</style>
