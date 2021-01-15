<template>
  <d2-container>
    <!-- <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="配方名称">
        <el-input v-model="formInline.date1"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form> -->
    <el-table
      :data="master_user.data"
      border
      stripe
      height="500"
      highlight-current-row
      :row-class-name="tableRowClassName"
      style="width: 100%">
      <el-table-column
        prop="a"
        label="序号">
        <template slot-scope="scope">
          <span v-if="scope.row.isSet">
            <el-input size="mini" placeholder="请输入内容" v-model="master_user.sel.a">
            </el-input>
          </span>
          <span v-else>{{scope.row.a}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="c"
        label="1#设备">
        <el-table-column
          prop="c1"
          label="温度">
          <template slot-scope="scope">
            <span v-if="scope.row.isSet">
              <el-input size="mini" placeholder="请输入内容" v-model="master_user.sel.c1">
              </el-input>
            </span>
            <span v-else>{{scope.row.c1}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="c2"
          label="压力">
          <template slot-scope="scope">
            <span v-if="scope.row.isSet">
              <el-input size="mini" placeholder="请输入内容" v-model="master_user.sel.c2">
              </el-input>
            </span>
            <span v-else>{{scope.row.c2}}</span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="d"
        label="2#设备">
        <el-table-column
          prop="d1"
          label="温度">
          <template slot-scope="scope">
            <span v-if="scope.row.isSet">
              <el-input size="mini" placeholder="请输入内容" v-model="master_user.sel.d1">
              </el-input>
            </span>
            <span v-else>{{scope.row.d1}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="d2"
          label="压力">
          <template slot-scope="scope">
            <span v-if="scope.row.isSet">
              <el-input size="mini" placeholder="请输入内容" v-model="master_user.sel.d2">
              </el-input>
            </span>
            <span v-else>{{scope.row.d2}}</span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="e"
        label="3#设备">
        <el-table-column
          prop="e1"
          label="温度">
          <template slot-scope="scope">
            <span v-if="scope.row.isSet">
              <el-input size="mini" placeholder="请输入内容" v-model="master_user.sel.e1">
              </el-input>
            </span>
            <span v-else>{{scope.row.e1}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="e2"
          label="压力">
          <template slot-scope="scope">
            <span v-if="scope.row.isSet">
              <el-input size="mini" placeholder="请输入内容" v-model="master_user.sel.e2">
              </el-input>
            </span>
            <span v-else>{{scope.row.e2}}</span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="f"
        label="4#设备">
        <el-table-column
          prop="f1"
          label="温度">
          <template slot-scope="scope">
            <span v-if="scope.row.isSet">
              <el-input size="mini" placeholder="请输入内容" v-model="master_user.sel.f1">
              </el-input>
            </span>
            <span v-else>{{scope.row.f1}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="f2"
          label="压力">
          <template slot-scope="scope">
            <span v-if="scope.row.isSet">
              <el-input size="mini" placeholder="请输入内容" v-model="master_user.sel.f2">
              </el-input>
            </span>
            <span v-else>{{scope.row.f2}}</span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="g"
        label="5#设备">
        <el-table-column
          prop="g1"
          label="温度">
          <template slot-scope="scope">
            <span v-if="scope.row.isSet">
              <el-input size="mini" placeholder="请输入内容" v-model="master_user.sel.g1">
              </el-input>
            </span>
            <span v-else>{{scope.row.g1}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="g2"
          label="压力">
          <template slot-scope="scope">
            <span v-if="scope.row.isSet">
              <el-input size="mini" placeholder="请输入内容" v-model="master_user.sel.g2">
              </el-input>
            </span>
            <span v-else>{{scope.row.g2}}</span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="b"
        label="时间"
        width="160">
        <template slot-scope="scope">
          <span v-if="scope.row.isSet">
            <el-input size="mini" placeholder="请输入内容" v-model="master_user.sel.a">
            </el-input>
          </span>
          <span v-else>{{scope.row.b}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="150">
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
    <!-- <div class="el-table-add-row" style="width: 99.2%;" @click="add()"><span>+ 添加</span></div> -->
  </d2-container>
</template>

<script>
export default {
  name: 'peifang',
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
      dialogFormVisible: false,
      dialog: false,
      tit: '',
      sizeForm: {
        a: '',
        b: '',
        c1: '',
        c2: '',
        d1: '',
        d2: '',
        e1: '',
        e2: '',
        f1: '',
        f2: '',
        g1: '',
        g2: ''
      },
      form: {
        a: '',
        b: '',
        c1: '',
        c2: '',
        d1: '',
        d2: '',
        e1: '',
        e2: '',
        f1: '',
        f2: '',
        g1: '',
        g2: ''
      },
      tableData: [],
      master_user: {
        sel: null, // 选中行
        columns: [
          { field: 'a', title: '配方名称' },
          { field: 'c', title: '物料1', wl: { id: { field: 'c1', title: 'ID' }, num: { field: 'c2', title: '数量' } } },
          { field: 'd', title: '物料2', wl: { id: { field: 'd1', title: 'ID' }, num: { field: 'd2', title: '数量' } } },
          { field: 'e', title: '物料3', wl: { id: { field: 'e1', title: 'ID' }, num: { field: 'e2', title: '数量' } } },
          { field: 'f', title: '物料4', wl: { id: { field: 'f1', title: 'ID' }, num: { field: 'f2', title: '数量' } } },
          { field: 'g', title: '物料5', wl: { id: { field: 'g1', title: 'ID' }, num: { field: 'g2', title: '数量' } } },
          { field: 'b', title: '时间' }
        ],
        data: [{
          a: '1',
          b: '2021-01-11 10:04:00',
          c1: '34 ℃',
          c2: '33 P',
          d1: '14 ℃',
          d2: '23.34 P',
          e1: '12 ℃',
          e2: '88 P',
          f1: '43 ℃',
          f2: '42 P',
          g1: '47 ℃',
          g2: '22 P'
        }, {
          a: '2',
          b: '2021-01-11 10:03:00',
          c1: '36 ℃',
          c2: '33 P',
          d1: '34 ℃',
          d2: '23.34 P',
          e1: '45 ℃',
          e2: '88 P',
          f1: '32 ℃',
          f2: '42 P',
          g1: '45 ℃',
          g2: '22 P'
        }, {
          a: '3',
          b: '2021-01-11 10:02:00',
          c1: '34 ℃',
          c2: '21 P',
          d1: '43 ℃',
          d2: '23.34 P',
          e1: '33 ℃',
          e2: '88 P',
          f1: '35 ℃',
          f2: '42 P',
          g1: '34 ℃',
          g2: '32 P'
        }, {
          a: '4',
          b: '2021-01-11 10:01:00',
          c1: '24 ℃',
          c2: '33 P',
          d1: '27 ℃',
          d2: '23.34 P',
          e1: '53 ℃',
          e2: '88 P',
          f1: '33 ℃',
          f2: '42 P',
          g1: '24 ℃',
          g2: '22 P'
        }, {
          a: '5',
          b: '2021-01-11 10:00:00',
          c1: '34 ℃',
          c2: '33 P',
          d1: '24 ℃',
          d2: '23.34 P',
          e1: '31 ℃',
          e2: '88 P',
          f1: '32 ℃',
          f2: '42 P',
          g1: '45 ℃',
          g2: '22 P'
        }]
      },
      num: ''
    }
  },
  methods: {
    handleClick (row, i) {
      console.log(row)
      this.dialogFormVisible = true
      this.tit = '修改:' + row.a
      this.form = Object.assign({}, row)
      this.num = i
    },
    tableRowClassName ({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return 'warning-row'
      } else {
        return 'success-row'
      }
    },
    cancel () {
      Object.keys(this.form).forEach(key => { this.form[key] = '' })
      this.dialogFormVisible = false
    },
    cancel2 () {
      this.dialog = false
    },
    changed () {
      this.tableData.splice(this.num, 1, this.form)
      this.dialogFormVisible = false
    },
    add () {
      for (const i of this.master_user.data) {
        if (i.isSet) return this.$message.warning('请先保存当前编辑项')
      }
      const j = { id: 0, a: '', b: '', c1: '', c2: '', d1: '', d2: '', e1: '', e2: '', f1: '', f2: '', g1: '', g2: '', isSet: true, _temporary: true }
      this.master_user.data.push(j)
      this.master_user.sel = JSON.parse(JSON.stringify(j))
    },
    onSubmit () {},
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
      const j = { id: 0, a: '', b: '', c1: '', c2: '', d1: '', d2: '', e1: '', e2: '', f1: '', f2: '', g1: '', g2: '', isSet: true, _temporary: true }
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
.el-table-add-row {
  margin-top: 10px;
  width: 100%;
  height: 34px;
  border: 1px dashed #67C23A;
  color: #67C23A;
  border-radius: 3px;
  cursor: pointer;
  justify-content: center;
  display: flex;
  line-height: 34px;
}
.el-table-add-row:hover {
  background: #67C23A;
  color: aliceblue;
}
</style>
