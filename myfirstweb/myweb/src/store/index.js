import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //放置变量，可以共各个组件调用
    goodslist:[],
    cartlist:[],
    orderlist:[]
  },
  mutations: {
    //此处设置对数据的操作
    setGoodsList(state,data){
      //...扩展运算符
      if (state.goodslist.length == 0) {
        state.goodslist.push(...data)
      }
    },
    addCart(state,data){
      const isAdded = state.cartlist.find(item => item.id == data.id)
      if (isAdded) {
        isAdded.num += data.num
        isAdded.sum = isAdded.num * isAdded.onlineprice
      }else{
        state.cartlist.push(data)
      }
      console.log(state.cartlist)
    },
    addOrder(state,data){
      state.orderlist.push(data)
      console.log(state.orderlist);
    }
  },
  actions: {
    //涉及到并发的操作，数据获取
    getGoodsList(context){
      axios.get('/goodslist.json').then(res=>{
        context.commit('setGoodsList',res.data.goodslist);
      })
    }
  },
  modules: {
  }
})
