<template>
  <div>
    <h2 class="contentBox_title">其他</h2>
    <div class="contentBox_item">
      <Dialog/>
      <el-tag>Tooltip 文字提示</el-tag>
      <div class="contentBox_Content">
        <el-tooltip content="Top center" placement="top">
          <el-button>Dark</el-button>
        </el-tooltip>
        <el-tooltip content="Bottom center" placement="bottom" effect="light">
          <el-button>Light</el-button>
        </el-tooltip>
      </div>
      <Popover/>
      <Card/>
      <Banner/>
      <Collapse/>
    </div>
  </div>
</template>

<script>
  import Dialog from '@/components/other/dialog'
  import Popover from '@/components/other/popover'
  import Card from '@/components/other/card'
  import Banner from '@/components/other/banner'
  import Collapse from '@/components/other/collapse'
  export default {
    components: {Dialog, Popover, Card, Banner, Collapse}
  }
</script>

<style scoped>

</style>