<template>
  <d2-container>
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="a"
      label="原材料库存">
    </el-table-column>
    <el-table-column
      prop="b"
      label="物料名称">
    </el-table-column>
    <el-table-column
      prop="c"
      label="物料编号">
    </el-table-column>
    <el-table-column
      prop="d"
      label="数量">
    </el-table-column>
    <el-table-column
      prop="e"
      label="单位">
    </el-table-column>
  </el-table>
  </d2-container>
</template>

<script>
export default {
  name: 'yclgl',
  data () {
    return {
      tableData: [{
        a: '99%',
        b: '物料A',
        c: 'WL171',
        d: '233',
        e: 'KG'
      }, {
        a: '95%',
        b: '物料B',
        c: 'WL172',
        d: '41',
        e: 'KG'
      }, {
        a: '91%',
        b: '物料C',
        c: 'WL173',
        d: '56',
        e: 'KG'
      }, {
        a: '33%',
        b: '物料D',
        c: 'WL174',
        d: '556',
        e: 'KG'
      }, {
        a: '57%',
        b: '物料E',
        c: 'WL175',
        d: '67',
        e: 'KG'
      }]
    }
  }
}
</script>
