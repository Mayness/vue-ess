<template>
  <div>
    <el-tag>计数器</el-tag>
    <div class="contentBox_Content">
      <el-input-number v-model="getNum.val" :min="0" :max="100" :step="1"></el-input-number>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['getNum']
  }
</script>

<style scoped>

</style>