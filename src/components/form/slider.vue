<template>
  <div>
    <el-tag>Slider 滑块</el-tag>
    <div class="contentBox_Content">
      <el-slider v-model="getNum.val"></el-slider>
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