// TO DO: find a cool animation to put here
<template>
  <div class="hello">
    <p class="lead hi">Hi my name is, </p>
    <h1 class="display-3 animated fadeInDown delay-.5s">Arelys Alvarez Padilla</h1>
    <p class="lead spec animated fadeIn delay-1s">I'm a Software Engineer currently based in Miami</p>
    
  </div>
</template>

<script>
export default {
  name: 'Presentation',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hi {
 font-family: 'Anonymous Pro', monospace;
 margin: 0;
 padding: 0;
 padding-top: 18rem;
 padding-bottom: .5em;
}
.display-3{
  text-align: left;
  margin-bottom: 0;
}
.spec{
  font-size: 30px;
  margin: 0;
  margin-bottom: 10em;
  color: gray
}
</style>
