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
  name: 'pag',
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
          { field: 'a', title: '订单ID' },
          { field: 'b', title: '产品ID' },
          { field: 'c', title: '次品率' },
          { field: 'd', title: '次品等级' },
          { field: 'e', title: '不良项目名称' },
          { field: 'f', title: '不良描述' },
          { field: 'g', title: '处理办法' }
        ],
        data: [{
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
  },
  methods: {
    onSubmit () {
      console.log('submit!')
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
      const j = { id: 0, a: '', b: '', c: '', d: '', e: '', f: '', g: '', isSet: true, _temporary: true }
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
