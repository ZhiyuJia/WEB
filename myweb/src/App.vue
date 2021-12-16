<template>
  <div id="app">
      <!-- <router-link to="/home">首页</router-link>|
      <router-link to="/cart">购物车</router-link>|
      <router-link to="/order">订单</router-link>|
      <router-link to="/detail">详情</router-link>|
      <router-link to="/login">登录</router-link>| -->
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
html,body,#app{
  height: 100%;
}

</style>
