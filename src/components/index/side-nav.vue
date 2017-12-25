<template>
  <div>
    <el-menu 
      width="300px"
      class="el-menu-vertical-demo" 
      @select="handleSelect"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      router
    >
      <el-tooltip class="item iconfont_box" :content="isCollapse ? '开启菜单' : '关闭菜单'" placement="top">
        <i :class="isCollapse ? 'iconfont icon-iconset2' : 'iconfont icon-iconset1'" @click="collapse"></i>
      </el-tooltip>
      <el-submenu v-for="(item, index) of sideNav" :key="index" :index='item.pathId'>
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{item.menuName}}</span>
        </template>
        <el-menu-item v-for="(menuItem, menuIdx) of item.menuArray" :key="menuIdx" :index="menuItem.path">{{menuItem.name}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>


<style scope lang='scss'>
  @import '../../style/base/color';
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    position: absolute;
    width: 200px;
    height: 100%;
  }
  .el-submenu .el-menu-item{
    & {
      min-width: auto;
    }
    &.is-active {
      color: $mColor
    }
  }
  .el-menu--collapse{
    position: absolute;
    height: 100%;
  }
  .iconfont_box{
    & {
      position: absolute;
      z-index: 2;
      right: 20px;
      top: 5px;
      padding: 1px;
      background: #333;
      cursor: pointer;
      font-size: 20px;
      color: #ccc
    }
  }
  .el-menu-vertical-demo:first-child li[aria-haspopup]:first-of-type{
    margin-top: 30px;
  }
</style>

<script>
  import store from '@/store/navState'
  import sideNav from '@/config/navSide.json'
  export default {
    data () {
      return {
        touchIcon: false,
        isCollapse: false,
        activeIdx: null,
        sideNav,
        side_navArray: []
      }
    },
    mounted () {
      this.init_navArray()
    },
    watch: {
      isCollapse (judg) {
        store.commit('changeContentWidth', judg)
      }
    },
    methods: {
      // 获得只有导航的侧边栏数组信息
      init_navArray () {
        var nav = []
        for (let i of sideNav) {
          nav = nav.concat(i.menuArray)
        }
        this.side_navArray = nav
      },
      handleSelect (key) {
        for (let i of this.side_navArray) {
          if (i.path === key) {
            store.commit('addNavTab', i)
          }
        }
      },
      collapse () {
        this.isCollapse = !this.isCollapse
      }
    },
    store
  }
</script>