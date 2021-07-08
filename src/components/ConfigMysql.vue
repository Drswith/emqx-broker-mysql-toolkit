<!--
 * @Author: Drswith
 * @Date: 2021-06-29 21:21:04
 * @LastEditors: Drswith
 * @LastEditTime: 2021-06-30 13:42:19
 * @FilePath: \emqx-broker-mysql-gadget\src\components\ConfigMysql.vue
-->
<template>
  <div class="setup-container">
    <div class="step">{{ name }} 配置</div>
    <div class="step__item">
      <div class="step__item-title">请输入 {{ name }} 部署地址</div>
      <input class="dark-input" type="text" />
    </div>
    <div class="step__item">
      <div class="step__item-title">请输入 {{ name }} 连接端口</div>
      <input class="dark-input" type="number" />
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
      <div class="step__item-title">请输入使用的 {{ name }} 数据库名称</div>
      <input class="dark-input" type="text" />
    </div>
    <div>
      <button class="btn" @click="onPreviousStepClick">上一步</button>
      <button class="btn btn__primary" @click="onNextStepClick">测试连接</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ConfigMysql",
  components: {},
  props: {},
  data() {
    return {
      name: "MySQL ",
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
