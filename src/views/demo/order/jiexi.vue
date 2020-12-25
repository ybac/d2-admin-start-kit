<template>
  <d2-container>
    <el-table :data="master_user.data" border style="width: 100%" highlight-current-row>
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
      <el-table-column>
        <template slot="header" slot-scope="scope">
          <el-button type="primary" size="mini" round @click="sorted(scope)">排产顺序</el-button>
        </template>
        <template slot-scope="scope">
          {{ scope.row.f }}
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
  </el-table> -->
  </d2-container>
</template>

<script>
export default {
  name: 'jiexi',
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
      open: true,
      master_user: {
        sel: null, // 选中行
        columns: [
          { field: 'a', title: '订单编号' },
          { field: 'b', title: '产品编号' },
          { field: 'c', title: '产品数量' },
          { field: 'd', title: '订单进度' },
          { field: 'e', title: '订单产线' }
        ],
        data: [{
          a: 'DD001',
          b: 'CP20201102',
          c: 573,
          d: '85%',
          e: 'A1',
          f: '1',
          i: 2
        }, {
          a: 'DD002',
          b: 'CP20201103',
          c: 44,
          d: '75%',
          e: 'A2',
          f: '2',
          i: 4
        }, {
          a: 'DD003',
          b: 'CP20201104',
          c: 36,
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
        }]
      }
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
        this.master_user.data.sort(this.compare('i'))
      } else {
        this.master_user.data.sort(this.compare('c'))
      }
      this.master_user.data.forEach((item, idx) => {
        item.f = idx + 1
      })
    },
    // 读取表格数据
    readMasterUser () {
      // 根据实际情况，自己改下啊
      this.master_user.data.map((i, idx) => {
        i.f = idx + 1
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
      this.master_user.data.forEach((item, idx) => {
        item.f = idx + 1
        item.i = this.master_user.data.length
      })
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
