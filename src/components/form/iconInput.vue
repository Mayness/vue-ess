<template>
  <div>
    <el-tag>带icon的输入框</el-tag>
    <div class="contentBox_Content">
      <div class="demo-input-suffix">
        <el-input
          placeholder="请选择日期"
          suffix-icon="el-icon-date"
          v-model="input">
        </el-input>
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="input1">
        </el-input>
      </div>
    </div>
    激活列出输入建议
    <div class="contentBox_Content">
      <el-autocomplete
        class="inline-input"
        v-model="state"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
      ></el-autocomplete>
    </div>
  </div>
</template>

<script>
  import resInfo from '@/config/restaurant.json'
  export default {
    data () {
      return {
        restaurants: [],
        state: '',
        input: '',
        input1: ''
      }
    },
    mounted () {
      this.restaurants = resInfo
    },
    methods: {
      querySearch (queryString, cb) {
        var restaurants = this.restaurants
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
        // 调用 callback 返回建议列表的数据
        cb(results)
      },
      createFilter (queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
        }
      }
    }
  }
</script>

<style scoped>
  .demo-input-suffix{
    display: flex;
  }
  .demo-input-suffix .el-input{
    margin-right: 20px;
  }
</style>