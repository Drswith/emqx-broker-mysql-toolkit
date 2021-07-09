<!--
 * @Author: Drswith
 * @Date: 2021-06-29 21:21:04
 * @LastEditors: Drswith
 * @LastEditTime: 2021-07-09 20:43:30
 * @FilePath: \emqx-broker-mysql-toolkit\src\views\setupEmqx\index.vue
-->
<template>
  <div class="page-container">
    <div class="step">{{ name }} 配置</div>
    <div class="step__item">
      <div class="step__item-title">请输入 {{ name }} 部署地址</div>
      <input class="dark-input" type="text" />
    </div>
    <div class="step__item">
      <div class="step__item-title">请输入 {{ name }} 管理AppID</div>
      <input class="dark-input" type="text" />
    </div>
    <div class="step__item">
      <div class="step__item-title">请输入 {{ name }} 管理AppSecret</div>
      <input class="dark-input" type="text" />
    </div>
    <div class="step__item">
      <div class="step__item-title">请输入 {{ name }} HTTP API端口</div>
      <input class="dark-input" type="number" />
    </div>
    <div>
      <button class="btn" @click="onPreviousClick">上一步</button>
      <button class="btn btn__primary" @click="onNextClick">测试连接</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ConfigEmqx",
  components: {},
  props: {},
  data() {
    return {
      name: "EMQ X Broker ",
    };
  },
  created() {},
  mounted() {},
  methods: {
    onPreviousClick() {
      this.$router.back()
    },
    onNextClick() {
       this.$router.push({name:'SetupMysql'})
    },
  },
  computed: {},
  watch: {},
};
</script>
<style lang="scss" scoped>
@import "@/styles/index.scss";
</style>
