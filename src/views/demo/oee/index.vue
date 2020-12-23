<template>
  <d2-container>
    <div class="wrap">
      <div class="bbox">
        <el-cascader
          v-model="value"
          :options="data"
          @change="handleNodeClick">
        </el-cascader>
        <el-table
          :data="tableData"
          border
          size="small"
          style="width: 100%">
          <el-table-column
            prop="a"
            label="设备ID"
            width="80">
          </el-table-column>
          <el-table-column
            prop="b"
            label="设备状态"
            width="80">
          </el-table-column>
          <el-table-column
            prop="c"
            label="设备运行时间">
          </el-table-column>
          <el-table-column
            prop="d"
            label="停机时间">
          </el-table-column>
          <el-table-column
            prop="e"
            label="故障时间">
          </el-table-column>
          <el-table-column
            prop="f"
            label="效率"
            width="50">
          </el-table-column>
          <el-table-column
            prop="g"
            label="综合稼动率"
            width="100">
          </el-table-column>
          <el-table-column
            prop="h"
            label="良品率"
            width="70">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="footer">
      <charts />
      <cctu />
    </div>
  </d2-container>
</template>

<script>
import charts from './components/charts'
import cctu from './components/cctu'
export default {
  components: {
    charts,
    cctu
  },
  name: 'oee',
  data () {
    return {
      value: '',
      data: [{
        value: '',
        label: 'A厂',
        children: [{
          value: '',
          label: '车间1',
          children: [{
            value: '',
            label: '产线1',
            children: [{
              value: 0,
              label: '设备1'
            }]
          }]
        }, {
          value: '',
          label: '车间2',
          children: [{
            value: '',
            label: '产线1',
            children: [{
              value: 1,
              label: '设备1',
              id: 1
            }]
          }]
        }]
      }, {
        value: '',
        label: 'B厂',
        children: [{
          value: '',
          label: '车间1',
          children: [{
            value: '',
            label: '产线1',
            children: [{
              value: 2,
              label: '设备1',
              id: 2
            }]
          }]
        }, {
          value: '',
          label: '车间2',
          children: [{
            value: '',
            label: '产线1',
            children: [{
              value: 3,
              label: '设备1',
              id: 3
            }]
          }]
        }]
      }, {
        value: '',
        label: 'C厂',
        children: [{
          value: '',
          label: '车间1',
          children: [{
            value: '',
            label: '产线1',
            children: [{
              value: 4,
              label: '设备1',
              id: 4
            }]
          }]
        }, {
          value: '',
          label: '车间2',
          children: [{
            value: '',
            label: '产线1',
            children: [{
              value: 5,
              label: '设备1',
              id: 5
            }]
          }]
        }]
      }],
      tableData: [{
        a: 'AH001',
        b: '正常',
        c: '2020-10-09 09：00：32',
        d: '2020-10-09 18：00：21',
        e: '',
        f: '92%',
        g: '83%',
        h: '89%'
      }, {
        a: 'AH002',
        b: '正常',
        c: '2020-10-09 09：00：43',
        d: '2020-10-09 18：32：51',
        e: '',
        f: '93%',
        g: '86%',
        h: '83%'
      }, {
        a: 'AH003',
        b: '故障',
        c: '2020-10-09 09：00：43',
        d: '2020-10-09 10：12：32',
        e: '2020-10-09 10：12：32',
        f: '97%',
        g: '86%',
        h: '85%'
      }, {
        a: 'AH004',
        b: '正常',
        c: '2020-10-09 09：00：43',
        d: '2020-10-09 10：12：32',
        e: '',
        f: '93%',
        g: '85%',
        h: '87%'
      }, {
        a: 'AH005',
        b: '正常',
        c: '2020-10-09 09：00：43',
        d: '2020-10-09 10：12：32',
        e: '',
        f: '95%',
        g: '82%',
        h: '83%'
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      arr: []
    }
  },
  mounted () {
    this.tableData.forEach(item => {
      this.arr.push(item)
    })
  },
  methods: {
    handleNodeClick (data) {
      var dd = []
      dd.push(this.arr[this.value[3]])
      this.tableData = dd
    }
  }
}
</script>
<style scoped>
.wrap {
  width: 100%;
  height: 50%;
  display: flex;
}
.footer {
  width: 97%;
  position: absolute;
  bottom: -0px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
.abox {
  width: 30%;
  margin-right: 20px;
  border: solid 3px #eee;
  box-shadow: 10px 10px 5px #888888;
}
.bbox {
  flex: 1;
}
</style>
