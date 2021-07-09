<!--
 * @Author: Drswith
 * @Date: 2021-06-27 22:13:48
 * @LastEditors: Drswith
 * @LastEditTime: 2021-07-09 22:16:05
 * @FilePath: \emqx-broker-mysql-toolkit\src\layouts\components\NavBar.vue
-->
<template>
  <div class="nav-container">
    <router-link to="/main">
      <icon-font
        name="help"
        customClass=""
        style="font-size: 18px; margin-right: 20px"
      />
    </router-link>
    <a href="https://github.com" target="_blank">
      <div class="nav__tags-github">
        <div style="margin-right: 5px">Github</div>
        <icon-font name="github" customClass="" /></div
    ></a>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  watch: {},
};
</script>
<style lang="scss" scoped>
@import "@/styles/index.scss";
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  color: $nav-color-text;
}

.nav {
  &__tags {
    display: flex;
    align-items: center;
    &-github {
      cursor: pointer;
      user-select: none;
      display: flex;
      font-size: 14px;
      border: 1px solid $nav-color-text;
      padding: 8px;
      border-radius: 100px;
    }
  }
}

a {
  text-decoration: none;
  color: $nav-color-text;
}
</style>
