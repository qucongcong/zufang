// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import axios from './utils/axios.js'
Vue.prototype.axios = axios
Vue.config.productionTip = true
import Clipboard from 'v-clipboard'
Vue.use(Clipboard)

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import fontAwesome from '../static/font/fontAwesome/css/font-awesome.min.css'
Vue.use(fontAwesome)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
