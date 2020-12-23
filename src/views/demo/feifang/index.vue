<template>
  <d2-container>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="配方名称">
        <el-input v-model="formInline.date1"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="success" @click="add">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      border
      stripe
      highlight-current-row
      style="width: 100%">
      <el-table-column
        prop="a"
        label="配方名称">
      </el-table-column>
      <el-table-column
        prop="b"
        label="配方编号">
      </el-table-column>
      <el-table-column
        prop="c"
        label="物料1">
        <el-table-column
          prop="c1"
          label="ID">
        </el-table-column>
        <el-table-column
          prop="c2"
          label="数量">
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="d"
        label="物料2">
        <el-table-column
          prop="d1"
          label="ID">
        </el-table-column>
        <el-table-column
          prop="d2"
          label="数量">
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="e"
        label="物料3">
        <el-table-column
          prop="e1"
          label="ID">
        </el-table-column>
        <el-table-column
          prop="e2"
          label="数量">
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="f"
        label="物料4">
        <el-table-column
          prop="f1"
          label="ID">
        </el-table-column>
        <el-table-column
          prop="f2"
          label="数量">
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="g"
        label="物料5">
        <el-table-column
          prop="g1"
          label="ID">
        </el-table-column>
        <el-table-column
          prop="g2"
          label="数量">
        </el-table-column>
      </el-table-column>
      <el-table-column
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row, scope.$index)" type="text" size="small">修改</el-button>
          <el-button @click="del(scope.$index)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :title="tit" :visible.sync="dialogFormVisible">
      <el-form ref="form" :model="form" label-width="120px" size="mini">
        <el-form-item label="配方名称">
          <el-input v-model="form.a"></el-input>
        </el-form-item>
        <el-form-item label="配方编号">
          <el-input v-model="form.b"></el-input>
        </el-form-item>
        <el-form-item label="物料1-ID">
          <el-input v-model="form.c1"></el-input>
        </el-form-item>
        <el-form-item label="物料1-数量">
          <el-input v-model="form.c2"></el-input>
        </el-form-item>
        <el-form-item label="物料2-ID">
          <el-input v-model="form.d1"></el-input>
        </el-form-item>
        <el-form-item label="物料2-数量">
          <el-input v-model="form.d2"></el-input>
        </el-form-item>
        <el-form-item label="物料3-ID">
          <el-input v-model="form.e1"></el-input>
        </el-form-item>
        <el-form-item label="物料3-数量">
          <el-input v-model="form.e2"></el-input>
        </el-form-item>
        <el-form-item label="物料4-ID">
          <el-input v-model="form.f1"></el-input>
        </el-form-item>
        <el-form-item label="物料4-数量">
          <el-input v-model="form.f2"></el-input>
        </el-form-item>
        <el-form-item label="物料5-ID">
          <el-input v-model="form.g1"></el-input>
        </el-form-item>
        <el-form-item label="物料5-数量">
          <el-input v-model="form.g2"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="changed">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="新增配方" :visible.sync="dialog">
      <el-form ref="form" :model="sizeForm" label-width="120px" size="mini">
        <el-form-item label="配方名称">
          <el-input v-model="sizeForm.a"></el-input>
        </el-form-item>
        <el-form-item label="配方编号">
          <el-input v-model="sizeForm.b"></el-input>
        </el-form-item>
        <el-form-item label="物料1-ID">
          <el-input v-model="sizeForm.c1"></el-input>
        </el-form-item>
        <el-form-item label="物料1-数量">
          <el-input v-model="sizeForm.c2"></el-input>
        </el-form-item>
        <el-form-item label="物料2-ID">
          <el-input v-model="sizeForm.d1"></el-input>
        </el-form-item>
        <el-form-item label="物料2-数量">
          <el-input v-model="sizeForm.d2"></el-input>
        </el-form-item>
        <el-form-item label="物料3-ID">
          <el-input v-model="sizeForm.e1"></el-input>
        </el-form-item>
        <el-form-item label="物料3-数量">
          <el-input v-model="sizeForm.e2"></el-input>
        </el-form-item>
        <el-form-item label="物料4-ID">
          <el-input v-model="sizeForm.f1"></el-input>
        </el-form-item>
        <el-form-item label="物料4-数量">
          <el-input v-model="sizeForm.f2"></el-input>
        </el-form-item>
        <el-form-item label="物料5-ID">
          <el-input v-model="sizeForm.g1"></el-input>
        </el-form-item>
        <el-form-item label="物料5-数量">
          <el-input v-model="sizeForm.g2"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel2">取 消</el-button>
        <el-button type="primary" @click="sure">确 定</el-button>
      </div>
    </el-dialog>
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
      tableData: [{
        a: '配方1',
        b: 'PF001',
        c1: 'WL1',
        c2: '33 KG',
        d1: 'WL2',
        d2: '23.34 KG',
        e1: 'WL3',
        e2: '88 KG',
        f1: 'WL4',
        f2: '42 KG',
        g1: 'WL5',
        g2: '22 KG'
      }, {
        a: '配方2',
        b: 'PF002',
        c1: 'WL1',
        c2: '33 KG',
        d1: 'WL2',
        d2: '23.34 KG',
        e1: 'WL3',
        e2: '88 KG',
        f1: 'WL4',
        f2: '42 KG',
        g1: 'WL5',
        g2: '22 KG'
      }, {
        a: '配方3',
        b: 'PF003',
        c1: 'WL1',
        c2: '33 KG',
        d1: 'WL2',
        d2: '23.34 KG',
        e1: 'WL3',
        e2: '88 KG',
        f1: 'WL4',
        f2: '42 KG',
        g1: 'WL5',
        g2: '22 KG'
      }, {
        a: '配方4',
        b: 'PF004',
        c1: 'WL1',
        c2: '33 KG',
        d1: 'WL2',
        d2: '23.34 KG',
        e1: 'WL3',
        e2: '88 KG',
        f1: 'WL4',
        f2: '42 KG',
        g1: 'WL5',
        g2: '22 KG'
      }, {
        a: '配方5',
        b: 'PF005',
        c1: 'WL1',
        c2: '33 KG',
        d1: 'WL2',
        d2: '23.34 KG',
        e1: 'WL3',
        e2: '88 KG',
        f1: 'WL4',
        f2: '42 KG',
        g1: 'WL5',
        g2: '22 KG'
      }],
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
      this.dialog = true
      this.tit = '新增配方'
    },
    sure () {
      this.tableData.unshift(this.sizeForm)
      this.sizeForm = {
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
      }
      this.dialog = false
    },
    del (row) {
      this.$confirm('此操作将永久删除该配方, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData.splice(row, 1)
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
    onSubmit () {}
  }
}
</script>
