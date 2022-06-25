<template>
    <div>
        <nav-top></nav-top>
        <detail-list :goods="goods"></detail-list>
    </div>
</template>

<script>
import NavTop from '../../components/NavTop.vue'
import DetailList from './components/DetailList.vue'
export default {
  components: { NavTop, DetailList },
    name:'Detail',
    data(){
        return{
            goodslist:[],
            goods:[]
        }
    },
    mounted(){
        this.$axios.get("goodslist.json").then(res=>{
        this.goodslist = res.data.goodslist;
        this.goods = this.goodslist.find(item =>{
            return item.id == this.$route.params.id
            })
        })
    }
}
</script>

<style scoped>

</style>