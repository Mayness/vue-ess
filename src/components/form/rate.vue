<template>
  <div>
    <el-tag>Rate 评分</el-tag>
    <div class="contentBox_Content">
      <el-rate
        v-model="rate"
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
      </el-rate>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        rate: null
      }
    }
  }
</script>

<style scoped>

</style>