// 侧边栏状态管理 和 顶部导航栏管理
import Vue from 'vue'
import Vuex from 'vuex'
import utils from '../utils/util'
Vue.use(Vuex)

// 数据状态
const state = {
  // 当前展示选项卡的信息
  editableTabsValue: {name: 'top_index', path: null},
  editableTabs: [{
    title: '首页',          // tab栏标题
    name: 'top_index',      // tab栏类似id
    path: '/',              // tab 路径
    close: true             // 是否允许关闭
  }],
  sideNavWidth: '200px',
  // 当前页面加载的新闻id
  news_id: null,
  // 需要更新的页面
  notAlivePage: 'top_detail',
  // 记录文章列表滚动条距离顶部距离
  scroll_top: 0
}
// 修改数据状态
const mutations = {
  // 增加(原始值，传递值)   同步修改
  addNavTab (state, value) {
    new Promise((resolve) => {
      let sameTabId = null
      for (let i of state.editableTabs) {
        if (i.name === value.id) {
          // 在文章详情页面，只改变navTab名称，不增加新的选项卡
          if (i.name === 'top_detail') {
            i.title = value.name
          }
          sameTabId = i.name
          break
        }
      }
      resolve(sameTabId)
    })
    // 判断是否选项卡中已经有了当前选中的内容路径
    .then((id) => {
      if (id === null) {
        state.editableTabs.push({
          title: value.name,
          name: value.id,
          path: value.path
        })
        state.editableTabsValue.name = value.id
      } else {
        state.editableTabsValue.name = id
      }
      state.editableTabsValue.path = value.path
    })
  },
  // 修改当前tab
  changeTab (state, targetName) {
    let tabs = state.editableTabs
    let activeName = state.editableTabsValue.name
    state.editableTabsValue.path = state.editableTabsValue.path || state.editableTabs[0].path
    // 判断 当前删除的选项卡 是 当前展示的这个选项卡
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        // 找到当前这个选项卡
        if (tab.name === targetName) {
          let nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
            state.editableTabsValue.path = nextTab.path
          }
        }
      })
    }
    state.editableTabsValue.name = activeName
    // 删除选项组中的元素
    state.editableTabs = tabs.filter(tab => tab.name !== targetName)
  },
  // 点击头部导航栏改变active Path   没有模板，所以需要手动绑定
  clickTabChange (state, target) {
    state.editableTabsValue.path = target
  },
  // 侧边栏是否收缩
  changeContentWidth (state, coll) {
    state.sideNavWidth = coll ? '70px' : '200px'
  },
  // 更新当前新闻id的值
  change_newsId (state, id) {
    // 判断第二次打开的详情页面是否是之前的页面
    if (state.news_id !== id) {
      state.notAlivePage = 'top_detail'
      state.news_id = id
    } else {
      state.notAlivePage = 'top_detail'
    }
  },
  // 改变loading状态
  change_loading (state, judge) {
    state.view_loading = judge
  },
  // 添加对象
  addObjTest (state, obj) {
    Vue.set(state, obj.key, obj.value)
    // 第二种设置方法
    // state = {...state, [obj.key]: obj.value}
  },
  change_scrollData (state, scrollTop) {
    state.scroll_top = scrollTop
  }
}
// 派生测试
const getters = {
  test_navLength () {
    return state.editableTabs.length
  }
}
// 异步处理
const actions = {
  async addObjTestAsync ({ commit, dispatch }, obj) {
    await dispatch('waitRequest')
    console.log('读取成功！')
    setTimeout(() => {
      commit('addObjTest', obj)
      console.log('设置完成！')
    }
    , 300)
  },
  waitRequest () {
    return new Promise(async resolve => {
      for (let i = 1; i <= 10; i++) {
        await utils.sleep(1000)
        console.log(`读取中${i}0%`)
      }
      resolve()
    })
  }
}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
