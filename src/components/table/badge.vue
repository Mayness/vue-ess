<template>
  <div>
      <el-tag>Badge 标记</el-tag>
      <div class="contentBox_Content">
        <el-badge :value="12" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge value="new" class="item">
          <el-button size="small">回复</el-button>
        </el-badge>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item class="clearfix">
              评论
              <el-badge class="mark" :value="12" />
            </el-dropdown-item>
            <el-dropdown-item class="clearfix">
              回复
              <el-badge class="mark" :value="200" :max="99" />
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <br/><br/>
        <el-badge is-dot class="item">
          <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
        </el-badge>
      </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>