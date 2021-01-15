<template>
  <d2-container>
    <el-table :data="master_user.data" border style="width: 100%" highlight-current-row :row-class-name="tableRowClassName">
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
  </d2-container>
</template>

<script>
export default {
  name: 'war',
  data () {
    return {
      formInline: {
        user: '',
        region: '',
        date1: [new Date(2020, 10, 10, 10, 10), new Date(2020, 10, 11, 10, 10)]
      },
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
          { field: 'a', title: '料仓编号' },
          { field: 'b', title: '配料完成时间' },
          { field: 'c', title: '配料目标重量' },
          { field: 'd', title: '配料实际重量' },
          { field: 'e', title: '偏差重量' },
          { field: 'f', title: '配方编号' }
        ],
        data: [{
          a: '1#料仓',
          b: '2020-11-10 04：33：11',
          c: '56 KG',
          d: '55.97KG',
          e: '0.03KG',
          f: 'PF001'
        }, {
          a: '2#料仓',
          b: '2020-12-02 23：32：18',
          c: '77KG',
          d: '77.1KG',
          e: '0.1KG',
          f: 'PF002'
        }, {
          a: '3#料仓',
          b: '2020-11-10 04：44：11',
          c: '32KG',
          d: '32KG',
          e: '0',
          f: 'PF003'
        }, {
          a: '4#料仓',
          b: '2020-11-03 01：14：56',
          c: '49KG',
          d: '48.7',
          e: '0.3KG',
          f: 'PF004'
        }, {
          a: '5#料仓',
          b: '2020-11-03 14：34：52',
          c: '50KG',
          d: '50.08KG',
          e: '0.08KG',
          f: 'PF005'
        }, {
          a: '6#料仓',
          b: '2020-12-02 23：32：18',
          c: '89KG',
          d: '89.02KG',
          e: '0.02KG',
          f: 'PF006'
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
