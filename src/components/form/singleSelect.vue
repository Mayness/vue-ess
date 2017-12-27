<template>
  <div>
    <el-tag>单选框</el-tag>
    <div class="contentBox_Content">
      <el-radio-group v-model="radio">
        <el-radio :label="1">备选项</el-radio>
        <el-radio :label="2">备选项</el-radio>
        <el-radio :label="3">备选项</el-radio>
      </el-radio-group>
    </div>
    <div class="contentBox_Content">
      <el-radio-group v-model="radio2" size="small">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京" disabled ></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="contentBox_Content">
      <el-radio v-model="radio3" label="1" border size="medium">备选项1</el-radio>
      <el-radio v-model="radio3" label="2" border size="medium">备选项2</el-radio>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio: 1,
        radio2: '上海',
        radio3: 1
      }
    }
  }
</script>

<style scoped>

</style>