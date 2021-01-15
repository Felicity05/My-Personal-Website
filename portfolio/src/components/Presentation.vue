// TO DO: find a cool animation to put here
<template>
<v-container fill-height class="out-container">
    <!-- FIXME: fix animation to actually work on scroll -->
    <v-row no-gutters class="mask" v-scrollanimation>
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
    </v-row>

    <!-- offset-lg-9 offset-md-9 offset-xs-9 offset-sm-9 -->
    <v-row no-gutters>
        <svg class="ml-auto" width="110" height="38" viewBox="0 0 110 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="16" width="88" height="22" fill="#92AF7D" />
            <line x1="25.5561" y1="28.7698" x2="39.5561" y2="1.76984" stroke="black" />
            <line x1="39.5561" y1="28.7698" x2="53.5561" y2="1.76984" stroke="black" />
            <line x1="53.5561" y1="27.7698" x2="67.5561" y2="0.769841" stroke="black" />
            <line x1="67.5561" y1="27.7698" x2="81.5561" y2="0.769841" stroke="black" />
            <line x1="81.5561" y1="28.7698" x2="95.5561" y2="1.76984" stroke="black" />
            <line x1="95.5561" y1="28.7698" x2="109.556" y2="1.76984" stroke="black" />
        </svg>
    </v-row>

    <v-container no-gutters class="content">
        <v-row no-gutters class="row-wrap">
            <v-col  cols="6" class="presentation-text">
                <p class=" hi-style 
                            text-sm-subtitle-1
                            text-md-subtitle-1 
                            text-lg-h6
                            text-xl-h4
                            "> Hi my name is, </p>
                <h1 class=" name-style animated fadeInDown delay-3s 
                            text-h4            
                            text-md-h2         
                            text-lg-h2
                            pb-lg-3
                            "> Arelys Alvarez</h1>
                <p class=" desc-style animated fadeIn delay-3s 
                            text-h6
                            text-md-h6 
                            text-lg-h5
                            text-xl-h5" >I'm a Software Engineer currently based in Miami</p>
            </v-col>

            <v-col cols="6">
                <v-img contain v-slot:placeholder src="../assets/presentation-image.png" transition="scale-transition" />
            </v-col>
        </v-row>
    </v-container>

    <v-row no-gutters>
        <svg width="110" height="37" viewBox="0 0 110 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="15" width="88" height="22" fill="#FABD02" />
            <line x1="25.5561" y1="28.7698" x2="39.5561" y2="1.76984" stroke="black" />
            <line x1="39.5561" y1="28.7698" x2="53.5561" y2="1.76984" stroke="black" />
            <line x1="53.5561" y1="27.7698" x2="67.5561" y2="0.769841" stroke="black" />
            <line x1="67.5561" y1="27.7698" x2="81.5561" y2="0.769841" stroke="black" />
            <line x1="81.5561" y1="28.7698" x2="95.5561" y2="1.76984" stroke="black" />
            <line x1="95.5561" y1="28.7698" x2="109.556" y2="1.76984" stroke="black" />
        </svg>
    </v-row>

</v-container>
</template>

<script>
// import ScrollOut from "scroll-out";

export default {
    name: 'Presentation',

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

.out-container {
    /* border: 2px solid purple; */

}

/* makes the image go above the text */
@media (max-width: 599px) {
    .row-wrap {
        flex-direction: column-reverse;
      }
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
    width: 395px;
    height: 520px;
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

.hi-style {
    font-family: 'Anonymous Pro', monospace;
    margin: 0;
    padding: 0;
    /* padding-top: 18rem; */
    padding-bottom: 7px;
}

.name-style {
    text-align: left;
    margin-bottom: 0px;
    /* padding-bottom: 10px; */
    color: #F79297;
}

.desc-style {
    font-size: 30px;
    margin: 0;
    /* padding-top: 5px; */
    /* margin-bottom: 10em; */
    /* color: gray */
}
</style>
