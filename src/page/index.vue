<template>
  <div>
    <el-container>
      <el-header height="90px">
        <indexHeader/>
      </el-header>
      <el-container>
        <el-aside :width="sideNavWidth" height="700px">
          <side-nav/>
        </el-aside>
        <el-main>
          <el-tabs v-if="editableTabsValue.str" v-model="editableTabsValue.str" type="card" @tab-remove="removeTab" @tab-click="clickTab">
            <el-tab-pane
              v-for="(item) in editableTabs"
              :key="item.name"
              :label="item.title"
              :name="item.name"
              :closable="!item.close"
            >
              <transition name="el-fade-in-linear">
                <router-view  v-show="true"/>
              </transition>
            </el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  // 侧边导航栏
  import sideNav from '@/components/index/side-nav'
  // 头部
  import indexHeader from '@/components/index/header'
  // 顶部导航栏状态
  import store from '@/store/navState'
  import { mapState } from 'vuex'
  export default {
    name: 'index',
    // 必须要用store名字
    data () {
      return {}
    },
    store,
    async mounted () {
      // 内容栏防止高度溢出
      this.page_resize()
      $(window).resize(() => {
        this.page_resize()
      })
      // 进入页面默认跳入active选项卡路径
      await this.sleep_getActiveTab()
      this.$router.push(this.activeTab.path)
    },
    methods: {
      // 防止内容栏高度溢出
      page_resize () {
        let contentHeight = $(window).height() - $('.index_header').height()
        $('.is-vertical .el-container').css({position: 'relative', height: `${contentHeight}px`})
        $('.el-tabs__content').css({position: 'relative', height: `${contentHeight - 70}px`, overflow: 'auto'})
      },
      // 移除选项卡
      removeTab (targetName) {
        store.commit('changeTab', targetName)
        this.$router.push(this.activeTab.path)
      },
      clickTab (target) {
        for (let i of this.editableTabs) {
          if (i.name === target.name) {
            this.$router.push(i.path)
          }
        }
      },
      // 读取当前选项卡
      sleep_getActiveTab () {
        return new Promise(resolve => {
          store.commit('changeTab', null)
          resolve()
        })
      }
      // 监听侧边栏宽度 内容栏发生相应的变化
      // changeContentWidth (Coll) {
      //   console.log(Coll)
      // }
    },
    computed: {
      ...mapState(['editableTabsValue', 'editableTabs', 'activeTab', 'sideNavWidth'])
    },
    components: {sideNav, indexHeader}
  }
</script>

<style lang='scss' scoped>
@import '../style/scss/index';
.nav{
  height: 100%;
}
.el-header{
  padding: 0
}
.el-main{
  padding: 5px;
}

</style>