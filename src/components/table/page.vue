<template>
  <div>
    <el-tag>进度条</el-tag>
    <div class="contentBox_Content">
      <el-pagination 
        @size-change="handleSizeChange" 
        @current-change="handleCurrentChange" 
        :current-page.sync="currentPage" 
        :page-size="100" 
        layout="prev, pager, next, jumper" 
        :total="1000"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`)
      }
    },
    data () {
      return {
        currentPage: 5
      }
    }
  }
</script>

<style scoped>

</style>