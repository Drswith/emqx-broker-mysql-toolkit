<!--
 * @Author: Drswith
 * @Date: 2021-06-27 18:11:58
 * @LastEditors: Drswith
 * @LastEditTime: 2021-07-08 20:56:28
 * @FilePath: \emqx-broker-mysql-toolkit\src\view\Main.vue
-->
<template>
  <div class="container">
    <!-- 左侧边栏 -->
    <SideBar />
    <!-- 右侧内容区 -->
    <Content />
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
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
