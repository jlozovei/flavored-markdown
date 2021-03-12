import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import Clipboard from 'v-clipboard';

import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: 'UA-116650364-3'
});

Vue.use(Clipboard);

new Vue({
  store,
  render: (h) => h(App)
}).$mount('#app');
