<template>
  <div class="container" style="border: 1px red solid">
    <div class="row">
      <div class="col-6 presentation-section" style="border: 1px blue solid">
        <div class="presentation-text typeWriter">
          <p class="hi-style text-left">{{ typedText[0] }}</p>
          <h1 class="name-style text-left">{{ typedText[1] }}</h1>
          <h4 class="desc-style text-left">
            {{ typedText[2] }}
          </h4>
          <!-- if text is bigger than with create a new h4 with text remainig -->
        </div>
      </div>

      <div class="col-5" style="border: 1px green solid">
        <img
          class="presentation-img"
          src="../assets/images/girl-laptop-stool.png"
          alt="girl-with-laptop"
        />
      </div>

      <div class="col-1" style="padding: 0">
        <img
          class="green-vignette"
          src="../assets/svgs/green_vignette.svg"
          alt="green_vignette"
        />
      </div>

      <div class="col-1" style="padding: 0">
        <img
          class="yellow-vignette"
          src="../assets/svgs/yellow_vignette.svg"
          alt="yellow_vignette"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      typedText: [
        "Hi my name is,",
        "Arelys Alvarez",
        "I'm a Software Engineer currently based in Miami",
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anonymous+Pro&display=swap");

.green-vignette,
.yellow-vignette {
  width: 100%;
}

.presentation-section {
  display: flex;
  align-items: center;
}

.presentation-text {
  width: 100%;
}

.hi-style,
.desc-style {
  font-family: "Anonymous Pro", monospace !important;
  padding-bottom: 5px !important;
}

.name-style {
  color: #51232a;
  padding-bottom: 10px !important;
}

div.desc-style {
  word-wrap: break-word;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes cursorBlink {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #fabd02;
  }
}

.typeWriter p {
  overflow: hidden;
  white-space: nowrap;
  clear: both;
  margin: 0;
  padding: 0;
  border-right: 0.2em solid #fabd02;
  padding-bottom: 0px;
  animation: typing 2s steps(30, end), cursorBlink 0.75s step-end;
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
  border-right: 0.1em solid #fabd02;
  padding-bottom: 0px;
  animation: typing 2s steps(30, end), cursorBlink 0.75s step-end 2;
  animation-delay: 2s;
  animation-fill-mode: both;
  /* load first keyframe on page load, leave on last frame at end */
}

.typeWriter h4 {
  overflow: hidden;
  white-space: nowrap;
  clear: both;
  margin: 0;
  float: left;
  width: 0;
  padding: 0;
  border-right: 0.2em solid #fabd02;
  padding-bottom: 0px;
  animation: typing 2s steps(30, end), cursorBlink 0.75s step-end infinite;
  animation-delay: 3.5s;
  animation-fill-mode: both; /* load first keyframe on page load, leave on last frame at end */
}

.typeWriter h4:nth-child(2) {
  animation-delay: 8s;
}

.presentation-img {
  width: 100%;
}
</style>