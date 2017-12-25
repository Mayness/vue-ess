// 子集导航（主要内容跳转）
import IndexView from '@/page/main/index_view'
import FormTemple from '@/page/main/form'
import TableTemple from '@/page/main/table'
import Notice from '@/page/main/notice'
import Navigation from '@/page/main/navigation'
import Other from '@/page/main/other'
export default [
  {
    path: '/',
    component: IndexView
  },
  {
    path: 'form',
    component: FormTemple
  },
  {
    path: 'table',
    component: TableTemple
  },
  {
    path: 'notice',
    component: Notice
  },
  {
    path: 'navigation',
    component: Navigation
  },
  {
    path: 'other',
    component: Other
  }
]
