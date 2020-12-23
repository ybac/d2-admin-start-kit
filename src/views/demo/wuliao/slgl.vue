<template>
  <d2-container>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="一号产线" name="first">
        <el-table
          :data="tableData1"
          border
          style="width: 100%">
          <el-table-column
            prop="a"
            label="物料名称">
          </el-table-column>
          <el-table-column
            prop="b"
            label="物料编号">
          </el-table-column>
          <el-table-column
            prop="c"
            label="上料总量">
          </el-table-column>
          <el-table-column
            prop="d"
            label="剩余数量">
          </el-table-column>
          <el-table-column
            prop="e"
            label="缺料报警">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="二号产线" name="second">
        <el-table
          :data="tableData2"
          border
          style="width: 100%">
          <el-table-column
            prop="a"
            label="物料名称">
          </el-table-column>
          <el-table-column
            prop="b"
            label="物料编号">
          </el-table-column>
          <el-table-column
            prop="c"
            label="上料总量">
          </el-table-column>
          <el-table-column
            prop="d"
            label="剩余数量">
          </el-table-column>
          <el-table-column
            prop="e"
            label="缺料报警">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="三号产线" name="third">
        <el-table
          :data="tableData1"
          border
          style="width: 100%">
          <el-table-column
            prop="a"
            label="物料名称">
          </el-table-column>
          <el-table-column
            prop="b"
            label="物料编号">
          </el-table-column>
          <el-table-column
            prop="c"
            label="上料总量">
          </el-table-column>
          <el-table-column
            prop="d"
            label="剩余数量">
          </el-table-column>
          <el-table-column
            prop="e"
            label="缺料报警">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="四号产线" name="fourth">
        <el-table
          :data="tableData2"
          border
          style="width: 100%">
          <el-table-column
            prop="a"
            label="物料名称">
          </el-table-column>
          <el-table-column
            prop="b"
            label="物料编号">
          </el-table-column>
          <el-table-column
            prop="c"
            label="上料总量">
          </el-table-column>
          <el-table-column
            prop="d"
            label="剩余数量">
          </el-table-column>
          <el-table-column
            prop="e"
            label="缺料报警">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="五号产线" name="fiveth">
        <el-table
          :data="tableData1"
          border
          style="width: 100%">
          <el-table-column
            prop="a"
            label="物料名称">
          </el-table-column>
          <el-table-column
            prop="b"
            label="物料编号">
          </el-table-column>
          <el-table-column
            prop="c"
            label="上料总量">
          </el-table-column>
          <el-table-column
            prop="d"
            label="剩余数量">
          </el-table-column>
          <el-table-column
            prop="e"
            label="缺料报警">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="六号产线" name="sixth">
        <el-table
          :data="tableData2"
          border
          style="width: 100%">
          <el-table-column
            prop="a"
            label="物料名称">
          </el-table-column>
          <el-table-column
            prop="b"
            label="物料编号">
          </el-table-column>
          <el-table-column
            prop="c"
            label="上料总量">
          </el-table-column>
          <el-table-column
            prop="d"
            label="剩余数量">
          </el-table-column>
          <el-table-column
            prop="e"
            label="缺料报警">
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </d2-container>
</template>

<script>
export default {
  name: 'slgl',
  data () {
    return {
      activeName: 'first',
      tableData1: [{
        a: '物料A',
        b: 'WL001',
        c: '777',
        d: '231',
        e: '正常'
      }, {
        a: '物料B',
        b: 'WL002',
        c: '56',
        d: '123',
        e: '缺料'
      }, {
        a: '物料C',
        b: 'WL003',
        c: '42',
        d: '521',
        e: '正常'
      }, {
        a: '物料D',
        b: 'WL004',
        c: '768',
        d: '678',
        e: '正常'
      }, {
        a: '物料E',
        b: 'WL005',
        c: '67',
        d: '945',
        e: '正常'
      }],
      tableData2: [{
        a: '物料A',
        b: 'WL001',
        c: '906',
        d: '423',
        e: '正常'
      }, {
        a: '物料B',
        b: 'WL002',
        c: '46',
        d: '734',
        e: '正常'
      }, {
        a: '物料C',
        b: 'WL003',
        c: '243',
        d: '47',
        e: '正常'
      }, {
        a: '物料D',
        b: 'WL004',
        c: '763',
        d: '45',
        e: '正常'
      }, {
        a: '物料E',
        b: 'WL005',
        c: '32',
        d: '532',
        e: '正常'
      }]
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
