import Vue from "vue";
import Vuex from "vuex";
import welcomeModule from './modules/welcome/index.js';
import stockModule from './modules/stock/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
  state: { },
  mutations: {},
  actions: {},
  modules: {},
  welcome: welcomeModule,
  stock: stockModule,
  }

});


// import { createStore } from 'vuex';

// import welcomeModule from './modules/welcome/index.js';



// const store = createStore({
//   modules: {
//     welcome: welcomeModule

//   },

// });

// export default store;

