// 子集导航（主要内容跳转）
const IndexView = resolve => require(['@/page/main/index_view'], resolve)
const FormTemple = resolve => require(['@/page/main/form'], resolve)
const TableTemple = resolve => require(['@/page/main/table'], resolve)
const Notice = resolve => require(['@/page/main/notice'], resolve)
const Navigation = resolve => require(['@/page/main/navigation'], resolve)
const Other = resolve => require(['@/page/main/other'], resolve)
export default [
  {
    path: '',
    name: 'top_index',
    component: IndexView
  },
  {
    path: 'form',
    name: 'top_form',
    component: FormTemple
  },
  {
    path: 'table',
    name: 'top_table',
    component: TableTemple
  },
  {
    path: 'notice',
    name: 'top_notice',
    component: Notice
  },
  {
    path: 'navigation',
    name: 'top_navigation',
    component: Navigation
  },
  {
    path: 'other',
    name: 'top_other',
    component: Other,
    meta: {
      require: true
    }
  }
]
