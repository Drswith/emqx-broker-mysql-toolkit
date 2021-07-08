<!--
 * @Author: Drswith
 * @Date: 2021-06-27 18:11:58
 * @LastEditors: Drswith
 * @LastEditTime: 2021-06-29 20:36:21
 * @FilePath: \emqx-broker-mysql-gadget\src\view\Main.vue
-->
<template>
  <div class="container">
    <!-- 左侧边栏 -->
    <SideBar
      @sideBarClick="(currentView) => (this.currentView = currentView)"
    />
    <!-- 右侧内容区 -->
    <Content :value="currentView" />
  </div>
</template>

<script>
import SideBar from "@/layout/SideBar.vue";
import Content from "@/layout/Content.vue";
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
  width: 800px;
  border-radius: 8px;
  overflow: hidden;
  box-sizing: border-box;
}
</style>