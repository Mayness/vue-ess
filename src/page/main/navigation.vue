<template>
  <div>
    <h2 class="contentBox_title">导航类类</h2>
    <div class="contentBox_item">
      <NavMenu/>
      <Tabs/>
      <el-tag>Tabs 标签页</el-tag>
      <div class="contentBox_Content">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <el-tag>下拉菜单</el-tag>
      <div class="contentBox_Content">
        <el-dropdown split-button type="primary" @click="handleClick">
          更多菜单
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

      <el-tag>步骤条</el-tag>
      <div class="contentBox_Content">
        <el-steps :active="active" finish-status="success">
          <el-step title="步骤 1" description="描述文字1"></el-step>
          <el-step title="步骤 2" description="描述文字2"></el-step>
          <el-step title="步骤 3" description="描述文字3"></el-step>
        </el-steps>

        <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import NavMenu from '@/components/navigation/navMenu'
  import Tabs from '@/components/navigation/tabs'
  export default {
    data () {
      return {
        active: 0
      }
    },
    methods: {
      next () {
        if (this.active++ > 2) this.active = 0
      }
    },
    components: {NavMenu, Tabs}
  }
</script>

<style scoped>

</style>