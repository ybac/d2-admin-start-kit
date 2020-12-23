<template>
  <d2-container>
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="a"
      label="订单编号">
    </el-table-column>
    <el-table-column
      prop="b"
      label="产品编号">
    </el-table-column>
    <el-table-column
      prop="c"
      label="产品数量">
    </el-table-column>
    <el-table-column
      prop="d"
      label="订单进度">
    </el-table-column>
    <el-table-column
      prop="e"
      label="订单产线">
    </el-table-column>
    <el-table-column>
      <template slot="header" slot-scope="scope">
        <el-button type="primary" round @click="sorted(scope)">排产顺序</el-button>
      </template>
      <template slot-scope="scope">
        {{ scope.row.f }}
      </template>
    </el-table-column>
  </el-table>
  </d2-container>
</template>

<script>
export default {
  name: 'jiexi',
  data () {
    return {
      tableData: [{
        a: 'DD001',
        b: 'CP20201102',
        c: 137,
        d: '85%',
        e: 'A1',
        f: '1',
        i: 2
      }, {
        a: 'DD002',
        b: 'CP20201103',
        c: 324,
        d: '75%',
        e: 'A2',
        f: '2',
        i: 4
      }, {
        a: 'DD003',
        b: 'CP20201104',
        c: 156,
        d: '70%',
        e: 'A3',
        f: '3',
        i: 5
      }, {
        a: 'DD004',
        b: 'CP20201105',
        c: 237,
        d: '65%',
        e: 'A4',
        f: '4',
        i: 3
      }, {
        a: 'DD005',
        b: 'CP20201106',
        c: 133,
        d: '65%',
        e: 'A5',
        f: '5',
        i: 1
      }],
      open: true
    }
  },
  methods: {
    compare (prop) {
      return function (obj1, obj2) {
        var val1 = obj1[prop]
        var val2 = obj2[prop]
        if (val1 < val2) {
          return -1
        } else if (val1 > val2) {
          return 1
        } else {
          return 0
        }
      }
    },
    sorted (num) {
      this.open = !this.open
      if (!this.open) {
        this.tableData.sort(this.compare('i'))
      } else {
        this.tableData.sort(this.compare('c'))
      }
      this.tableData[0].f = 1
      this.tableData[1].f = 2
      this.tableData[2].f = 3
      this.tableData[3].f = 4
      this.tableData[4].f = 5
      console.log(this.tableData)
    }
  }
}
</script>
