import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const opts = {
    icons: {
        iconfont: 'mdiSvg',
    },
    theme: {
        dark: true,
        default: 'dark',
    },
}

export default new Vuetify(opts)
