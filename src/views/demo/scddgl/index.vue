<template>
  <d2-container>
    <template slot="header">
      <el-table size="mini" :data="master_user.data" border height="200" style="width: 100%" highlight-current-row>
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
    </template>
    <div class="box">
      <Iframe name="tt" style="height:100%; width:50%" src="https://www.thingjs.com/s/99e424b38dca428f4d4b1979?params=105b0f77fd24654d4eebc434e9" marginwidth="1" marginheight="1"    scrolling="yes" frameborder="10"></Iframe>
      <Iframe name="tt" style="height:100%; width:50%" src="https://www.thingjs.com/s/a4319c710e563c9e9cf21727?params=105b0f77fd24654d4eebc434e9" marginwidth="1" marginheight="1"    scrolling="yes" frameborder="10"></Iframe>
    </div>
  </d2-container>
</template>

<script>
export default {
  name: 'scddgl',
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
          { field: 'a', title: '运送物料' },
          { field: 'b', title: '物料名称' },
          { field: 'c', title: '物料编码' },
          { field: 'd', title: '数量', width: '80' },
          { field: 'e', title: '单位', width: '80' },
          { field: 'f', title: '目标产线' },
          { field: 'g', title: '目标工位' },
          { field: 'h', title: 'AVG编号' },
          { field: 'i', title: '上料时间' }
        ],
        data: [{
          a: 'WL001',
          b: '物料001',
          c: 'wl20201101',
          d: '342',
          e: 'KG',
          f: 'A产线',
          g: '一号工位',
          h: 'AVG2912983',
          i: '2020-10-09 18：00：21'
        }, {
          a: 'WL002',
          b: '物料002',
          c: 'wl20201202',
          d: '432',
          e: 'KG',
          f: 'B产线',
          g: '一号工位',
          h: 'AVG3214562',
          i: '2020-10-09 18：00：21'
        }]
      }
    }
  },
  mounted () {
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
      const j = { id: 0, a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', i: '', isSet: true, _temporary: true }
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
  height: 100%;
  display: flex;
}
.abox {
  width: 30%;
}
.bbox {
  flex: 1;
}
.box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
