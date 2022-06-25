<template>
    <div>
        <nav-top></nav-top>
        <order-list></order-list>
    </div>
</template>

<script>
import NavTop from '../../components/NavTop.vue'
import OrderList from './components/OrderList.vue'
export default {
  components: { NavTop, OrderList},
    name:'Order'
}
</script>

<style scoped>

</style>