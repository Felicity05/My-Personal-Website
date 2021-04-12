<template>
    <div>
        <!-- FIXME: fix animation to actually work on scroll -->
    <div no-gutters class="mask">
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
    </div>
</template>

<script>
import ScrollOut from "scroll-out";

export default {

    mounted() {
    this.so = ScrollOut({
    //   scope: this.$el,
        targets: ".mask"
        });
    },
    destroyed() {
        this.so.teardown();
    }
    
}
</script>

<style scoped>

[data-scroll="in"] {
  clip-path: circle(2000px at 85% 55%);
  -webkit-clip-path: circle(2000px at 85% 55%);
  transition: all 1.5s ease-in;
}

[data-scroll="out"] {
    clip-path: circle(0px at 85% 55%);
    -webkit-clip-path: circle(0px at 85% 55%);
    transition: all 1.5s ease-in;
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

.presentation-text {
    display: flex;
    justify-content: center;
    align-items: left;
    align-content: center;
}

    
</style>