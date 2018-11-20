<template>
  <div class="topMenu">
    <div class="topMenu-main">
      <div class="topMenu-tit">
        叫了么后台管理系统
      </div>
      <el-menu
        router=true
        :default-active="activeIndex"
        class="el-menu-demo main-menu"
        mode="horizontal"
        @select="handleSelect"
        background-color="#313F56"
        text-color="#fff"
        active-text-color="#409EFF">
        <el-submenu class="topMenu-item" index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-submenu>
        <el-menu-item class="topMenu-item" index="1">待开发</el-menu-item>
        <el-menu-item class="topMenu-item" index="2">待开发</el-menu-item>
        <el-menu-item class="topMenu-item" index="3">待开发</el-menu-item>
        <el-menu-item class="topMenu-item" index="/topMenu/leftMenu/home">管理中心</el-menu-item>
      </el-menu>
    </div>
    <div class="topMenu-other">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      activeIndex:'1'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/common.scss";

.topMenu{
  @include wh(100%,100%);
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  .topMenu-main{
    @include wh(100%,61px)
    background-color:$deepbule;
    .topMenu-tit{
      float: left;
      @include wh(30%,100%)
      border-bottom: 1px solid #FFF;
      font-size: 25px;
      color: #FFF;
      @include hc(61px);
    }
    .main-menu{
      float: right;
      @include wh(70%,100%)
      .topMenu-item{
        padding-right: 40px;
        padding-left: 40px;
        float: right;
      }
    }
  }
  .topMenu-other{
    flex: 1;
  }
}


</style>
