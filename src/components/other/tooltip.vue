<template>
  <div>
    <el-tag>Tooltip 文字提示</el-tag>
    <div class="contentBox_Content">
      <el-tooltip content="Top center" placement="top">
        <el-button>Dark</el-button>
      </el-tooltip>
      <el-tooltip content="Bottom center" placement="bottom" effect="light">
        <el-button @click="checkUrl()">Light</el-button>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
  export default {
    beforeRouteUpdate (to, from, next) {
      console.log(to, from)
      next()
    },
    methods: {
      checkUrl () {}
    }
  }
</script>

<style scoped>

</style>