/*
 * @Author: Drswith
 * @Date: 2021-07-08 20:29:49
 * @LastEditors: Drswith
 * @LastEditTime: 2021-07-08 21:00:03
 * @FilePath: \emqx-broker-mysql-toolkit\src\store\store.js
 */
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    mainCurrentView: 0,
    setupCurrentView: 0,
  },
  mutations: {
    CHANGE_MAIN(state, i) {
      state.mainCurrentView = i;
    },
  },
});

export default store;
