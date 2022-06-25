<template>
    <div>
  <el-table
    :data="tableData"
    border
    show-summary
    style="width: 100%">
    <el-table-column
      prop="i"
      label="ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="商品名称">
    </el-table-column>
    <el-table-column
      prop="num"
      sortable
      label="数量">
    </el-table-column>
    <el-table-column
      prop="sum"
      sortable
      label="总价">
    </el-table-column>
  </el-table>
    </div>
</template>

<script>

export default {
    name:'OrderList',
    data() {
      return {
        tableData:this.$store.state.orderlist,
      };
    },
    methods: {
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