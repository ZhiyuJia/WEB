<template>
    <div>
        <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="/home"><router-link to="/home">首页</router-link></el-menu-item>
            <el-menu-item index="/cart"><router-link to="/cart">购物车</router-link></el-menu-item>
            <el-menu-item index="/order"><router-link to="/order">订单</router-link></el-menu-item>
            <el-menu-item v-show="name=='游客'" style="float:right">登录/注册</el-menu-item>
            <el-menu-item v-show="name!='游客'" style="float:right">退出</el-menu-item>
            <el-menu-item style="float:right">{{name}}，欢迎你！！</el-menu-item>
  
        </el-menu>
    </div>
</template>

<script>
export default {
    name:'NavTop',
    data(){
        return{
             activeIndex: '$route.path',
             name:'游客',
        };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
    a:-webkit-any-link {
        color: -webkit-link;
        cursor: pointer;
        text-decoration: none;
    }
</style>