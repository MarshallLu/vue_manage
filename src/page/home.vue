<template>
  <div>
    <bread-crumb></bread-crumb>
    home-home-sum-test
    home-home-sum
    <span>tom</span>
  </div>
</template>

<script>
import breadCrumb from '@/components/breadCrumb.vue'

export default {
  data(){
    return{

    }
  },
  components:{
    'bread-crumb': breadCrumb
  }
}
</script>

<style lang="scss">
@import "@/style/common.scss";

</style>
