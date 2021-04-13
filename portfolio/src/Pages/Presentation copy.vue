// TO DO: find a cool animation to put here
<template>
<div> 
    <!-- FIXME: fix animation to actually work on scroll -->
    <div class="mask" v-scrollanimation>
        <ul class="items">
            <li>
                <p class="display-4 start-text">code.</p>
            </li>
            <li>
                <p class="display-3 start-text">create.</p>
            </li>
            <li>
                <p class="display-1 start-text">inspire</p>
            </li>
        </ul>
    </div>

    <!-- offset-lg-9 offset-md-9 offset-xs-9 offset-sm-9 -->
    <!-- <div >
       <img src="../assets/images/green_vignette.svg" />
    </div> -->

    <!-- <v-container no-gutters class="content" style="border: 1px solid purple"> -->
        <div class="row" >
            <div  class="col presentation-text " >
                <!-- <div class="typeWriter"> -->
                <p class=" hi-style  
                            text-sm-subtitle-1
                            text-md-subtitle-1 
                            text-lg-h6
                            text-xl-h4
                            "> {{ typedText[0] }}</p>
                <!-- animated fadeInDown delay-3s  -->
                <h1 class=" name-style  
                            text-h4            
                            text-md-h2         
                            text-lg-h2
                            pb-lg-3
                            "> {{ typedText[1] }}</h1>
                <!-- animated fadeIn delay-3s -->
                <h5 class=" desc-style 
                            text-h6
                            text-md-h6 
                            text-lg-h5
                            text-xl-h5"> {{ typedText[2] }}</h5>
                <!-- </div> -->
            </div>

            <!-- <div class="col sm-img-center" >
                <img contain class="img-size" src="../assets/images/girl-laptop-stool.png" transition="scale-transition" />
            </div> -->

        </div>
    <!-- </v-container> -->

        <div>
            <img src="../assets/images/yellow_vignette.svg"/>
        </div>


</div>
</template>

<script>
// import ScrollOut from "scroll-out";

export default {
    name: 'Presentation',
    data() {
        return {
            typedText: ["Hi my name is,",
                         "Arelys Alvarez", 
                         "I'm a Software Engineer currently based in Miami"]
        }
    },

    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll: function () {
            // console.log('scroll happening');
            // console.log(event);
            // Any code to be executed when the window is scrolled
        }
    }

    // mounted() {
    // this.so = ScrollOut({
    // //   scope: this.$el,
    //     targets: ".mask"
    //     });
    // },
    // destroyed() {
    //     this.so.teardown();
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro&display=swap');

/* [data-scroll="in"] {
  clip-path: circle(2000px at 85% 55%);
  -webkit-clip-path: circle(2000px at 85% 55%);
  transition: all 1s ease-in;
}
[data-scroll="out"] {
    clip-path: circle(0px at 85% 55%);
    -webkit-clip-path: circle(0px at 85% 55%);
    transition: all 1s ease-in;
} */
/* Rectangle 4 */

@keyframes typing {
    from {
        width: 0
    }
    to {
        width: 94%
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
    float: right;
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

.typeWriter h5:nth-child(2) {
  animation-delay: 4s;
}

.hi-style {
    font-family: 'Anonymous Pro', monospace !important;
    font-weight: normal;
}

.name-style {
    text-align: left;
    margin-bottom: 0px;
    color: #F79297;
}

.desc-style {
    font-size: 30px;
    margin: 0;
    font-weight: normal;
    font-family: 'Anonymous Pro', monospace !important;
}

.presentation-text {
    display: flex;
    align-self: center;
    flex-direction: column;
}

.presentation-img {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
}

.img-size {
    /* width: 395px;
    height: 520px; */
    max-width: 80%;
    /* max-height: 80%; */
    height: 550px;
    margin: 0 auto;
}

.mask {
    position: fixed;
    background-color: #F79297;
    height: 100vh;
    padding: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    z-index: 1;
    /* clip-path: circle(0px at 85% 55%);
    -webkit-clip-path: circle(0px at 85% 55%);
    transition: all 2s ease-in;    */
    display: none;
}

/* .mask .start {
  clip-path: circle(2000px at 85% 55%);
  -webkit-clip-path: circle(2000px at 85% 55%);
} */

/* .before-enter {
    clip-path: circle(2000px at 85% 55%);
    -webkit-clip-path: circle(2000px at 85% 55%);
}

.enter {
    clip-path: circle(0px at 85% 55%);
    -webkit-clip-path: circle(0px at 85% 55%);
    transition: all 2s ease-in;
} */

.before-leave {}

.leave {}

.mask li p {
    text-decoration: none;
    align-items: center;
}

.items {
    list-style: none;
    display: flex;
    align-items: baseline;
    padding: 0;
    margin-top: auto;
    margin-bottom: auto;
}

.content {
    display: flex;
    justify-content: center;
    align-content: center;
}

.start-text {
    color: #F9F2E6;
    /* background-color: #F79297;
    height: 100vh; */
}

/* makes the image go above the text */
@media (max-width: 599px) {
    .row-wrap {
        flex-direction: column-reverse;
    }

    .presentation-text {
        max-width: 100%;
    }

    .sm-img-center {
        margin: 0 auto;
    }
}
</style>
