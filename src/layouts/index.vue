<!--
 * @Author: Drswith
 * @Date: 2021-07-09 09:27:39
 * @LastEditors: Drswith
 * @LastEditTime: 2021-07-09 10:22:08
 * @FilePath: \emqx-community-mysql-toolkit\src\layouts\index.vue
-->
<template>
  <div class="container">
    <!-- 左侧边栏 -->
    <SideBar />
    <!-- 右侧内容区 -->
    <AppMain />
  </div>
</template>
<script>
import SideBar from './components/SideBar.vue'
import AppMain  from './components/AppMain.vue'

export default {
  name: 'Layout',
  components: {
    SideBar,
    AppMain
  },
  props: {
    
  },
  data () {
    return {
      
    }
  },
  created () {
    
  },
  mounted () {
    
  },
  methods: {
    
  },
  computed: {
    
  },
  watch: {
    
  }
}
</script>
<style lang="scss" scoped>

</style>
