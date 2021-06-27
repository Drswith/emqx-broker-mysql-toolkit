<!--
 * @Author: Drswith
 * @Date: 2021-06-27 18:11:58
 * @LastEditors: Drswith
 * @LastEditTime: 2021-06-27 21:47:41
 * @FilePath: \emqx-community-mysql-toolkit\src\view\Main.vue
-->
<template>
  <div class="container">
    <!-- 左侧边栏 -->
    <SideBar @sideBarClick="(currentView) => (this.currentView = currentView)" />
    <!-- 右侧内容区 -->
    <Content :value="currentView" />
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import Content from "../components/Content.vue";
export default {
  components: {
    SideBar,
    Content,
  },
  name: "Main",
  data() {
    return {
      currentView: 0,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  min-height: 600px;
  border-radius: 8px;
  overflow: hidden;
  box-sizing: border-box;
}
</style>