<!--
 * @Author: Drswith
 * @Date: 2021-06-29 20:33:48
 * @LastEditors: Drswith
 * @LastEditTime: 2021-06-30 13:37:20
 * @FilePath: \emqx-community-mysql-toolkit\src\components\SetupBegin.vue
-->
<template>
  <div class="container">
    <div>
      <Logo />
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
    onNextStepClick(){
      this.$emit("onNextStepClick");
    }
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
@import "@/style/style.scss";
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
}

.welcome {
  font-size: 24px;
  margin-bottom: 4px;
}
.desc {
  font-size: 18px;
  margin-bottom: 50px;
}
// .btn {
//   height: 36px;
//   width: 145px;
//   border-radius: 4px;
//   transition: border-color 0.3s, background-color 0.3s, color 0.3s;
//   cursor: pointer;
//   user-select: none;
//   color: $base-color-white;
//   background-color: $color-primary;
//   border: none;
//   &:hover {
//     background-color: mix($color-primary, $base-color-black,75) ;
//   }
// }
</style>
