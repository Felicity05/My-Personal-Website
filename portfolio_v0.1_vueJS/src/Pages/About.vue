<template>
  <div class="about">
    <h2
      class="diplay-4 know-me aos-init aos-animate"
      data-aos="fade"
      data-aos-duration="1000"
    >Get to know me!</h2>
    <div class="row">
      <div class="col-sm-6 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
        <p class="lead intro">
          Hello! I'm Arelys Alvarez, a Computer Science graduate from FIU since Fall 2019.
        </p>
        <div class="row technologies-lenguages">
          <div class="col-sm-6">
            <p class="lead lenguages">Lenguages I'm familiar with:</p>
            <ul>
              <li>Python</li>
              <li>Java</li>
              <li>C</li>
              <li>C#</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div class="col-sm-6">
            <p class="lead technologies">Technologies I've used:</p>
            <ul>
              <li>Node.js</li>
              <li>Unity</li>
              <li>Blender</li>
              <li>Unreal</li>
              <li>RPA</li>
            </ul>
          </div>
          <p class="lead check-projects">
            You can check out some of my projects
            <a
              class="projects-link"
              @click="scrollTo('projects')"
            >here!</a>
          </p>
        </div>
      </div>

      <div class="col-sm-6 aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
        <div class="me-out1">
          <div class="me-out2">
            <img class="me" src="../assets/images/me1.jpg" alt="me" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    scrollTo(element) {
      const el = document.querySelector("#" + element);
      el.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }
};
</script>

<style scoped>
.know-me {
  text-align: right;
  padding-bottom: 5em;
  padding-top: 0.7em;
}
.intro {
  padding-top: 2em;
}
.check-projects {
  padding-top: 5em;
  margin-bottom: 10em;
  padding-left: 1em;
}
.me {
  width: 250px;
  height: 245px;
  box-shadow: 0.5em 0.5em 2em #212529;
}
.me-out1 {
  border: 2.5px solid #5cdb95;
  padding: 15px;
  width: 18.7em;
  height: 18.5em;
  margin: 0 auto;
}
.me-out2 {
  border: 2.5px solid #5cdb95;
  padding: 15px;
  width: 18.7em;
  height: 18.5em;
}
</style>