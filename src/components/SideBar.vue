<!--
 * @Author: Drswith
 * @Date: 2021-06-27 18:33:20
 * @LastEditors: Drswith
 * @LastEditTime: 2021-06-27 22:10:26
 * @FilePath: \emqx-community-mysql-toolkit\src\components\SideBar.vue
-->
<template>
  <div class="side-bar-container">
    <Logo />
    <div class="menu">
      <div
        v-for="(item, idx) in menuConfig"
        :key="idx"
        :class="current == idx ? 'menu__item menu__item-active' : 'menu__item'"
        @click="_onClick(idx)"
      >
        <icon-font :name="item.icon" customClass="menu__item-img" />
        <div>{{ item.label }}</div>
        <input
          v-show="false"
          type="radio"
          :name="item.name"
          :value="idx"
          v-model="current"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Logo from "./Logo.vue";
import menuConfig from "@/config/menu";
export default {
  name: "SideBar",
  components: { Logo },
  props: {},
  data() {
    return {
      menuConfig,
      current: 0,
    };
  },
  created() {},
  mounted() {},
  methods: {
    _onClick(idx) {
      this.current = idx;
    },
  },
  computed: {},
  watch: {
    current: function () {
      console.log(this.current);
      this.$emit("sideBarClick", this.current);
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/style/style.scss';
.side-bar-container {
  background-color: $sidebar-bg;
  box-sizing: border-box;
}

.menu {
  &__item {
    display: flex;
    align-items: center;
    height: 36px;
    width: 145px;
    border-radius: 4px;
    margin: 10px;
    padding: 0 20px;
    transition: border-color 0.3s, background-color 0.3s, color 0.3s,
      box-shadow 0.3s;
    cursor: pointer;
    user-select: none;
    &:hover {
      color: $sidebar-item-hover-color-text;
      background-color: $sidebar-item-hover;
    }
    &-img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
    &-active {
      color: $sidebar-item-active-color-text !important;
      background-color: $sidebar-item-active !important;
      box-shadow: 0 0 5px 0 $sidebar-item-active-shadow !important;
    }
  }
}
</style>
