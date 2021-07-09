<!--
 * @Author: Drswith
 * @Date: 2021-06-27 18:33:20
 * @LastEditors: Drswith
 * @LastEditTime: 2021-07-09 09:29:57
 * @FilePath: \emqx-community-mysql-toolkit\src\layouts\components\SideBar.vue
-->
<template>
  <div class="side-bar-container">
    <Logo title="Dashboard" />
    <div class="menu">
      <div
        v-for="(item, idx) in menuConfig"
        :key="idx"
        :class="
          mainCurrentView == idx ? 'menu__item menu__item-active' : 'menu__item'
        "
        @click="_onClick(idx)"
      >
        <icon-font :name="item.icon" customClass="menu__item-img" />
        <div>{{ item.label }}</div>
        <input
          v-show="false"
          type="radio"
          :name="item.name"
          :value="idx"
          v-model="mainCurrentView"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import Logo from "@/components/Logo.vue";
import menuConfig from "@/config/menu";
export default {
  name: "SideBar",
  components: { Logo },
  props: {},
  data() {
    return {
      menuConfig,
    };
  },
  created() {},
  mounted() {},
  methods: {
    ...mapMutations({
      changeMain: "CHANGE_MAIN", // 将 `this.changeMain()` 映射为 `this.$store.commit('CHANGE_MAIN')`
    }),
    _onClick(idx) {
      this.changeMain(idx);
    },
  },
  computed: {
    mainCurrentView: {
      get() {
        return this.$store.state.mainCurrentView;
      },
      set(value) {
        this.changeMain(value);
      },
    },
  },
  created() {},
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
