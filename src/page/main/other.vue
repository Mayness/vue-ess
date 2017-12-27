<template>
  <div>
    <h2 class="contentBox_title">其他</h2>
    <div class="contentBox_item">
      <Dialog/>
      <Tooltip/>
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
  import Tooltip from '@/components/other/tooltip'
  export default {
    components: {Dialog, Popover, Card, Banner, Collapse, Tooltip}
  }
</script>

<style scoped>

</style>