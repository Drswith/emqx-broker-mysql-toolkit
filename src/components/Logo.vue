<!--
 * @Author: Drswith
 * @Date: 2021-06-27 19:12:47
 * @LastEditors: Drswith
 * @LastEditTime: 2021-07-09 22:27:33
 * @FilePath: \emqx-broker-mysql-toolkit\src\components\Logo.vue
-->
<template>
  <div class="logo-container">
    <img class="logo__img" alt="Vue logo" src="../assets/emqx-logo.svg" />
    <div class="logo__title">{{title}}</div>
  </div>
</template>
<script>
export default {
  name: "Logo",
  components: {},
  props: {
    title:String
  },
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
  padding: 2.4rem 0;
}
.logo {
  &__img {
    width: 6rem;
    height: 6rem;
    margin: 0 0 0.8rem;
  }
  &__title{
    color: #fff;
    font-size: 1.8rem;
  }
}
</style>
