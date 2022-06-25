<template>
    <div>
        <nav-top></nav-top>
        <cart-list :cartlsit='cartlist'></cart-list>
    </div>
</template>

<script>
import NavTop from '../../components/NavTop.vue'
import CartList from './components/CartList.vue'
export default {
  components: { NavTop, CartList },
    name:'Cart',
    data(){
        return{
            cartlsit:this.$store.state.cart
        }
    }
}
</script>

<style scoped>
    
</style>