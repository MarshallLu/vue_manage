<template>
  <div class="breadCrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadCrumb-body">
       <el-breadcrumb-item :to="{ path: '/topMenu/leftMenu/home' }">首页</el-breadcrumb-item>
       <el-breadcrumb-item v-for="(item,index) in $route.meta" :key="index" >{{item}}</el-breadcrumb-item>
     </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style lang="scss">
@import "@/style/common.scss";

.breadCrumb{
  @include wh(100%,50px);
  background-color: #EEF1F6;
  .breadCrumb-body{
    padding-top: 17px;
    padding-left: 30px;
  }
}

</style>
