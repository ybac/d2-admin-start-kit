<template>
  <d2-container>
    <template slot="header">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="a"
          label="运送物料">
        </el-table-column>
        <el-table-column
          prop="b"
          label="物料名称">
        </el-table-column>
        <el-table-column
          prop="c"
          label="物料编码">
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
          label="目标产线">
        </el-table-column>
        <el-table-column
          prop="g"
          label="目标工位">
        </el-table-column>
        <el-table-column
          prop="h"
          label="AVG编号">
        </el-table-column>
        <el-table-column
          prop="i"
          label="上料时间">
        </el-table-column>
      </el-table>
    </template>
    <Iframe name="tt" style="height:100%; width:100%" src="https://www.thingjs.com/s/99e424b38dca428f4d4b1979?params=105b0f77fd24654d4eebc434e9" marginwidth="1" marginheight="1"    scrolling="yes" frameborder="10"></Iframe>
  </d2-container>
</template>

<script>
export default {
  name: 'scddgl',
  data () {
    return {
      tableData: [{
        a: 'WL001',
        b: '物料001',
        c: 'wl20201101',
        d: '342',
        e: 'KG',
        f: 'A产线',
        g: '一号工位',
        h: 'AVG2912983',
        i: '2020-10-09 18：00：21'
      }, {
        a: 'WL002',
        b: '物料002',
        c: 'wl20201202',
        d: '432',
        e: 'KG',
        f: 'B产线',
        g: '一号工位',
        h: 'AVG3214562',
        i: '2020-10-09 18：00：21'
      }]
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
}
.abox {
  width: 30%;
}
.bbox {
  flex: 1;
}
</style>
