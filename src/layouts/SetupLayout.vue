<!--
 * @Author: Drswith
 * @Date: 2021-06-29 19:48:20
 * @LastEditors: Drswith
 * @LastEditTime: 2021-07-09 22:24:10
 * @FilePath: \emqx-broker-mysql-toolkit\src\layouts\SetupLayout.vue
-->
<template>
  <div class="container">
    <div class="setup-container">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  name: "SetupLayout"
};
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
.setup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 0.8rem;
  overflow: hidden;
  box-sizing: border-box;
  background-color: $content-bg;
}
</style>
<style lang="scss" >
@import "@/styles/index.scss";

.step {
  color: $color-text-2;
  font-size: 2.4rem;
  margin-bottom: 2.4rem;
  &__item {
    margin-bottom: 2rem;
    &-title {
      color: #a7a7a7;
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
  }
}
</style>