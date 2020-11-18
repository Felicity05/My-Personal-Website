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
        <v-row no-gutters>
            <v-col cols="12" sm="6" md="8" class="presentation-text mx-auto" style="flex-direction: column">
                <p class="lead hi"> Hi my name is, </p>
                <h1 class="display-3 name-style animated fadeInDown delay-3s">Arelys Alvarez</h1>
                <p class="lead desc-style
                 animated fadeIn delay-3s">I'm a Software Engineer currently based in Miami</p>
            </v-col>
            <v-col cols="6" md="4" class="presentation-img">
                <img class="img-size" src="../assets/presentation-image.png" />
            </v-col>
        </v-row>
    </v-container>

    <!-- <div style="height: 100vh"> -->

    </div>

</v-container>
</template>

<script>
import ScrollOut from "scroll-out";

export default {
    name: 'Presentation',

    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll(event) {
            console.log('scroll happening')
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
    /* display: none; */
}

/* .mask .start {
  clip-path: circle(2000px at 85% 55%);
  -webkit-clip-path: circle(2000px at 85% 55%);
} */

.before-enter {
    clip-path: circle(2000px at 85% 55%);
    -webkit-clip-path: circle(2000px at 85% 55%);
}

.enter {
    clip-path: circle(0px at 85% 55%);
    -webkit-clip-path: circle(0px at 85% 55%);
    transition: all 2s ease-in;
}

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
