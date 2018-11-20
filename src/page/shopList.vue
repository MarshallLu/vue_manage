<template>
  <div>
    <bread-crumb></bread-crumb>
    shop
    <br>
    <button type="button" @click="showMsg()">显示Vuex的state</button>
    <br>
    <span>{{msgs}}</span>
  </div>
</template>

<script>
import breadCrumb from '@/components/breadCrumb.vue'
import {mapState} from 'vuex'

export default {
  data(){
    return{
      msgs:''
    }
  },
  components:{
    'bread-crumb': breadCrumb
  },
  computed:{
    ...mapState([
      'msg'
    ])
  },
  methods:{
    showMsg(){
      this.msgs = this.msg
      alert(this.msg)
    }
  }
}
</script>

<style lang="scss">
@import "@/style/common.scss";

</style>
