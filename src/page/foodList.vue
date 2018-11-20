<template>
  <div>
    <bread-crumb></bread-crumb>
    food
    <br>
    <input type="text" v-model="ms">
    <br>
    <button type="button" @click="show(ms)">重新修改state数据</button>
    <br>
    <span>{{msg}}</span>
  </div>
</template>

<script>
import breadCrumb from '@/components/breadCrumb.vue'
import {mapMutations,mapState} from 'vuex'

export default {
  data(){
    return{
      ms:''
    }
  },
  components:{
    'bread-crumb': breadCrumb
  },
  methods:{
    ...mapMutations([
      'show'
    ])
  },
  computed:{
    ...mapState([
      'msg'
    ])
  }
}
</script>

<style lang="scss">
@import "@/style/common.scss";

</style>
