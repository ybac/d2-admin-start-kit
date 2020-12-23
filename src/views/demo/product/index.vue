<template>
  <d2-container>
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="a"
      label="工单ID">
    </el-table-column>
    <el-table-column
      prop="b"
      label="产品ID">
    </el-table-column>
    <el-table-column
      prop="c"
      label="工单状态">
    </el-table-column>
    <el-table-column
      prop="d"
      label="工单类型">
    </el-table-column>
    <el-table-column
      prop="e"
      label="产品数量">
    </el-table-column>
    <el-table-column
      prop="f"
      label="生产进度">
    </el-table-column>
    <el-table-column
      prop="g"
      label="截止日期">
    </el-table-column>
    <el-table-column
      prop="h"
      label="完成日期">
    </el-table-column>
  </el-table>
  </d2-container>
</template>

<script>
export default {
  name: 'product',
  data () {
    return {
      tableData: [{
        a: 'GD201201',
        b: 'CP20201102',
        c: '在产',
        d: '紧急',
        e: '878',
        f: '88%',
        g: '2020-12-31',
        h: ''
      }, {
        a: 'GD201202',
        b: 'CP20201103',
        c: '完成',
        d: '正常',
        e: '2234',
        f: '100%',
        g: '2020-12-21',
        h: '2020-12-11'
      }, {
        a: 'GD201203',
        b: 'CP20201104',
        c: '取消',
        d: '正常',
        e: '0',
        f: '0%',
        g: '2020-11-01',
        h: ''
      }, {
        a: 'GD201204',
        b: 'CP20201105',
        c: '待产',
        d: '紧急',
        e: '0',
        f: '0%',
        g: '2020-12-20',
        h: ''
      }, {
        a: 'GD201205',
        b: 'CP20201106',
        c: '逾期',
        d: '紧急',
        e: '4200',
        f: '90%',
        g: '2020-12-12',
        h: '2020-12-15'
      }, {
        a: 'GD201202',
        b: 'CP20201103',
        c: '完成',
        d: '正常',
        e: '2234',
        f: '100%',
        g: '2020-12-21',
        h: '2020-12-11'
      }]
    }
  }
}
</script>
