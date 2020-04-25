import Vue from 'vue';

// library
import Vuex from 'vuex';

// state type
import RootState from '../types/stateType';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({});
