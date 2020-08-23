import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';



Vue.config.productionTip = false

new Vue({
  created(){
    AOS.init({
      offset: 230,
      anchorPlacement: "bottom-bottom"
    });
  },
  render: h => h(App),
}).$mount('#app')
