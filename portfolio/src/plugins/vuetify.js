import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify, {
    iconfont: 'md',
});

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#F9F2E6',
                secondary: '#698191',
                accent: '#F79297',
                error: '#b71c1c',
            }, 
        },
    },
});
