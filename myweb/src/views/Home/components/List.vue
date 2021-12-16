<template>
  <div>
    <el-row>
      <el-col
        :span="4"
        v-for="(o, index) in goodslist"
        :key="index"
        :offset="index%4 !=0 ? 1 : 2"
      ><br>
        <el-card :body-style="{ padding: '0px' }">
          <img :src="o.img" class="image" />
          <div style="padding: 5px">
            <span>{{o.name}}</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button" @click="godetail(o.id)">详情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "list",
  props:{
      goodslist:Array
  },
  methods:{
      godetail(id){
          this.$router.replace('/detail/'+ id )
      } 
  }
};
</script>

<style scoped>
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>