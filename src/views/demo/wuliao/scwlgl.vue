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
  </el-table> -->
  </d2-container>
</template>

<script>
export default {
  name: 'scwlgl',
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
      master_user: {
        sel: null, // 选中行
        columns: [
          { field: 'a', title: '产品单号' },
          { field: 'b', title: '物料名称' },
          { field: 'c', title: '物料编号' },
          { field: 'd', title: '数量' },
          { field: 'e', title: '单位' },
          { field: 'f', title: '生产产线' },
          { field: 'g', title: '生产工位' },
          { field: 'h', title: '上料时间' }
        ],
        data: [{
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
      },
      tableData: []
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
