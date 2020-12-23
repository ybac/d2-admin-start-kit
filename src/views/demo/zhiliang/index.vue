<template>
  <d2-container>
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="a"
      label="订单ID">
    </el-table-column>
    <el-table-column
      prop="b"
      label="产品ID">
    </el-table-column>
    <el-table-column
      prop="c"
      label="次品率">
    </el-table-column>
    <el-table-column
      prop="d"
      label="次品等级">
    </el-table-column>
    <el-table-column
      prop="e"
      label="不良项目名称">
    </el-table-column>
    <el-table-column
      prop="f"
      label="不良描述">
    </el-table-column>
    <el-table-column
      prop="g"
      label="处理办法">
    </el-table-column>
  </el-table>
  </d2-container>
</template>

<script>
export default {
  name: 'pag',
  data () {
    return {
      tableData: [{
        a: 'DD001',
        b: 'CP20201102',
        c: '0.2%',
        d: '3',
        e: '项目A',
        f: '非常轻微错料',
        g: '让步'
      }, {
        a: 'DD002',
        b: 'CP20201103',
        c: '1%',
        d: '1',
        e: '项目B',
        f: '轻微错料',
        g: '放弃'
      }, {
        a: 'DD003',
        b: 'CP20201104',
        c: '0.02%',
        d: '3',
        e: '项目C',
        f: '非常轻微错料',
        g: '让步'
      }, {
        a: 'DD004',
        b: 'CP20201105',
        c: '0.12%',
        d: '2',
        e: '项目D',
        f: '非常轻微错料',
        g: '让步'
      }, {
        a: 'DD005',
        b: 'CP20201106',
        c: '0.98%',
        d: '1',
        e: '项目E',
        f: '轻微错料',
        g: '放弃'
      }]
    }
  }
}
</script>
