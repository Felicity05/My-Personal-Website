<template>
<v-app>
    <v-app-bar app color="pink" dark>
        <header></header>
    </v-app-bar>

    <v-main class="content">

        <presentation />

        <!-- <about></about> -->
    </v-main>
</v-app>
</template>

<script>
import Header from './components/Header.vue';
import About from './components/About.vue';
import LandingPage from './components/LandingPage.vue';
import Presentation from './components/Presentation';

export default {
    name: 'App',

    components: {
        Header,
        LandingPage,
        Presentation,
        About

    },

    data: () => ({
        //
    }),
};
</script>

<style>
.content {
    background: #F9F2E6;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #698191;
}
</style>
