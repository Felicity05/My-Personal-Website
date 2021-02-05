<template>
<v-container>
    <!-- <v-responsive :aspect-ratio="3/2"> -->
    <img src="../assets/contact(1).png" class="image-fit">
    <p class="centered">hello there</p>
        <v-row no-gutters style="border: 1px solid red" class="">
            <v-col cols="12">
                <h2 class="diplay-4 page-title aos-init aos-animate" data-aos="fade" data-aos-duration="1000">Let's get in Touch!</h2>
            </v-col>

            <v-col cols="6" offset="3">
                <p class="lead contact-message aos-init aos-animate" data-aos="zoom-in-up" data-aos-duration="1000">
                    I’m very friendly and always open for new oportunities to learn and apply my knowledge.
                    Feel free to drop me a message for bussiness inquieries or just to say hi... :)
                </p>
            </v-col>

            <v-col cols="6" offset="3" style="border: 1px solid orange" class=" aos-init aos-animate" data-aos="zoom-in" data-aos-duration="1000">
                <v-btn class="ma-2" outlined color="#F79297" align="center">
                    <a href="mailto:aalva456@fiu.edu?subject=Hi, how are you?">Contact me!</a>
                </v-btn>
            </v-col>
        </v-row>
        <img>
    
    <!-- </v-responsive> -->

    <!-- <div class="top aos-init aos-animate" data-aos="fade" data-aos-duration="1000">
        <a @click="scrollTo('home')" class="float">
            <i class="material-icons my-float">home</i>
        </a>
    </div> -->

</v-container>
</template>

<script>
export default {
    name: "Contact",

    methods: {
        scrollTo(element) {
            const el = document.querySelector("#" + element);
            el.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }
};
</script>

<style scoped>
a {
    text-decoration: none;
}

.contact {
    background-image: url("../assets/contact(1).png");
    max-width: 100%;
    max-height: 100%;
}

.img {
    opacity: 30%;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.page-title {
    text-align: left;
    padding-bottom: 5em;
    padding-top: 0.7em;
    color: #698191;
}

.contact-message {
    /* margin: 1em 13em auto; */
    text-align: center;
    /* margin-bottom: 5em; */
}

.image-fit{
  /* height: 100%; */
  width: 100%;
  object-fit: cover;
}

.top {
    cursor: pointer;
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 80px;
    right: 40px;
    background-color: #0c9;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    box-shadow: 2px 2px 5px #3c4a59;
}

.my-float {
    margin-top: 12px;
    font-size: 34px;
}
</style>
