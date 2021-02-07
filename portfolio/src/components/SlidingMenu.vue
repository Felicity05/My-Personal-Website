<template>
<v-container fluid class="box">
    <v-row>
        <transition name="show">
            <v-col class="slideMenu" v-if="open" style="border: 2px solid red">
                <transition-group appear name="fade" class="menu">
                    <v-row :key="1">
                        <p>{{ open }}</p>
                        <v-icon class="close-icon mr-auto" @click="!open"> clear </v-icon>
                    </v-row>
                    <v-col class="sidebar-element" v-for="(item, index) in navElements" :key="item.title" :style="{'--index': index}">
                        <router-link :to="item.path">
                            <h1 class=" menu-item
                                text-h4            
                                text-md-h2         
                                text-lg-h2
                                pb-lg-3">{{ item.title }}</h1>
                        </router-link>
                    </v-col>
                    <!-- <a href="#" class="sidebar-element" v-for="(item, index) in navElements" :key="item" :style="{'--index': index}">
                    <p>{{ item }}</p>
                </a> -->
                </transition-group>
            </v-col>
        </transition>
    </v-row>
</v-container>
</template>

<script>
export default {
    props: [
        'open'
    ],
    data() {
        return {
            navElements: [{
                    title: "ABOUT",
                    path: '/About'
                },
                {
                    title: "PROJECTS",
                    path: '/Projects'
                },
                {
                    title: "EXPERIENCE",
                    path: '/Experience'
                },
                {
                    title: "CONTACT",
                    path: '/Contact'
                }
            ]
        }
    },
    methods: {
        closeMenu: function () {
            open = !open;
            console.log(open);
        }
    },
}
</script>

<style lang="scss" scoped>
.box {
    // padding: 0;
    margin: 0;
}

.slideMenu {
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    flex-direction: column;
    // width: 100%;
    height: 100%;
    // padding-left: 200px;
    background-color: rgba($color: #242424, $alpha: 1);
    z-index: 999;

    .sidebar-element {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 8px;
        color: #fefefe;
        // font-size: 60px;
    }

    .close-icon {
        position: absolute;
        top: 40px;
        right: 200px;
        color: #fefefe;
        font-size: 34px;
    }
}

.menu-item {
    font-weight: normal;
}

.show {

    &-enter,
    &-leave-to {
        opacity: 0;
        transform: translateX(500px);
    }

    &-enter-active,
    &-leave-active {
        transition: all 500ms;
    }
}

.fade {
    &-enter {
        opacity: 0;
        transform: translateX(100px);
    }

    &-enter-active {
        transition: all 500ms ease-in-out;
        transition-delay: calc(50ms * var(--index));
    }
}
</style>
