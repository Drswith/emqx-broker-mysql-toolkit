<!--
 * @Author: Drswith
 * @Date: 2021-06-27 18:34:01
 * @LastEditors: Drswith
 * @LastEditTime: 2021-07-09 09:29:44
 * @FilePath: \emqx-community-mysql-toolkit\src\layouts\components\AppMain.vue
-->
<template>
  <div class="app-main-container">
    <!-- 标题 -->
    <div class="app-main__header">
      <div class="app-main__header-title">
        {{ menuConfig[mainCurrentView].label }}
      </div>
      <Nav />
    </div>
    <!-- 内容 -->
    <div class="app-main__body">
      占位符 {{ menuConfig[mainCurrentView].label }}
    </div>
  </div>
</template>
<script>
import menuConfig from "@/config/menu";
import Nav from "@/layout/Nav.vue";
export default {
  name: "AppMain",
  components: { Nav },
  props: {},
  data() {
    return {
      menuConfig,
    };
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {
    mainCurrentView() {
      return this.$store.state.mainCurrentView;
    },
  },
  watch: {
    // mainCurrentView(newValue, oldValue) {
    //   console.log("change");
    // },
  },
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
