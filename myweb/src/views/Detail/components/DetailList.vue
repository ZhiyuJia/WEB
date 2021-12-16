<template>
    <div>
         <div class="container">
    <el-card shadow="always">
      <el-row type="flex">
        <el-col :span="12">
          <div class="demo-image__preview">
            <!-- <el-image 
                            :src="goodsDetail.bigImg" 
                            :preview-src-list="srclist">
                        </el-image> -->
            图片
          </div>
        </el-col>
        <el-col :span="12">
          <div style="text-align: left">
            <!-- 第一行 -->
            <el-row>
              <el-col :span="4">
                <i class="el-icon-caret-left"><span>返回</span></i>
              </el-col>
            </el-row>
            <br />
            <!-- 第二行 -->
            <el-row>
              <el-col>
                <h2>{{goods.name}}</h2>
              </el-col>
            </el-row>
            <br />
            <!-- 第三行 -->
            <el-row>
              <el-col :span="16">
                <p class="banner-price">
                  <span class="params-label">价格</span>
                  <span class="price">{{goods.price}}</span>
                  <br />
                  <span class="params-label">促销价</span>
                  <span class="priceonline">{{goods.onlineprice}}</span>
                </p>
              </el-col>
            </el-row>
            <br />
            <!-- 第四行 -->
            <el-row>
              <el-col :span="16">
                <p class="banner">
                  <span class="params-label">发货地</span>
                  <span class="params-item">发货地</span>
                  <br />
                  <span class="params-label">快递方式</span>
                  <span class="params-item">快递方式</span>
                </p>
              </el-col>
            </el-row>
            <br />
            <!-- 第五行 -->
            <el-row>
              <el-col>
                <el-input-number
                  v-model="num"
                  @change="handleChange"
                  :min="1"
                  :max="10"
                  label="描述文字"
                ></el-input-number>
              </el-col>
            </el-row>
            <br />
            <!-- 第六行 两个按钮 -->
            <el-row style="margin-top: 20px">
              <el-col>
                <el-button type="primary">立即购买</el-button>
                <el-button type="primary">加入购物车</el-button>
              </el-col>
            </el-row>
            <!-- 第7行 -->
            <el-row style="margin-top: 20px">
              <el-col :span="16">
                <p class="banner">
                  <span class="params-label">服务承诺</span>
                  <span class="params-label">正品保证</span>
                  <span class="params-label">急速退款</span>
                  <span class="params-label">赠送运费</span>
                  <span class="params-label">七天无理由退换</span>
                </p>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
    </div>
</template>

<script>

export default {
    name:'DetailList',
    props:['goods'],
    data(){
        return{
            num:1
        }
    }
}
</script>

<style scoped>
.container {
  width: 80%;
  margin: auto;
  padding-top: 1%;
}
.banner-price {
  padding: 5px 12px;
  color: #333;
  background-color: #e9e9e9;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  line-height: 24px;
}
.params-label {
  display: inline-block;
  min-width: 75px;
  color: #999;
  font-size: 12px;
}
.price {
  text-decoration: line-through;
}
.priceonline {
  font-weight: 600;
  font-size: 24px;
  color: #ff0036;
}
.banner {
  padding: 5px 12px;
  margin-top: 10px;
}
.params-item {
  line-height: 24px;
}
</style>