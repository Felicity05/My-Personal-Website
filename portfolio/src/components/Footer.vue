<template>
<!-- FIXME: length of footer goes over the length og the page -->
<v-container fluid style="padding: 0px">
    <v-row class="footer-content">
        <!-- started 2019 -->
        <v-col class="text">
            <p>Made with ❤ by Arelys Alvarez © 2019 Updated 11/2020 </p>
        </v-col>
        <v-col class="icons">
            <a class="icon" @click="openNewTab('https://github.com/Felicity05')">
                <i class="fa fa-github"></i>
            </a>
            <a class="icon" @click="openNewTab('https://www.linkedin.com/in/arelys-alvarez-9aaa92123/')">
                <i class="fa fa-linkedin"></i>
            </a>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: "Footer",

    methods: {
        openNewTab(tab) {
            window.open(tab, '_blank')
        }
    }
}
</script>

<style scoped>
.footer-content {
    background-color: #8891A4;
    flex-direction: column;
}

.footer-content p {
    margin: 0;
    margin-bottom: 0;
    padding-bottom: 0;
    color: #E5E5E5;
}

.text {
    padding: 0;
    font-size: 17px;
    text-align: center;
    flex: auto;
}

.icons {
    display: flex;
    justify-content: center;
    padding: 0;
}

.fa {
    font-size: 24px;
    color: #F79297;
}

/* .fa:hover {
    color: lightgray;
} */

.fa-github {
    padding-right: 1em;
}
</style>
