<template>
  <div>
    <el-tag>Transfer 穿梭框</el-tag>
    <div class="contentBox_Content">
      <el-transfer
        filterable
        :filter-method="filterMethod"
        filter-placeholder="请输入城市拼音"
        v-model="value"
        :data="data">
      </el-transfer>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      const generateData2 = _ => {
        const data = []
        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都']
        const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu']
        cities.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
            pinyin: pinyin[index]
          })
        })
        return data
      }
      return {
        data: generateData2(),
        value: [],
        filterMethod (query, item) {
          return item.pinyin.indexOf(query) > -1 || item.label.indexOf(query) > -1
        }
      }
    }
  }
</script>

<style scoped>

</style>