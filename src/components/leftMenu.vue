<template>
  <div class="leftMenu">
    <div class="leftMenu-main">
      <el-menu
        router=true
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#313F56"
        text-color="#fff"
        active-text-color="#409EFF">
        <el-menu-item index="/topMenu/leftMenu/home">
          <i class="el-icon-setting"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>数据管理</span>
          </template>
            <el-menu-item index="/topMenu/leftMenu/userList">用户列表</el-menu-item>
            <el-menu-item index="/topMenu/leftMenu/shopList">商家列表</el-menu-item>
            <el-menu-item index="/topMenu/leftMenu/foodList">食品列表</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航1</span>
          </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航2</span>
          </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航3</span>
          </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="leftMenu-other">
      <router-view></router-view>
    </div>
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

<style lang="scss" scoped>
@import "@/style/common.scss";

.leftMenu{
  @include wh(100%,100%);
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  .leftMenu-main{
    @include wh(200px,100%)
    background-color: $deepbule;
  }
  .leftMenu-other{
    flex: 1;
  }
}

</style>
