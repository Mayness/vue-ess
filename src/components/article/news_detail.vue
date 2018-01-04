<template>
  <div class="news_detail" el-loading>
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
</template>

<script>
  export default {
    name: 'top_detail',
    data () {
      return {
        dat: {
          author: [],
          replies: []
        },
        id: this.$route.params.id
      }
    },
    mounted () {
      this.getData()
    },
    methods: {
      getData () {
        this.$http.get(`api/v1/topic/${this.id}`).then((res) => {
          this.dat = res.data.data
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    computed: {
      init_replies () {
        let replies = [...this.dat.replies]
        return replies.reverse()
      }
    }
  }
</script>
