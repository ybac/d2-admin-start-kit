<template>
  <d2-container>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="产品编号">
        <el-input v-model="formInline.date1"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
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
        date1: ''
      },
      generateId: {
        _count: 1,
        get () {
          return (
            (+new Date()) + '_' + (this._count++)
          )
        }
      },
      tableData: [{
        a: '2020-11-10 10:00:12',
        b: '原材料出库'
      }, {
        a: '2020-11-10 10:01:56',
        b: '3号产线4号工位进行加工'
      }, {
        a: '2020-11-10 10:03:12',
        b: '产品加工完成，送入6号成品库'
      }, {
        a: '2020-11-10 10:00:12',
        b: '原材料出库'
      }, {
        a: '2020-11-10 10:01:56',
        b: '3号产线4号工位进行加工'
      }, {
        a: '2020-11-10 10:03:12',
        b: '产品加工完成，送入6号成品库'
      }, {
        a: '2020-11-10 10:04:56',
        b: '原材料出库'
      }, {
        a: '2020-11-10 10:06:12',
        b: '6号产线5号工位进行加工'
      }, {
        a: '2020-11-10 10:07:56',
        b: '6号产线7号工位进行加工'
      }, {
        a: '2020-11-10 10:09:56',
        b: '产品加工完成，送入7号成品库'
      }, {
        a: '2020-11-10 10:04:56',
        b: '原材料出库'
      }, {
        a: '2020-11-10 10:06:12',
        b: '6号产线5号工位进行加工'
      }, {
        a: '2020-11-10 10:07:56',
        b: '6号产线7号工位进行加工'
      }, {
        a: '2020-11-10 10:09:56',
        b: '产品加工完成，送入7号成品库'
      }, {
        a: '2020-11-10 10:11:56',
        b: '原材料出库'
      }, {
        a: '2020-11-10 10:13:56',
        b: '7号产线2号工位进行加工'
      }, {
        a: '2020-11-10 10:15:56',
        b: '产品加工完成，送入9号成品库'
      }, {
        a: '2020-11-10 10:11:56',
        b: '原材料出库'
      }, {
        a: '2020-11-10 10:13:56',
        b: '7号产线2号工位进行加工'
      }, {
        a: '2020-11-10 10:15:56',
        b: '产品加工完成，送入9号成品库'
      }],
      master_user: {
        sel: null, // 选中行
        columns: [
          { field: 'a', title: '时间', width: '160' },
          { field: 'b', title: '生产记录' }
        ],
        data: []
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
      this.master_user.data = []
      if (this.formInline.date1 === 'CP001') {
        this.master_user.data.push(this.tableData[0])
        this.master_user.data.push(this.tableData[1])
        this.master_user.data.push(this.tableData[2])
        this.master_user.data.push(this.tableData[3])
        this.master_user.data.push(this.tableData[4])
        this.master_user.data.push(this.tableData[5])
      }
      if (this.formInline.date1 === 'CP002') {
        this.master_user.data.push(this.tableData[6])
        this.master_user.data.push(this.tableData[7])
        this.master_user.data.push(this.tableData[8])
        this.master_user.data.push(this.tableData[9])
        this.master_user.data.push(this.tableData[10])
        this.master_user.data.push(this.tableData[11])
        this.master_user.data.push(this.tableData[12])
        this.master_user.data.push(this.tableData[13])
      }
      if (this.formInline.date1 === 'CP003') {
        this.master_user.data.push(this.tableData[14])
        this.master_user.data.push(this.tableData[15])
        this.master_user.data.push(this.tableData[16])
        this.master_user.data.push(this.tableData[17])
        this.master_user.data.push(this.tableData[18])
        this.master_user.data.push(this.tableData[19])
      }
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
      const j = { id: 0, a: '', b: '', isSet: true, _temporary: true }
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
