<template>
  <div>
    <el-tag>Switch 开关</el-tag>
    <div class="contentBox_Content">
      <el-switch
        v-model="switch_value"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="按月付费"
        inactive-text="按年付费">
      </el-switch>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        switch_value: true
      }
    }
  }
</script>

<style scoped>

</style>