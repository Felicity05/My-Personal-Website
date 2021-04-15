<template>
  <div class="container" style="border: 1px red solid">
      <div class="row">
          <div class="col-6 presentation-text typeWriter" style="border: 1px blue solid">
              <p class=" hi-style text-left
                    
                            "> {{ typedText[0] }}</p>
                <!-- animated fadeInDown delay-3s  -->
                <h1 class=" name-style text-left
                            
                            "> {{ typedText[1] }}</h1>
                <!-- animated fadeIn delay-3s -->
                <h5 class=" desc-style text-left
                            "> {{ typedText[2] }}</h5>
          </div>
          <div class="col-6" style="border: 1px green solid">
               <img class="presentation-img" src="../assets/images/girl-laptop-stool.png" alt="girl-with-laptop"  />
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            typedText: ["Hi my name is,",
                         "Arelys Alvarez", 
                         "I'm a Software Engineer currently based in Miami"]
        }
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro&display=swap');

.presentation-text {
    margin: auto;
}

.hi-style, .desc-style { 
    font-family: 'Anonymous Pro', monospace !important;
}

.name-style {
    color: #F79297;
}

@keyframes typing {
    from {
        width: 0
    }
    to {
        width: 98%
    }
}

@keyframes cursorBlink {
    from,
    to {
        border-color: transparent
    }
    50% {
        border-color: #FABD02;
    }
}

.typeWriter p {
    overflow: hidden;
    white-space: nowrap;
    clear: both;
    margin: 0;
    padding: 0;
    border-right: .20em solid #FABD02;
    padding-bottom: 0px;
    animation:
        typing 2s steps(30, end),
        cursorBlink .75s step-end;
    animation-delay: 1s;
    animation-fill-mode: both;
    /* load first keyframe on page load, leave on last frame at end */
}

.typeWriter h1 {
    overflow: hidden;
    white-space: nowrap;
    clear: both;
    margin: 0;
    padding: 0;
    border-right: .10em solid #FABD02;
    padding-bottom: 0px;
    animation:
        typing 2s steps(30, end),
        cursorBlink .75s step-end 2;
    animation-delay: 2s;
    animation-fill-mode: both;
    /* load first keyframe on page load, leave on last frame at end */
}

.typeWriter h5 {
    overflow: hidden;
    white-space: nowrap;
    clear: both;
    margin: 0;
    float: left;
    width: 0;
    padding: 0;
    border-right: .20em solid #FABD02;
    padding-bottom: 0px;
    animation:
        typing 2s steps(30, end),
        cursorBlink .75s step-end infinite;
    animation-delay: 3.5s;
    animation-fill-mode: both; /* load first keyframe on page load, leave on last frame at end */
}

/* .typeWriter h5:nth-child(2) {
  animation-delay: 4s;
} */

.presentation-img {
    width: 100%;
}



</style>