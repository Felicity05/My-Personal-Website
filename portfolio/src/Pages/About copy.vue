<template>
<div>
    <div>
        <svg width="44" height="47" viewBox="0 0 64 67" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 25px">
            <ellipse cx="27" cy="39.5" rx="27" ry="27.5" fill="#FABD02" />
            <path d="M61.5 27.5C61.5 41.3506 50.4879 52.5 37 52.5C23.5121 52.5 12.5 41.3506 12.5 27.5C12.5 13.6494 23.5121 2.5 37 2.5C50.4879 2.5 61.5 13.6494 61.5 27.5Z" stroke="#698191" stroke-width="5" />
            <path d="M61.5 27.5C61.5 41.3506 50.4879 52.5 37 52.5C23.5121 52.5 12.5 41.3506 12.5 27.5C12.5 13.6494 23.5121 2.5 37 2.5C50.4879 2.5 61.5 13.6494 61.5 27.5Z" stroke="#698191" stroke-width="5" />
        </svg>
        <div>
            <h2 class="diplay-4 know-me aos-init aos-animate" data-aos="fade" data-aos-duration="1000">Get to know me!</h2>
        </div>
        <div>
            <div class="lead intro">
                <p>
                    My name is Arelys Alvarez Padilla.
                    I’m a recent Computer Science grad with a passion for coding and all things beauty.
                </p>
                <p>I gratudated from Florida International University (FIU) on December 2019. I completed a major in Computer Science and two minors, one in Mathematics and the other in Mathematical Sciences</p>
                <p>I love cooking and spending time with my family and friends!</p>
                <br>
                <p>You can see some of my projects
                    <router-link to="/Projects" class="projects-link">
                    here!
                    </router-link>
                </p>
            </div>
            <div>
                <!-- <v-avatar class="me-out1" size="356"></v-avatar>
                <v-avatar class="me-out2" size="356">
                    <v-img class="me" src="@/assets/images/me-recent.png"></v-img>
                </v-avatar>
                <v-card color="transparent" elevation="0" class="dot-collection">
                    <p>. . . . . . . . . . . . . . . . .</p>
                    <p>. . . . . . . . . . . . . . . . .</p>
                    <p>. . . . . . . . . . . . . . . . .</p>
                    <p>. . . . . . . . . . . . . . . . .</p>
                    <p>. . . . . . . . . . . . . . . . .</p>
                    <p>. . . . . . . . . . . . . . . . .</p>
                </v-card> -->
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            languages: ["Python", "Java", "C", "C#", "HTML/CSS"],
            technologies: ["Node.js", "Vue.js", "Unity", "Blender", "Unreal", "RPA"]
        }
    },
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
.know-me {
    text-align: right;
    padding-bottom: 3em;
    padding-top: 0.7em;
    color: #F79297;
    margin-bottom: 0;
}

.intro {
    /* padding-top: 2em; */
    text-align: justify;
    text-justify: inter-word;
}

.check-projects {
    padding-top: 5em;
    margin-bottom: 10em;
    padding-left: 1em;
}

.me {
    /* width: 250px;
    height: 245px;
    box-shadow: 0.5em 0.5em 2em #212529; */

    position: absolute;
    width: 295px;
    height: 305px;
    /* left: 922px;
    top: 283px;  */
}

.me-out1 {
    /* border: 2.5px solid #5cdb95;
    padding: 15px;
    width: 18.7em;
    height: 18.5em;
    margin: 0 auto; */
    /* position: absolute; */
    top: 50px;
    left: 117px;

    background: #FEA9AD;
}

.me-out2 {
    /* border: 2.5px solid #5cdb95;
    padding: 15px; */

    /* position: absolute; */
    top: -350px;
    left: 50px;

    border: 5px solid #F79297;
    box-sizing: border-box;
}

.dot-collection {
    position: absolute;
    width: 260px;
    height: 312px;
    top: 210px;
    left: 233px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 32px;

    color: #698191;
}

.projects-link{
    color: #F79297;
}

</style>

<!-- 
    <div class="row">
        <div class="col-sm-6 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
            <p class="lead intro">
                I graduated from  Florida International University (FIU) on Fall 2019.
                Here you'll find some of the languages and Technolies I'm familiar with.
            </p>
            <div class="row technologies-lenguages">
                <div class="col-sm-6">
                    <p class="lead lenguages">Lenguages I'm familiar with:</p>
                    <ul>
                        <li v-for="language in languages">{{ language }}</li>
                    </ul>
                </div>
                <div class="col-sm-6">
                    <p class="lead technologies">Technologies I've used:</p>
                    <ul>
                        <li v-for="technologie in technologies">{{ technologie }}</li>
                    </ul>
                </div>
                <p class="lead check-projects">
                    You can check out some of my projects
                    <a class="projects-link" @click="scrollTo('projects')"> here!</a>
                </p>
            </div>
        </div>

        <div class="col-sm-6 aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
            <div class="me-out1">
                <div class="me-out2">
                    <img class="me" src="../assets/me1.jpg" alt="me" />
                </div>
            </div>
        </div>
    </div> -->
    <!-- </div> -->
