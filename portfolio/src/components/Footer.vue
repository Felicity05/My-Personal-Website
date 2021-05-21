<template>
  <!-- FIXME: length of footer goes over the length og the page -->
  <div fluid style="padding: 0px">
    <div class="footer-content">
      <!-- started 2019 -->
      <div class="text">
        <p>Made with <❤> by Arelys Alvarez © 2021</p>
      </div>
      <div class="icons">
        <a class="icon" @click="openNewTab('https://github.com/Felicity05')">
          <i class="fa fa-github"></i>
        </a>
        <a
          class="icon"
          @click="
            openNewTab('https://www.linkedin.com/in/arelys-alvarez-9aaa92123/')
          "
        >
          <i class="fa fa-linkedin"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",

  methods: {
    openNewTab(tab) {
      window.open(tab, "_blank");
    },
  },
};
</script>

<style scoped>
.footer-content {
  background-color: #7c828f;
  flex-direction: column;
}

.footer-content p {
  margin: 0;
  margin-bottom: 0;
  padding-bottom: 0;
  color: #e5e5e5;
}

.text {
  padding: 0;
  font-size: 17px;
  text-align: center;
  flex: auto;
}

.icons {
  display: flex;
  justify-content: center;
  padding: 0;
}

.fa {
  font-size: 24px;
  color: #f79297;
}

/* .fa:hover {
    color: lightgray;
} */

.fa-github {
  padding-right: 1em;
}
</style>
