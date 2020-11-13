<template>
  <div class="row footer-content">
    <!-- started 2019 -->
    <p class="lead copy">Made with ❤ by Arelys Alvarez © 2019 Updated 11/2020 </p> 
    <p>
      <a class="icon" @click="openNewTab('https://github.com/Felicity05')">
        <i class="fa fa-github"></i>
      </a>

      <a class="icon" @click="openNewTab('https://www.linkedin.com/in/arelys-alvarez-9aaa92123/')">
        <i class="fa fa-linkedin"></i>
      </a>
    </p>
  </div>
</template>


<script>
    export default {
    name: "Footer",
    
    methods: {
        openNewTab(tab) {
            window.open(tab,'_blank')
        }
    }
}
</script>

<style scoped>
.footer-content p {
  margin: 0;
  width: 100%;
  text-align: center;
  margin-bottom: 0;
  padding-bottom: 0;
}
.copy {
  padding-top: 0.2em;
  font-size: 18px;
}
.fa {
  font-size: 24px;
  /* color: #5CDB95 */
}
a:not([href]) {
  color: #5cdb95;
}
a:not([href]):hover {
  color: grey;
}
.fa-github {
  padding-right: 1em;
}
</style>