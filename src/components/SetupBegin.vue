<!--
 * @Author: Drswith
 * @Date: 2021-06-29 20:33:48
 * @LastEditors: Drswith
 * @LastEditTime: 2021-07-08 20:36:25
 * @FilePath: \emqx-broker-mysql-toolkit\src\components\SetupBegin.vue
-->
<template>
  <div class="container">
    <div class="logo">
      <div class="logo-container">
        <img class="logo__img" alt="EMQ X logo" src="../assets/emqx-logo.svg" />
        <!-- <div class="logo__title">{{ title }}123</div> -->
      </div>
      <img style="height:36px;" src="../assets/x.svg" />
      <div class="logo-container">
        <img class="logo__img" alt="MySQL logo" src="../assets/mysql-logo.png" />
        <!-- <div class="logo__title">{{ title }}456</div> -->
      </div>
    </div>
    <div class="welcome">欢迎使用 {{ tookitName }}</div>
    <div class="desc">简单几步将你的数据持久化</div>
    <button class="btn btn__primary" @click="onNextStepClick">立即开始</button>
  </div>
</template>
<script>
import npmConfig from "../../package.json";
import { titleCase } from "@/utils/utils";

import Logo from "@/layout/Logo.vue";

const name = titleCase(npmConfig.name, "-");

export default {
  name: "SetupBegin",
  components: {
    Logo,
  },
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    onNextStepClick() {
      this.$emit("onNextStepClick");
    },
  },
  computed: {
    tookitName() {
      return name.replace("Emqx", "EMQ X");
    },
  },
  watch: {},
};
</script>
<style lang="scss" scoped>
@import "@/styles/index.scss";
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
}
.logo-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
}
.logo {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 250px;
  &__img {
    height: 72px;
    margin: 0 0 8px;
  }
  &__title {
    color: #fff;
    font-size: 18px;
  }
}
.welcome {
  color: $color-text-2;
  font-size: 24px;
  margin-bottom: 4px;
}
.desc {
  color: $color-text-2;
  font-size: 18px;
  margin-bottom: 50px;
}
</style>
