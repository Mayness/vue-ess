<template>
  <div>
    <el-tag>进度条</el-tag>
    <div class="contentBox_Content" style="width: 400px">
      <el-progress :percentage="0"></el-progress>
      <el-progress :percentage="70"></el-progress>
      <el-progress :percentage="100" status="success"></el-progress>
      <el-progress :percentage="50" status="exception"></el-progress>
    </div>
  </div>
</template>