<!--
 * @Author: Drswith
 * @Date: 2021-06-29 20:33:48
 * @LastEditors: Drswith
 * @LastEditTime: 2021-07-09 20:42:08
 * @FilePath: \emqx-broker-mysql-toolkit\src\views\setupBegin\index.vue
-->
<template>
  <div class="page-container">
    <div class="page-logo">
      <div class="page-logo__container">
        <img
          class="page-logo__img"
          alt="EMQ X logo"
          src="../../assets/emqx-logo.svg"
        />
        <!-- <div class="logo__title">{{ title }}123</div> -->
      </div>
      <img style="height: 36px" src="../../assets/x.svg" />
      <div class="page-logo__container">
        <img
          class="page-logo__img"
          alt="MySQL logo"
          src="../../assets/mysql-logo.png"
        />
        <!-- <div class="logo__title">{{ title }}456</div> -->
      </div>
    </div>
    <div class="welcome">欢迎使用 {{ tookitName }}</div>
    <div class="desc">简单几步将你的数据持久化</div>
    <button class="btn btn__primary" @click="onNextClick">立即开始</button>
  </div>
</template>
<script>
import npmConfig from "../../../package.json";
import { titleCase } from "@/utils/utils";

import Logo from "@/components/Logo.vue";

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
    onNextClick() {
      this.$router.push({ name: "SetupEmqx" });
    },
  },
  computed: {
    tookitName() {
      let newName = name.replace("Emqx", "EMQ X");
      newName = newName.replace("sql", "SQL");
      return newName;
    },
  },
  watch: {},
};
</script>
<style lang="scss" scoped>
@import "@/styles/index.scss";
.page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.page-logo {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 250px;
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px 0;
  }
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
