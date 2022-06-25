<template>
    <div>
     <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu :index="(i+1).toString()" v-for="(item,i) in navlist" :key="i">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.catagory}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="((i+1)+'-'+(index+1)).toString()" v-for="(list,index) in item.list" :key="index" @click="send(list.cid)">{{list.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
     </el-menu>
    </div>
</template>

<script>
export default {
    name:'NavLeft',
    props:{
        navlist:Array
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      send(data){
        this.$emit('e-child',data)
      }
    }
}
</script>
