<template>
<div class="experience-section">
    <h2 class="diplay-4 experience aos-init aos-animate" data-aos="fade" data-aos-duration="1000">Experience</h2>

    <!-- TODO put content of row in center of page -->
    <div class="row">
        <div class="row center">
            <div class="col-sm-6 jobs aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                <transition name="fade" mode="out-in">
                    <div class="cigna" v-if="isShown" key="1">
                        <h5 class="diplay-4 job-title">AI Robotics Automation – Production Support Intern</h5>
                        <h6 class="diplay-4 time">May 2019 – December 2019</h6>
                        <ul class="description">
                            <li>Support production bots and fix any issues that bots may present</li>
                            <li>Assist with deployment of new bots going into production</li>
                            <li>Linked production projects with corresponding dependent applications</li>
                            <li>Created a bot to automate an internal task that the Production Support team realizes</li>
                        </ul>
                    </div>
                    <div class="fiu" v-else key="2">
                        <h5 class="diplay-4 job-title">Undergraduate Research Assistant</h5>
                        <h6 class="diplay-4 time">May 2018 – May 2019</h6>
                        <ul class="description">
                            <li>Research and develop 3D User Interfaces, Multi-Modal Interaction, and Virtual & Augmented Reality</li>
                            <li>Explore Gesture User Interfaces and how those along with other modalities may improve the user’s interaction</li>
                        </ul>

                        <h5 class="diplay-4 job-title">Student Grader Assistant – Programming I</h5>
                        <h6 class="diplay-4 time">March 2018 – May 2018</h6>
                        <ul class="description">
                            <li>Worked in a team to grade assignments, exams, and quizzes based on previous knowledge and experience on the subject</li>
                            <li>Provided in code, suggestions for improvement</li>
                        </ul>
                    </div>
                </transition>
            </div>
            
            <v-divider vertical></v-divider>
            <!-- <div class="vl aos-init aos-animate" data-aos="fade" data-aos-duration="1000"></div> -->
            <div class="col-sm-4 aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
                <nav class="nav flex-column">
                    <a class="nav-link current" v-on:click="isShown = true, isActive = true" v-bind:class="{ active: isActive }">Cigna</a>
                    <a class="nav-link past" v-on:click="isShown = false, isActive = false" v-bind:class="{ active: !isActive }">FIU</a>
                </nav>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Experience",

    data() {
        return {
            isShown: true,
            isActive: true
        };
    }
};
</script>

<style scoped>
.jobs {
    margin-left: 5em;
}

.center {
    margin-left: 4em;
    margin-bottom: 13em;
}

.experience {
    text-align: left;
    padding-bottom: 5em;
    padding-top: 0.7em;
}

.flex-column {
    align-items: flex-end;
    margin-right: 17em;
    margin-top: 8em;
}

.vl {
    border-left: 2px solid #5cdb95;
    height: 20em;
    margin: 2em;
}

.current,
.past {
    margin: auto;
    margin-bottom: 4em;
}

.description {
    font-size: 0.95em;
    padding-bottom: 0.4em;
}

.active {
    border-bottom: 0.2em solid #5cdb95;
    padding-bottom: 0.2em;
    color: grey;
}

.time {
    margin-left: 0.7em;
    font-style: italic;
    padding-bottom: 0.5em;
    padding-top: 0.5em;
    color: grey;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
    opacity: 0
}
</style>
