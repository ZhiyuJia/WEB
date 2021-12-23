<template>
    <div>
        {{cartlsit[0].name}}
    </div>
</template>

<script>

export default {
    name:'CartList',
    props:['cartist'],
    data(){
        return{
            cartlist:this.$store.state.cart
        }
    },
}
</script>

<style scoped>

</style>