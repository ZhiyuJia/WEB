<template>
    <div>
        <nav-top>
            
        </nav-top>
        <el-container>
          <el-aside width="200px">
            <nav-left :navlist="navlist"></nav-left>
          </el-aside>
          <el-container>
            <el-header>
              <swiper></swiper>
            </el-header>
            <el-main>
              <list></list>
            </el-main>
          </el-container>
        </el-container>
    </div>
</template>

<script>
import NavTop from '../../components/NavTop.vue'
import List from './components/List.vue'
import NavLeft from './components/NavLeft.vue'
import Swiper from './components/Swiper.vue'
export default {
  components: { NavTop, NavLeft, Swiper, List },
    name:'Home',
    data(){
      return{
        navlist:[]
      }
    },
    mounted(){
      this.$axios.get("http://mock-api.com/RzJx6rn9.mock/navlist").then(res=>{
        this.navlist = res.data.navlist;
      })
    }
}
</script>

<style scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>