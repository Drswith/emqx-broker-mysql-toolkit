<!--
 * @Author: Drswith
 * @Date: 2021-06-29 21:21:04
 * @LastEditors: Drswith
 * @LastEditTime: 2021-06-30 13:40:33
 * @FilePath: \emqx-broker-mysql-gadget\src\components\ConfigEmqx.vue
-->
<template>
  <div class="setup-container">
    <div class="step">{{ name }} 配置</div>
    <div class="step__item">
      <div class="step__item-title">请输入 {{ name }} 部署地址</div>
      <input class="dark-input" type="text" />
    </div>
    <div class="step__item">
      <div class="step__item-title">请输入 {{ name }} 管理用户名</div>
      <input class="dark-input" type="text" />
    </div>
    <div class="step__item">
      <div class="step__item-title">请输入 {{ name }} 管理密码</div>
      <input class="dark-input" type="text" />
    </div>
    <div class="step__item">
      <div class="step__item-title">请输入 {{ name }} HTTP API端口</div>
      <input class="dark-input" type="number" />
    </div>
    <div>
      <button class="btn" @click="onPreviousStepClick">上一步</button>
      <button class="btn btn__primary" @click="onNextStepClick">测试连接</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ConfigEmq",
  components: {},
  props: {},
  data() {
    return {
      name: "EMQ X Community ",
    };
  },
  created() {},
  mounted() {},
  methods: {
    onPreviousStepClick() {
      this.$emit("onPreviousStepClick");
    },
    onNextStepClick() {
      this.$emit("onNextStepClick");
    },
  },
  computed: {},
  watch: {},
};
</script>
<style lang="scss" scoped>
@import "@/style/style.scss";
</style>
