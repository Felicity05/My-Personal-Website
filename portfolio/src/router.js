import Vue from "vue";
import Router from "vue-router";
import Presentation from "./components/Presentation";
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Projects from './components/Projects.vue';
import Experience from './components/Experience.vue';

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