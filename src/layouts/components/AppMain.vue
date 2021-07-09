<!--
 * @Author: Drswith
 * @Date: 2021-06-27 18:34:01
 * @LastEditors: Drswith
 * @LastEditTime: 2021-07-09 22:29:04
 * @FilePath: \emqx-broker-mysql-toolkit\src\layouts\components\AppMain.vue
-->
<template>
  <div class="app-main-container">
    <!-- 标题 -->
    <div class="app-main__header">
      <div>
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
  padding: 2.4rem;
  box-sizing: border-box;
}

.app-main {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2.4rem;
    color: $nav-color-text;
    margin-bottom: 1rem;
  }
  &__body {
    font-size: 1.4rem;
  }
}
</style>
