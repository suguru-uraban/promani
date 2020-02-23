require('./bootstrap');

import Vue from 'vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);

Vue.component('fas', FontAwesomeIcon);

window.Vue = Vue;

new Vue({
  el: '#app',
  router
}).$mount('#app');
