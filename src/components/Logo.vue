<!--
 * @Author: Drswith
 * @Date: 2021-06-27 19:12:47
 * @LastEditors: Drswith
 * @LastEditTime: 2021-06-27 22:29:29
 * @FilePath: \emqx-community-mysql-toolkit\src\components\Logo.vue
-->
<template>
  <div class="logo-container">
    <img class="logo__img" alt="Vue logo" src="../assets/logo.png" />
    <div class="logo__title">Dashboard</div>
  </div>
</template>
<script>
export default {
  name: "Logo",
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
.logo-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
}
.logo {
  &__img {
    width: 60px;
    height: 60px;
    margin: 0 0 8px;
  }
  &__title{
    color: #fff;
    font-size: 18px;
  }
}
</style>
