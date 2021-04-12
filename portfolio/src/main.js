import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollAnimation from './directives/scrollanimation'
import router from './router'
import 'bootstrap'

Vue.directive('scrollanimation', ScrollAnimation);

Vue.config.productionTip = false;

Vue.use(router);

new Vue({
  created(){
    AOS.init({
      offset: 230,
      anchorPlacement: "bottom-bottom"
    });
  },

  router,
  render: h => h(App)
}).$mount('#app')
