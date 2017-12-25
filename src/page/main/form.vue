<template>
  <div>
    <h2 class="contentBox_title">表单</h2>
    <div class="contentBox_item">
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
      <el-tag>复选框</el-tag>
      <div class="contentBox_Content">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 B"></el-checkbox>
          <el-checkbox label="复选框 C"></el-checkbox>
          <el-checkbox label="禁用" disabled></el-checkbox>
          <el-checkbox label="选中且禁用" disabled></el-checkbox>
        </el-checkbox-group>
      </div>
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
      <el-tag>计数器</el-tag>
      <div class="contentBox_Content">
        <el-input-number v-model="num" :min="0" :max="100" :step="1"></el-input-number>
      </div>
      <el-tag>Select 选择器</el-tag>
      <div class="contentBox_Content">
        <el-select v-model="selected" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select
          v-model="selected1"
          multiple
          filterable
          allow-create
          placeholder="请选择文章标签">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <Cascader/>
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
      <el-tag>Slider 滑块</el-tag>
      <div class="contentBox_Content">
        <el-slider v-model="num"></el-slider>
      </div>
      <TimeSelect/>
      <Upload/>
      <el-tag>Rate 评分</el-tag>
      <div class="contentBox_Content">
        <el-rate
          v-model="rate"
          :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
        </el-rate>
      </div>
      <Transfer/>
    </div>
  </div>
</template>

<script>
  import resInfo from '@/config/restaurant.json'
  import Cascader from '@/components/form/cascaderSelect'
  import TimeSelect from '@/components/form/timeSelect'
  import Upload from '@/components/form/upload'
  import Transfer from '@/components/form/transfer'
  export default {
    data () {
      return {
        radio: 1,
        radio2: '上海',
        radio3: 1,
        checkList: ['选中且禁用', '复选框 A'],
        input: '',
        input1: '',
        restaurants: [],
        state: '',
        num: 1,
        selected: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        selected1: '',
        options1: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        switch_value: true,
        rate: null
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
    },
    components: {Cascader, TimeSelect, Upload, Transfer}
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