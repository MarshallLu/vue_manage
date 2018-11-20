<template>
  <div class="login-main">
    <div class="login-body">
      <div class="login-tit">
        叫了么后台管理系统
      </div>
      <div class="login-con">
        <el-form :model="form">
          <el-form-item>
            <el-input v-model="form.name" placeholder="用户名" class="lc-input"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.key" type="password" autocomplete="off" placeholder="密码" class="lc-input"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click.native="onSubmit" class="lc-btn">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      form:{
        name: '',
        key: ''
      }
    }
  },
  methods:{
    onSubmit(){
      setTimeout(()=>{
        this.$router.push('/topMenu/leftMenu/foodList')
      },50)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/common.scss';

.login-main{
  background-color: $deepbule;
  @include wh(100%,100%);
}

.login-body{
  @include wh(400px,350px);
  @include ctp;
  .login-tit{
    @include wh(100%,100px);
    @include hc(100px);
    font-size: 35px;
    color: #FFF;
  }
  .login-con{
    @include wh(100%,250px);
    background-color: #FFF;
    border-radius: 15px;
    padding: 30px;
    .lc-input{
      margin-bottom: 30px;
    }
    .lc-btn{
      @include wh(100%,40px)
      font-size: 18px;
    }
  }
}







</style>
