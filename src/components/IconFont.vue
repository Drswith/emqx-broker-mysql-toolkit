<!--
 * @Author: Drswith
 * @Date: 2021-06-27 19:43:16
 * @LastEditors: Drswith
 * @LastEditTime: 2021-06-27 20:08:32
 * @FilePath: \emqx-community-mysql-toolkit\src\components\IconFont.vue
-->
<template>
  <svg :class="`icon ${customClass?customClass:'icon-default'}`" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>
<script>
export default {
  name: "IconFont",
  components: {},
  props: {
    name: String,
    customClass: String,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  watch: {},
};
</script>
<style type="text/css">
.icon {
  /* width: 1em; height: 1em; */
  /* vertical-align: -0.15em; */
  fill: currentColor;
  overflow: hidden;
}
.icon-default{
  width: 1em; height: 1em;
}
</style>
