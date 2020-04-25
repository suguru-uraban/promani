import Vue from 'vue';

// library
import Router from 'vue-router';

// component
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import SharesEdit from './components/SharesEdit.vue';
import Error500 from './components/errors/500.vue';

// store module
import AdministratorModule from './store/administrator';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter(_to, _from, next) {
        if (AdministratorModule.check) {
          next('/');
        } else {
          next();
        }
      },
    },
    {
      path: '/shares/edit',
      name: 'sharesEdit',
      component: SharesEdit,
    },
    {
      path: '/500',
      name: 'INTERNAL_SERVER_ERROR',
      component: Error500,
    },
  ],
});
