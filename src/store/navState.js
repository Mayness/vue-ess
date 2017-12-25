// 侧边栏状态管理 和 顶部导航栏管理
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 数据状态
const state = {
  // 当前展示的选项卡
  editableTabsValue: {str: '1'},
  editableTabs: [{
    title: '首页',        // tab栏标题
    name: '1',           // tab栏类似id
    path: '/',           // tab 路径
    close: true          // 是否允许关闭
  }],
  activeTab: {path: null},
  sideNavWidth: '200px'
}
// 修改数据状态
const mutations = {
  // 增加(原始值，传递值)   同步修改
  addNavTab (state, value) {
    new Promise((resolve) => {
      let sameTab = null
      for (let i of state.editableTabs) {
        if (i.path === value.path) {
          sameTab = i.name
          break
        }
      }
      resolve(sameTab)
    })
    // 判断是否选项卡中已经有了当前选中的内容路径
    .then((judge) => {
      if (judge === null) {
        let navLength = state.editableTabs.length
        let newTabName = ++navLength + ''
        state.editableTabs.push({
          title: value.name,
          name: newTabName,
          path: value.path
        })
        state.editableTabsValue.str = newTabName
      } else {
        state.editableTabsValue.str = judge
      }
    })
  },
  // 修改当前tab
  changeTab (state, targetName) {
    let tabs = state.editableTabs
    let activeName = state.editableTabsValue.str
    state.activeTab.path = state.editableTabs[0].path
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          let nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
            state.activeTab.path = nextTab.path
          }
        }
      })
    }
    state.editableTabsValue.str = activeName
    state.editableTabs = tabs.filter(tab => tab.name !== targetName)
  },
  // 侧边栏是否收缩
  changeContentWidth (state, coll) {
    state.sideNavWidth = coll ? '70px' : '200px'
  }
}
export default new Vuex.Store({
  state,
  mutations
})
