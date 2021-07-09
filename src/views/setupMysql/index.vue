<!--
 * @Author: Drswith
 * @Date: 2021-06-29 21:21:04
 * @LastEditors: Drswith
 * @LastEditTime: 2021-07-09 21:14:56
 * @FilePath: \emqx-broker-mysql-toolkit\src\views\setupMysql\index.vue
-->
<template>
  <div class="page-container">
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
      <button class="btn" @click="onPreviousClick">上一步</button>
      <button class="btn btn__primary" @click="onNextClick">测试连接</button>
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
    onPreviousClick() {
      this.$router.back()
    },
    onNextClick() {
       this.$router.push({name:'Main'})
    },
  },
  computed: {},
  watch: {},
};
</script>
<style lang="scss" scoped>
@import "@/styles/index.scss";
</style>
