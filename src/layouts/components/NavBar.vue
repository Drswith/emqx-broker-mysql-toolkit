<!--
 * @Author: Drswith
 * @Date: 2021-06-27 22:13:48
 * @LastEditors: Drswith
 * @LastEditTime: 2021-07-09 22:26:14
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
  font-size: 2.4rem;
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
      font-size: 1.4rem;
      border: 0.1rem solid $nav-color-text;
      padding: 0.8rem;
      border-radius: 10rem;
    }
  }
}

a {
  text-decoration: none;
  color: $nav-color-text;
}
</style>
