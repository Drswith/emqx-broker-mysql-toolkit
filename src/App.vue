<!--
 * @Author: Drswith
 * @Date: 2021-06-27 18:05:51
 * @LastEditors: Drswith
 * @LastEditTime: 2021-06-30 12:33:45
 * @FilePath: \emqx-community-mysql-toolkit\src\App.vue
-->
<template>
  <div id="app">
    <Setup />
    <!-- <Main /> -->
  </div>
</template>

<script>
import Main from "./view/Main.vue";
import Setup from "./view/Setup.vue";
import "./style/iconfont.js";

export default {
  components: {
    Setup,
    Main,
  },
};
</script>

<style lang='scss'>
@import '@/style/style.scss';
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  box-sizing: border-box;
  font-size: $base-font-size;
  font-weight: $base-font-weight;
}
body {
  font-family: Roboto, Helvetica Neue, Helvetica, Work sans, Arial, sans-serif;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $app-color-text;
  background-color: $app-bg;
  margin: 0;
}
</style>
