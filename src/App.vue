<template>
  <div id="app">
    <v-header/>
    <div class="tab">
      <div class="tab-item"><router-link to="/goods">商品</router-link></div>
      <div class="tab-item"><router-link to="/reatings">评论</router-link></div>
      <div class="tab-item"><router-link to="/seller">商家</router-link></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header.vue'

export default {
  components:{
    'v-header': header
  }
}
</script>

<style lang="scss">
  .tab{
    display:flex;
    width:100%;
    height:40px;
    line-height:40px;
    border-bottom:1px solid rgba(7,27,77,0.1);
    .tab-item{
      flex:1;
      text-align:center;
      fontsize:14px;
      color:rgb(77,85,93);
      .active{
        color:rgb(200,20,20)
      }
    }
 }
</style>
