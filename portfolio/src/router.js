import Vue from "vue";
import Router from "vue-router";
import Presentation from "./Pages/Presentation";
import About from './Pages/About.vue';
import Contact from './Pages/Contact.vue';
import Projects from './Pages/Projects.vue';
import Experience from './Pages/Experience.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Presentation',
            component: Presentation
        }, 
        {
            path: '/About',
            name: 'About',
            component: About
        },
        {
            path: '/Projects',
            name: 'Projects',
            component: Projects
        }, {
            path: '/Experience',
            name: 'Experience',
            component: Experience
        },
        {
            path: '/Contact',
            name: 'Contact',
            component: Contact
        }
    ],
    mode: 'history'
});