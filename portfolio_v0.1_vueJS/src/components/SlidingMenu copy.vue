<template>
<div >
    <div class="slideMenu" v-if="open" style="border: 2px solid red">
        <transition name="show">
            <transition-group appear name="fade" class="menu">
                <v-icon class="close-icon" :key="1" :close="!open"> clear </v-icon>
                <a href="#" class="sidebar-element menu--adsila menu__item-name" v-for="(item, index) in navElements" :key="item" :style="{'--index': index}">
                    <p>{{ item }}</p>
                </a>
            </transition-group>
        </transition>
    </div>
</div>
</template>

<script>
export default {
    props: [
        'open'
    ],
    data() {
        return {
            navElements: ["ABOUT", "PROJECTS", "EXPERIENCE", "CONTACT"]
        }
    },
}
</script>

<style lang="scss" scoped>
.slideMenu {
    // top: 0px;
    // left: 0px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    // position: absolute;
    flex-direction: column;
    width: 100%;
    // height: 100vh;
    padding-left: 200px;
    background-color: rgba($color: #242424, $alpha: 1);

    .sidebar-element {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 8px;
        color: #fefefe;
        font-size: 60px;
    }

    .close-icon {
        position: absolute;
        top: 40px;
        right: 1200px;
        color: #fefefe;
        font-size: 34px;
    }
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

.menu--adsila .menu__item-name {
    padding: 0 0.35em;
    font-weight: bold;
    line-height: 1.4;
    transition: color 0.5s;
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}

.menu--adsila .menu__item-name::before {
	content: '';
	position: absolute;
	z-index: -1;
	width: 100%;
	height: 50%;
	left: 0;
	bottom: 0;
	opacity: 0.3;
	transform: scale3d(0,1,1);
	transform-origin: 0% 50%;
	transition: transform 0.5s;
	transition-timing-function: cubic-bezier(0.2,1,0.3,1);
}

</style>
