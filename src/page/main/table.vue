<template>
  <div>
    <h2 class="contentBox_title" @click="refresh()">表格test</h2>
    <div class="contentBox_item">
      <TableTemple/>
      <Tag/>
      <Progress/>
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
  import Progress from '@/components/table/progress'
  export default {
    data () {
      return {}
    },
    methods: {
      refresh () {
        this.$router.go(0)
      }
    },
    components: {TableTemple, Tag, Tree, Page, Badge, Progress}
  }
</script>

<style scoped>

</style>