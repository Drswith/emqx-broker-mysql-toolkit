<!--
 * @Author: Drswith
 * @Date: 2021-06-29 19:48:20
 * @LastEditors: Drswith
 * @LastEditTime: 2021-07-09 20:48:58
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
  border-radius: 8px;
  overflow: hidden;
  box-sizing: border-box;
  background-color: $content-bg;
}
</style>
<style lang="scss" >
@import "@/styles/index.scss";

.step {
  color: $color-text-2;
  font-size: 24px;
  margin-bottom: 24px;
  &__item {
    margin-bottom: 20px;
    &-title {
      color: #a7a7a7;
      font-size: 14px;
      margin-bottom: 10px;
    }
  }
}
</style>