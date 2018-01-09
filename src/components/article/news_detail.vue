<template>
  <div class="news_detail">
    <div class="news_detailLoading" v-loading="newsLoading" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)"></div>
    <div v-if="!newsLoading">
      <h2 v-text="dat.title"></h2>
      <p>作者：{{dat.author.loginname}}　　发表于：{{$utils.beautyTime(dat.create_at)}}</p>
      <hr>
      <article v-html="dat.content"></article>
      <h3>网友回复：</h3>
      <ul>
        <li v-for="(item, index) in init_replies" :key="index">
          <p>评论者：{{item.author.loginname}}　　评论于：{{$utils.beautyTime(item.create_at)}}</p>
          <article v-html="item.content"></article>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'top_detail',
    data () {
      return {
        dat: {
          author: [],
          replies: []
        },
        id: this.$route.params.id,
        newsLoading: false
      }
    },
    mounted () {
      this.getData()
    },
    methods: {
      getData () {
        return new Promise((resolve, reject) => {
          // if (this.news_id !== this.id) {
          this.newsLoading = true
          this.$http.get(`topic/${this.id}`, null, (res) => {
            this.dat = res.data
            this.newsLoading = false
            resolve()
          }, (err) => {
            console.log(err)
          })
          // }
        })
      }
    },
    computed: {
      init_replies () {
        let replies = [...this.dat.replies]
        return replies.reverse()
      },
      ...mapState(['news_id'])
    }
  }
</script>

<style scoped>
  .news_detailLoading{
    position: absolute;
    top: 0;
    z-index: 999;
    height: 100%;
    width: 99%;
  }
  .el-loading-spinner{
    top: 10%;
  }
</style>
