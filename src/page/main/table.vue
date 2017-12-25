<template>
  <div>
    <h2 class="contentBox_title">表格</h2>
    <div class="contentBox_item">
      <TableTemple/>
      <Tag/>
      <el-tag>进度条</el-tag>
      <div class="contentBox_Content" style="width: 400px">
        <el-progress :percentage="0"></el-progress>
        <el-progress :percentage="70"></el-progress>
        <el-progress :percentage="100" status="success"></el-progress>
        <el-progress :percentage="50" status="exception"></el-progress>
      </div>
      <Tree/>
      <Page/>
      <Badge/>
    </div>
  </div>
</template>

<script>
  import TableTemple from '@/components/table/tableTemple'
  import Tag from '@/components/table/tag'
  import Tree from '@/components/table/tree'
  import Page from '@/components/table/page'
  import Badge from '@/components/table/badge'
  export default {
    data () {
      return {}
    },
    components: {TableTemple, Tag, Tree, Page, Badge}
  }
</script>

<style scoped>

</style>