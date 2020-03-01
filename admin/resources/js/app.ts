require('./bootstrap');

import Vue from 'vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import ja from './lang/validate/ja';

library.add(fas);

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize('ja', ja);

configure({
  classes: {
    invalid: 'error'
  }
})

Vue.component('fas', FontAwesomeIcon);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

window.Vue = Vue;

new Vue({
  el: '#app',
  router
}).$mount('#app');
