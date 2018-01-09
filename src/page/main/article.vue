<template>
  <div class="article_list">
    <h2>文章</h2>
    <ul>
      <li v-for="(item, index) in news_list" :key="index">
        <router-link :to="'article/' + item.id">
          <span @click="news_detail(item)">{{ item.title }}</span>
        </router-link>
        <time class="article_time" v-text="$utils.beautyTime(item.create_at)"></time>
      </li>
    </ul>
    <div class="article_loading">
      <div v-if="loading_animation">
        <i class="el-icon-loading"></i><span>加载中</span>
      </div>
      <div v-else>
        <hr/>
        <span>我是有底线的</span>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/store'
  import { mapState } from 'vuex'
  export default {
    name: 'top_article',
    data () {
      return {
        news_list: [],
        news_page: 1,
        loading_animation: true,
        // 防止滚动到底部多次加载，限制加载一次开关
        loading: true
      }
    },
    store,
    async mounted () {
      await this.get_data()
      this.$nextTick(() => {
        this.scroll_load()
      })
    },
    watch: {
      '$route' (to, from) {
        if (to.name === 'top_article') {
          this.$nextTick(() => {
            $('.el-tabs__content').scrollTop(this.scroll_top)
          })
        }
      }
    },
    methods: {
      news_detail (news) {
        // 即将离开记住滚动条高度
        let top = $('.el-tabs__content').scrollTop()
        store.commit('change_scrollData', top)
        // 截取标题名用作选项卡名
        let title = news.title.substr(0, 5)
        store.commit('addNavTab', {
          id: 'top_detail',
          name: `${title}...`,
          path: `article/${news.id}`
        })
      },
      get_data () {
        return new Promise(resolve => {
          this.$http.get('topics', {
            page: this.news_page
          }, (res) => {
            this.news_list = this.news_list.concat(res.data)
            resolve()
          }, (err) => {
            alert(`请求失败，请重试\nerror code:${err}`)
          })
        })
      },
      scroll_load () {
        $('.el-tabs__content').scroll(async () => {
          let boxHeight = $('.el-tabs__content').get(0).scrollHeight - $('.el-tabs__content').height()
          if (boxHeight - $('.el-tabs__content').scrollTop() < 100 && this.loading) {
            // 防止二次加载
            this.loading = false
            this.news_page ++
            if (this.news_page >= 4) {
              this.loading_animation = false
            } else {
              await this.get_data()
              this.loading = true
            }
          }
        })
      }
    },
    computed: {
      ...mapState(['scroll_top'])
    }
  }
</script>

<style scoped lang='scss'>
  .article_list {
    font-size: 16px;
    line-height: 25px;
    margin: auto;
    padding: 5px 10px;
  }
  .article_list h2{
    font-weight: 500;
    margin-bottom: 20px;
  }
  .article_time{
    display: block;
    margin-bottom: 15px;
  }
  .article_loading{
    text-align: center;
    & span{
      margin-left: 10px;
    }
  }
</style>