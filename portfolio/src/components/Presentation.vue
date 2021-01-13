// TO DO: find a cool animation to put here
<template>
<v-container fluid class="container">
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

    <v-container class="content">
        <div class="vignette">
            <svg width="110" height="38" viewBox="0 0 110 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="16" width="88" height="22" fill="#92AF7D"/>
            <line x1="25.5561" y1="28.7698" x2="39.5561" y2="1.76984" stroke="black"/>
            <line x1="39.5561" y1="28.7698" x2="53.5561" y2="1.76984" stroke="black"/>
            <line x1="53.5561" y1="27.7698" x2="67.5561" y2="0.769841" stroke="black"/>
            <line x1="67.5561" y1="27.7698" x2="81.5561" y2="0.769841" stroke="black"/>
            <line x1="81.5561" y1="28.7698" x2="95.5561" y2="1.76984" stroke="black"/>
            <line x1="95.5561" y1="28.7698" x2="109.556" y2="1.76984" stroke="black"/>
            </svg>
        </div>
        <v-row no-gutters>
            <v-col cols="12" sm="6" md="8" class="presentation-text mx-auto" style="flex-direction: column">
                <p class="lead hi"> Hi my name is, </p>
                <h1 class="display-3 name-style animated fadeInDown delay-3s">Arelys Alvarez</h1>
                <p class="lead desc-style
                 animated fadeIn delay-3s">I'm a Software Engineer currently based in Miami</p>
            </v-col>
            <v-col cols="6" md="4" class="presentation-img">
                
                <v-img contain v-slot:placeholder src="../assets/presentation-image.png" transition="scale-transition" />
            </v-col>
        </v-row>
    </v-container>

    <!-- <div style="height: 100vh"> -->

    <!-- </div> -->

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
.vignette {
    position: fixed;
    top: 125px;
    right: 370px;
}

.container {
    background-color: #F9F2E6;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
    height: 100vh;
}

.presentation-text {
    display: flex;
    justify-content: center;
    align-items: left;
    align-content: center;
}

.presentation-img {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
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

.hi {
    font-family: 'Anonymous Pro', monospace;
    margin: 0;
    padding: 0;
    /* padding-top: 18rem;
    padding-bottom: .5em; */
}

.start-text {
    color: #F9F2E6;
    /* background-color: #F79297;
    height: 100vh; */
}

.name-style {
    text-align: left;
    margin-bottom: 0;
    color: #F79297;
}

.desc-style {
    font-size: 30px;
    margin: 0;
    /* margin-bottom: 10em; */
    /* color: gray */
}
</style>
