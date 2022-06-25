<template>
    <div>
  <el-table
    :data="tableData"
    border
    show-summary
    style="width: 100%" @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="id"
      label="ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="num"
      sortable
      label="数量">
    </el-table-column>
    <el-table-column
      prop="onlineprice"
      sortable
      label="单价">
    </el-table-column>
    <el-table-column
      prop="sum"
      sortable
      label="总价">
    </el-table-column>
    <el-table-column label="操作" align="center">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-button type="danger" round style="float:right;margin-top:20px;margin-right:50px" @click="buy()">立即购买</el-button>
    </div>
</template>

<script>

export default {
    name:'CartList',
    props:['cartist'],
    data() {
      return {
        multipleSelection: [],
        tableData: this.$store.state.cartlist,
        orderlist:{name:'',num:0,sum:0}
      };
    },
    methods: {
        buy(){
            
            this.multipleSelection.forEach((item,i)=>{
                this.orderlist.name = this.orderlist.name + item.name,
                this.orderlist.num = item.num,
                this.orderlist.sum = item.sum,
                this.orderlist.i = i
            })
            this.$store.commit('addOrder',this.orderlist)
            this.multipleSelection.forEach((list,k)=>{
                const x = this.$store.state.cartlist.findIndex((item,index)=>{
                    index == k
                })
                this.$store.state.cartlist.splice(x,1)
            })
            console.log(this.multipleSelection)
        },
        handleDelete(index, row) {
          this.tableData.splice(index,1),
          this.multipleSelection.splice(index,1)
        console.log(index, row);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总价';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += ' 元';
          } else {
            sums[index] = 'N/A';
          }
        });

        return sums;
      }
    }
};
</script>

<style scoped>

</style>