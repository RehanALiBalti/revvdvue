//import Vue from 'vue';
import Vuex from 'vuex';
import authModule from './modules/auth';


//Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    auth: authModule,
    // Add more modules as needed
  },
});