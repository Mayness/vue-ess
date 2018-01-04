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
  </div>
</template>

<script>
  import store from '@/store'
  export default {
    name: 'top_article',
    data () {
      return {
        news_list: []
      }
    },
    store,
    mounted () {
      this.$http.get('api/v1/topics').then((res) => {
        this.news_list = res.data.data
      })
    },
    methods: {
      news_detail (news) {
        let title = news.title.substr(0, 5)
        store.commit('addNavTab', {
          id: 'top_detail',
          name: `${title}...`,
          path: `article/${news.id}`
        })
      }
    }
  }
</script>

<style scoped>
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
</style>