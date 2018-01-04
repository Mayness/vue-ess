<template>
  <div>
    <el-tag>Tooltip 文字提示{{name}}</el-tag>
    <div class="contentBox_Content">
      <el-tooltip content="Top center" placement="top">
        <el-button>Dark</el-button>
      </el-tooltip>
      <el-tooltip content="Bottom center" placement="bottom" effect="light">
        <el-button @click="addStore()">Light</el-button>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
  import store from '@/store'
  import { mapState, mapActions } from 'vuex'
  export default {
    beforeRouteUpdate (to, from, next) {
      console.log(to, from)
      next()
    },
    store,
    methods: {
      ...mapActions(['addObjTestAsync']),
      addStore () {
        // store.commit('addObjTest', {
        //   key: 'name',
        //   value: 'dmy'
        // })
        this.addObjTestAsync({
          key: 'name',
          value: 'dmy'
        })
      }
    },
    computed: {
      ...mapState(['name'])
    }
  }
</script>

<style scoped>

</style>