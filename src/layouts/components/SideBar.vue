<!--
 * @Author: Drswith
 * @Date: 2021-06-27 18:33:20
 * @LastEditors: Drswith
 * @LastEditTime: 2021-07-09 22:26:51
 * @FilePath: \emqx-broker-mysql-toolkit\src\layouts\components\SideBar.vue
-->
<template>
  <div class="side-bar-container">
    <Logo title="Dashboard" />
    <router-link
      v-for="(item, idx) in menu"
      :key="idx"
      :to="{ name: item.name }"
      v-slot="{ navigate, isActive }"
      custom
    >
      <div class="menu">
        <div
          :class="isActive ? 'menu__item menu__item-active' : 'menu__item'"
          @click="navigate"
        >
          <icon-font :name="item.meta.icon" customClass="menu__item-img" />
          <div>{{ item.meta.title }}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
import Logo from "@/components/Logo.vue";
import { constantRoutes } from "@/routers";
export default {
  name: "SideBar",
  components: { Logo },
  props: {},
  data() {
    return {
      menu: [],
    };
  },
  created() {},
  mounted() {},
  methods: {
  },
  computed: {
  },
  created() {
    constantRoutes.forEach((item) => {
      if (item.name == "Main") {
        this.menu = item.children;
      }
    });
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/index.scss";
.side-bar-container {
  background-color: $sidebar-bg;
  box-sizing: border-box;
}

.menu {
  &__item {
    display: flex;
    align-items: center;
    height: 3.6rem;
    width: 14.5rem;
    border-radius: 0.4rem;
    margin: 1rem;
    padding: 0 2rem;
    transition: border-color 0.3s, background-color 0.3s, color 0.3s,
      box-shadow 0.3s;
    cursor: pointer;
    user-select: none;
    &:hover {
      color: $sidebar-item-hover-color-text;
      background-color: $sidebar-item-hover;
    }
    &-img {
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
    }
    &-active {
      color: $sidebar-item-active-color-text !important;
      background-color: $sidebar-item-active !important;
      box-shadow: 0 0 0.5rem 0 $sidebar-item-active-shadow !important;
    }
  }
}
</style>
