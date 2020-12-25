<template>
  <d2-container>
    <div class="wrap">
      <div class="bbox">
        <el-cascader
          v-model="value"
          :options="data"
          @change="handleNodeClick">
        </el-cascader>
        <el-table size="mini" :data="master_user.data" border height="250" style="width: 100%" highlight-current-row>
          <!-- <el-table-column type="index"></el-table-column> -->
          <el-table-column v-for="(v, i) in master_user.columns" :key="i" :prop="v.field" :label="v.title" :width="v.width">
            <template slot-scope="scope">
              <span v-if="scope.row.isSet">
                <el-input size="mini" placeholder="请输入内容" v-model="master_user.sel[v.field]">
                </el-input>
              </span>
              <span v-else>{{scope.row[v.field]}}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <span class="el-tag el-tag--info el-tag--mini" style="cursor: pointer;" @click="pwdChange(scope.row,scope.$index,true)">
                {{scope.row.isSet?'保存':"修改"}}
              </span>
              <span class="el-tag el-tag--info el-tag--mini" style="cursor: pointer;" @click="addMasterUser(scope.$index)">
                插入
              </span>
              <span v-if="!scope.row.isSet" class="el-tag el-tag--danger el-tag--mini" style="cursor: pointer;" @click="del(scope.$index)">
                删除
              </span>
              <span v-else class="el-tag  el-tag--mini" style="cursor: pointer;" @click="pwdChange(scope.row,scope.$index,false)">
                取消
              </span>
            </template>
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
      tableData: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      arr: [],
      generateId: {
        _count: 1,
        get () {
          return (
            (+new Date()) + '_' + (this._count++)
          )
        }
      },
      master_user: {
        sel: null, // 选中行
        columns: [
          { field: 'a', title: '订单编号' },
          { field: 'b', title: '产品编号' },
          { field: 'c', title: '产品数量' },
          { field: 'd', title: '接手日期' },
          { field: 'e', title: '计划完成时间' },
          { field: 'f', title: '完工时间' }
        ],
        data: [{
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
        }]
      }
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
    },
    // 读取表格数据
    readMasterUser () {
      // 根据实际情况，自己改下啊
      this.master_user.data.map(i => {
        i.id = this.generateId.get() // 模拟后台插入成功后有了id
        i.isSet = false // 给后台返回数据添加`isSet`标识
        return i
      })
    },
    // 添加
    addMasterUser (index) {
      for (const i of this.master_user.data) {
        if (i.isSet) return this.$message.warning('请先保存当前编辑项')
      }
      const j = { id: 0, a: '', b: '', c: '', d: '', e: '', f: '', isSet: true, _temporary: true }
      this.master_user.data.splice(index, 0, j)
      this.master_user.sel = JSON.parse(JSON.stringify(j))
    },
    // 删除
    del (index) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.master_user.data.splice(index, 1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 修改
    pwdChange (row, index, cg) {
      // 点击修改 判断是否已经保存所有操作
      var that = this
      for (const i of this.master_user.data) {
        if (i.isSet && i.id !== row.id) {
          this.$message.warning('请先保存当前编辑项')
          return false
        }
      }
      // 是否是取消操作
      if (!cg) {
        if (!this.master_user.sel.id) this.master_user.data.splice(index, 1)
        return (row.isSet = !row.isSet)
      }
      // 提交数据
      if (row.isSet) {
        // 项目是模拟请求操作  自己修改下
        (function () {
          const data = JSON.parse(JSON.stringify(that.master_user.sel))
          for (const k in data) row[k] = data[k]
          that.$message({
            type: 'success',
            message: '保存成功!'
          })
          // 然后这边重新读取表格数据
          that.readMasterUser()
          row.isSet = false
        })()
      } else {
        this.master_user.sel = JSON.parse(JSON.stringify(row))
        row.isSet = true
      }
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
