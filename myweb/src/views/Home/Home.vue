<template>
    <div style="height:100%">
        <nav-top>
            
        </nav-top>
        <el-container style="height:100%">
          <el-aside width="200px">
            <nav-left :navlist="navlist" @e-child="handle"></nav-left>
          </el-aside>
          <el-container>
            <el-header>
              <swiper :swiperlist="swiperlist"></swiper>
            </el-header>
            <el-main>
              <list :goodslist="list"></list>
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
        navlist:[],
        swiperlist:[],
        goodslist:this.$store.state.goodslist,
        list:this.$store.state.goodslist
      }
    },
    methods:{
      handle(data){
        this.cid = data
        this.list = this.goodslist.filter(item => item.cid == this.cid)
      }
    },
    mounted(){
      this.$axios.get("navlist.json").then(res=>{
        this.navlist = res.data.navlist;
      })
      this.$axios.get("swiperlist.json").then(res=>{
        this.swiperlist = res.data.swiperlist;
      })
      //this.$axios.get("goodslist.json").then(res=>{
      //  this.goodslist = res.data.goodslist;
      //  this.list = this.goodslist
      //})
      this.$store.dispatch('getGoodsList')
    }
}
</script>

<style scoped>
.el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    height: 300px !important;
    padding: 0;
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
    
  }
  
</style>