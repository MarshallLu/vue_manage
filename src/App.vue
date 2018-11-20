<template>
  <div id="app">
   <router-view></router-view>
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

#app{
  @include wh(100%,100%);
}
</style>
