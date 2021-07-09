<!--
 * @Author: Drswith
 * @Date: 2021-06-27 18:05:51
 * @LastEditors: Drswith
 * @LastEditTime: 2021-07-09 09:38:52
 * @FilePath: \emqx-community-mysql-toolkit\src\App.vue
-->
<template>
  <div id="app">
    <button class="test-btn" @click="onClick">切换</button>
    <!-- <Setup v-if="status" />
    <Main v-else/> -->
  </div>
</template>

<script>
// import Main from "./view/Main.vue";
// import Setup from "./view/Setup.vue";
import "@/styles/iconfont.js";

export default {
  data(){
    return{
      status:false
    }
  },
  components: {
    // Setup,
    // Main,
  },
  methods:{
    onClick(){
      this.status = !this.status
    }
  }
};
</script>

<style lang="scss">
</style>
