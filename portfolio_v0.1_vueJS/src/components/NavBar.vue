<template>
<div style="padding:0px; marging: 0px"> 
    <!--FIXME: padding top = 0 -->
    <!-- <v-app-bar flat  color="transparent"  style="padding: 0px"> -->
        <!-- <div class="d-flex align-center">
            <router-link to='/' tag="span" style="cursor: pointer">
            <img src="../assets/images/signature.svg" contain/>
            </router-link> -->

            <!-- <v-img alt="Personal Logo" class="shrink mr-2" contain src="../assets/code girl (1).svg" transition="scale-transition" width="80" height="80" /> -->
        <!-- </div> -->

        <!-- <v-toolbar-title>
            <span class="font-weight-light">#love</span>
            <span class="font-weight-bold">Code</span>
        </v-toolbar-title> -->


        <!-- <v-toolbar-items> -->
            <!-- <v-btn text color="#698191" v-for="link in header_links" :key="link">
                {{ link }}
            </v-btn>
            <v-btn text color="#698191">
                Resume
            </v-btn> -->
            <!-- <v-btn color="transparent" elevation="0" @click="navOpen = !navOpen">
                <svg width="35" height="13" viewBox="0 0 35 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="28" y2="0.5" stroke="#AEADAD" />
                    <line y1="12.5" x2="28" y2="12.5" stroke="#AEADAD" />
                    <line x1="7" y1="6.5" x2="35" y2="6.5" stroke="#AEADAD" />
                </svg>
            </v-btn>
        </v-toolbar-items>
    </v-app-bar> -->

    <sliding-menu :open="navOpen" />

</div>
</template>

<script>
// import pdf from 'vue-pdf'
import SlidingMenu from './SlidingMenu.vue';

export default {
    components: {
        SlidingMenu,
    },
    data() {
        return {
            resumepath: "./public/static/ArelysResume2019-1.pdf",
            header_links: ["About", "Projects", "Experience", "Contact"],
            navOpen: false,
        }
    },
    methods: {
        
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>