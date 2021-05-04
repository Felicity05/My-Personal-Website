<template>
  <div class="container">
    <nav class="navbar fixed-top">
       <a class="navbar-brand" href="/">
        <img src="../assets/svgs/signature.svg" alt="signature" />
      </a>
      <a class="navbar-menu" href="/">
        <img src="../assets/icons/menu.svg" alt="menu_icon" />
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
  background-color: #f9f2e6;
}

.navbar-brand {
  margin-left: 200px;
}

.navbar-menu {
  margin-right: 200px;
}

@media screen and (max-width: 600px) {
  .navbar-menu {
    margin-right: 10px
  }

  .navbar-brand {
    margin-left: 10px;
  }
}

@media screen and (min-width: 600px) and (max-width: 768px) {
  .navbar-menu {
    margin-right: 100px
  }

  .navbar-brand {
    margin-left: 100px;
  }
}
</style>
