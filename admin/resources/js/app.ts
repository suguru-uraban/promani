import bootstrap from './bootstrap';
import Vue from 'vue';

// library
import router from './router';
import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import Toasted from 'vue-toasted';
import ja from './lang/validate/ja';

// component
import App from './App.vue';

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// store
import store from './store/index';

// store module
import AdministratorModule from './store/administrator';

bootstrap();

library.add(fas);

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize('ja', ja);

configure({
  classes: {
    invalid: 'error',
  },
});

const options = {
  position: 'bottom-right',
  duration: 4000,
  type: 'error',
  singleton: true,
};

Vue.use(Toasted, options);

Vue.component('fas', FontAwesomeIcon);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

window.Vue = Vue;

const createApp = async () => {
  await AdministratorModule.currentAdministrator();

  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App />',
  });
};

createApp();
