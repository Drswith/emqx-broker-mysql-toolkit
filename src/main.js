/*
 * @Author: Drswith
 * @Date: 2021-06-27 18:05:51
 * @LastEditors: Drswith
 * @LastEditTime: 2021-07-09 09:38:42
 * @FilePath: \emqx-community-mysql-toolkit\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import store from "@/stores";

//  引入全局主题配置
import "@/styles/index.scss";

// 引入自定义icon iconfont
import IconFont from "@/components/IconFont.vue";
Vue.component("IconFont", IconFont);
Vue.use(IconFont);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
