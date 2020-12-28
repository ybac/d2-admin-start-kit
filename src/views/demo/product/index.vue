<template>
  <d2-container>
    <el-table :data="master_user.data" border height="100%" style="width: 100%" highlight-current-row :row-class-name="tableRowClassName">
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
    <!-- <el-table
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
  </el-table> -->
  </d2-container>
</template>

<script>
export default {
  name: 'product',
  data () {
    return {
      generateId: {
        _count: 1,
        get () {
          return (
            (+new Date()) + '_' + (this._count++)
          )
        }
      },
      tableData: [],
      master_user: {
        sel: null, // 选中行
        columns: [
          { field: 'a', title: '工单ID' },
          { field: 'b', title: '产品ID' },
          { field: 'c', title: '工单状态' },
          { field: 'd', title: '工单类型' },
          { field: 'e', title: '产品数量' },
          { field: 'f', title: '生产进度' },
          { field: 'g', title: '截止日期' },
          { field: 'h', title: '完成日期' }
        ],
        data: [{
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
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    tableRowClassName ({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return 'warning-row'
      } else {
        return 'success-row'
      }
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
      const j = { id: 0, a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', isSet: true, _temporary: true }
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
