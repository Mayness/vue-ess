<template>
  <div>
    <h2 class="contentBox_title">表单</h2>
    <div class="contentBox_item">
      <SingleSelect/>
      <CheckBox/>
      <IconInput/>
      <Computed :getNum="num"/>
      <Select/>
      <Cascader/>
      <Switch-template/>
      <Slider :getNum="num"/>
      <TimeSelect/>
      <Upload/>
      <Rate/>
      <Transfer/>
    </div>
  </div>
</template>

<script>
  import Cascader from '@/components/form/cascaderSelect'
  import TimeSelect from '@/components/form/timeSelect'
  import Upload from '@/components/form/upload'
  import Transfer from '@/components/form/transfer'
  import IconInput from '@/components/form/iconInput'
  import Select from '@/components/form/select'
  import SwitchTemplate from '@/components/form/switch'
  import Rate from '@/components/form/rate'
  import Slider from '@/components/form/slider'
  import Computed from '@/components/form/computed'
  import CheckBox from '@/components/form/checkbox'
  import SingleSelect from '@/components/form/singleSelect'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        num: {val: 10}
      }
    },
    computed: {
      ...mapState(['view_loading'])
    },
    components: {
      Cascader,
      TimeSelect,
      Upload,
      Transfer,
      IconInput,
      Select,
      SwitchTemplate,
      Rate,
      Slider,
      Computed,
      CheckBox,
      SingleSelect
    }
  }
</script>
