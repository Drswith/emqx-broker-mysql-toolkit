<!--
 * @Author: Drswith
 * @Date: 2021-06-27 18:05:51
 * @LastEditors: Drswith
 * @LastEditTime: 2021-07-09 20:48:34
 * @FilePath: \emqx-broker-mysql-toolkit\src\App.vue
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "@/styles/iconfont.js";

export default {
  name:'App',
  data(){
    return{
      status:true
    }
  }
};
</script>

<style lang="scss">
</style>
