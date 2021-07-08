<!--
 * @Author: Drswith
 * @Date: 2021-06-29 19:48:20
 * @LastEditors: Drswith
<<<<<<< HEAD
 * @LastEditTime: 2021-06-30 13:41:04
 * @FilePath: \emqx-broker-mysql-gadget\src\view\Setup.vue
=======
 * @LastEditTime: 2021-07-08 10:08:19
 * @FilePath: \emqx-community-mysql-toolkit\src\view\Setup.vue
>>>>>>> 8597860a3c2c063b23bae0e6f25e9a3eaa3857f9
-->
<template>
  <div class="container">
    <div class="setup-container">
    <div v-show="step === 0">
      <SetupBegin
        @onPreviousStepClick="onPreviousStepClick"
        @onNextStepClick="onNextStepClick"
      />
    </div>
    <div v-show="step === 1">
      <ConfigEmqx
        @onPreviousStepClick="onPreviousStepClick"
        @onNextStepClick="onNextStepClick"
      />
    </div>
    <div v-show="step === 2">
      <ConfigMysql
        @onPreviousStepClick="onPreviousStepClick"
        @onNextStepClick="onNextStepClick"
      />
    </div>
  </div>
  </div>
</template>

<script>
import SetupBegin from "@/components/SetupBegin.vue";
import ConfigEmqx from "@/components/ConfigEmqx.vue";
import ConfigMysql from "@/components/ConfigMysql.vue";
export default {
  components: {
    SetupBegin,
    ConfigEmqx,
    ConfigMysql,
  },
  name: "Setup",
  data() {
    return {
      step: 0,
    };
  },
  methods: {
    onPreviousStepClick() {
      this.step--;
    },
    onNextStepClick() {
      this.step++;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";
.setup-container {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // min-height: 600px;
  // max-width: 800px;
  // width: 100%;
  // border-radius: 8px;
  // overflow: hidden;
  // box-sizing: border-box;
  background-color: $content-bg;
}
</style>
<style lang="scss" >
@import "@/style/style.scss";
// .setup-container {
//   min-height: 80%;
// }

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