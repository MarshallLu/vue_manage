<template>
  <div>
    <bread-crumb></bread-crumb>
    uesrList
    <br>
    <input type="text" v-model="imsg">
    <br>
    <button type="button" @click="show(imsg)">提交上面的内容</button>
    <br>
    <br>
    <button type="button" @click="showIt()">显示提交的内容</button>
  </div>
</template>

<script>
import breadCrumb from '@/components/breadCrumb.vue'
import {mapMutations} from 'vuex'

export default {
  data(){
    return{
      imsg:''
    }
  },
  components:{
    'bread-crumb': breadCrumb
  },
  methods:{
    ...mapMutations([
      'show'
    ]),
    showIt(){
      // debugger;
      alert(this.imsg)
    }
  }
}
</script>

<style lang="scss">
@import "@/style/common.scss";

</style>
