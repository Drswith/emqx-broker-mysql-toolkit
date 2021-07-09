<!--
 * @Author: Drswith
 * @Date: 2021-06-27 18:34:01
 * @LastEditors: Drswith
 * @LastEditTime: 2021-07-09 21:53:13
 * @FilePath: \emqx-broker-mysql-toolkit\src\layouts\components\AppMain.vue
-->
<template>
  <div class="app-main-container">
    <!-- 标题 -->
    <div class="app-main__header">
      <div class="app-main__header-title">
        {{pageTitle}}
      </div>
      <NavBar />
    </div>
    <!-- 内容 -->
    <div class="app-main__body">
      <router-view />
    </div>
  </div>
</template>
<script>
import NavBar from "./NavBar.vue";
export default {
  name: "AppMain",
  components: { NavBar },
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {
    pageTitle(){
      return this.$route.meta.title
    }
  },
  watch: {},
};
</script>
<style lang="scss" scoped>
@import "@/styles/index.scss";
.app-main-container {
  width: 100%;
  background-color: $content-bg;
  padding: 24px;
  box-sizing: border-box;
}

.app-main {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    color: $nav-color-text;
  }
  &__body {
    font-size: 1.4rem;
  }
}
</style>
