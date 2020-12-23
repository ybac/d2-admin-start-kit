<template>
  <d2-container>
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="a"
      label="产品单号">
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
    <el-table-column
      prop="f"
      label="生产产线">
    </el-table-column>
    <el-table-column
      prop="g"
      label="生产工位">
    </el-table-column>
    <el-table-column
      prop="h"
      label="上料时间">
    </el-table-column>
  </el-table>
  </d2-container>
</template>

<script>
export default {
  name: 'scwlgl',
  data () {
    return {
      tableData: [{
        a: 'WH202010110401',
        b: '物料A',
        c: 'WL171',
        d: '233',
        e: 'KG',
        f: '产线A',
        g: '一号工位',
        h: '2020-10-01 09:00:00'
      }, {
        a: 'WH202010110402',
        b: '物料B',
        c: 'WL172',
        d: '22',
        e: 'KG',
        f: '产线B',
        g: '二号工位',
        h: '2020-10-01 09:00:00'
      }, {
        a: 'WH202010110403',
        b: '物料C',
        c: 'WL173',
        d: '145',
        e: 'KG',
        f: '产线C',
        g: '三号工位',
        h: '2020-10-01 09:00:00'
      }, {
        a: 'WH202010110404',
        b: '物料D',
        c: 'WL174',
        d: '65',
        e: 'KG',
        f: '产线D',
        g: '四号工位',
        h: '2020-10-01 09:00:00'
      }, {
        a: 'WH202010110405',
        b: '物料E',
        c: 'WL175',
        d: '57',
        e: 'KG',
        f: '产线E',
        g: '五号工位',
        h: '2020-10-01 09:00:00'
      }]
    }
  }
}
</script>
