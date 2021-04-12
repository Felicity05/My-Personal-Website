<template>
<div class="projects">
    <h2 class="diplay-4 projects-header aos-init aos-animate" data-aos="fade" data-aos-duration="1000">Projects</h2>

    <div class="row style1" v-for="(project,index) in projects" :key="index">
        <div class="col-sm-6 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
            <div class="out1">
                <img class="p-image1" :src="require('../assets/projects_images/'+project.img)" alt="" />
            </div>
        </div>

        <div class="col-sm-6 aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
            <h5 class="diplay-4 project-name">{{project.title}}</h5>
            <p class="lead project-description">{{project.description}}</p>
            <p class="lead technologies">Technologies used: {{project.technologies}}</p>
        </div>
    </div>

    <div class="final-space"></div>
</div>
</template>

<script>
export default {
    name: "Projects",

    data: () => {
        return {
            projects: [{
                    img: "gallery1.png",
                    video: "video of HenriBooks", //address to the video
                    title: "Henry Books Library",
                    description: "Database to store and save books",
                    technologies: "NodeJS  ExpressJS  MySQL  Boostrap  JavaScript  GitHub"
                },
                {
                    img: "gallery2.png",
                    video: "video of Blakjack game", // https://www.youtube.com/watch?v=5fGWoY5IphU&t=174s 
                    title: "Arelys' Blackjack Game",
                    description: "Multiplayer Blackjack game with integrated chat functionality",
                    technologies: "Unity  C#  GitHub"
                },
                {
                    img: "gallery3.png",
                    video: "video of the eye", //make a video for that
                    title: "Eye Inspecting Lab",
                    description: "Animal Eye to inspect the arteries and veings",
                    technologies: "Blender  PhotoshopCS"
                },
                {
                    img: "gallery4.png",
                    video: "Teleporter model", //make a video for that
                    title: "Teleporter model",
                    description: "Model to be used in a future game",
                    technologies: "Blender  GitHub  PhotoshopCS"
                },
                {
                    img: "gallery5.png",
                    video: "Table model", //make a video for that 
                    title: "Table model",
                    description: "Model to be used in a future game",
                    technologies: "Blender  Github  PhotoshopCS"
                },
                {
                    img: "gallery6.png",
                    video: "Mom & Infants Healthy", //find this video
                    title: "Mom & Infants Healthy",
                    description: "Mobile app to facilitate information to future parents",
                    technologies: "ReactNative  Github  AzureDevOps"
                }
            ]
        };
    }
};
</script>

<style scoped>
img {
    width: 100%;
}

.style1 {
    margin-bottom: 5em;
}

.style2 {
    margin-bottom: 5em;
}

.projects-header {
    text-align: right;
    padding-bottom: 5em;
    padding-top: 0.7em;
}

.p-image1 {
    width: auto;
    height: 262px;
    background-size: contain;
}

.p-image2 {
    width: 275px;
    height: 300px;
    margin-right: 9em;
}

.project-name {
    margin-top: 3em;
}

.project-description {
    margin-top: 4em;
}

.out1 {
    border: 2.5px solid #5cdb95;
    padding: 15px;
    width: 28.5em;
    height: 18.5em;
    margin: 0 auto;
}

.out2 {
    border: 2.5px solid #5cdb95;
    padding: 15px;
    width: 17em;
    height: 18.5em;
    margin: 0 auto;
}

.aos-animate {
    opacity: 1;
    transform: translateZ(0);
}

.final-space {
    margin-bottom: 10em;
}
</style>
