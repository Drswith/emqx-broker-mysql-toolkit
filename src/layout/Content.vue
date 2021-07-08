<!--
 * @Author: Drswith
 * @Date: 2021-06-27 18:34:01
 * @LastEditors: Drswith
 * @LastEditTime: 2021-06-30 12:33:09
 * @FilePath: \emqx-broker-mysql-gadget\src\layout\Content.vue
-->
<template>
  <div class="content-container">
    <!-- 标题 -->
    <div class="content__header">
      <div class="content__header-title">{{ menuConfig[value].label }}</div>
      <Nav />
    </div>
    <!-- 内容 -->
    <div class="content__body"></div>
  </div>
</template>
<script>
import menuConfig from "@/config/menu";
import Nav from "@/layout/Nav.vue";
export default {
  name: "Content",
  components: { Nav },
  props: {
    value: Number,
  },
  data() {
    return {
      menuConfig,
    };
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  watch: {},
};
</script>
<style lang="scss" scoped>
@import "@/style/style.scss";
.content-container {
  width:100%;
  background-color: $content-bg;
  padding: 24px;
  box-sizing: border-box;
}

.content {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    color: $nav-color-text;
  }
  &__body {
  }
}
</style>
