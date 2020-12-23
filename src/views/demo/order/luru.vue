<template>
  <d2-container>
    <div class="lf">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="订单编号">
          <el-select v-model="form.a" placeholder="请选择订单编号">
            <el-option label="DD001" value="DD001"></el-option>
            <el-option label="DD002" value="DD002"></el-option>
            <el-option label="DD003" value="DD003"></el-option>
            <el-option label="DD004" value="DD004"></el-option>
            <el-option label="DD005" value="DD005"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="产品编号">
          <el-select v-model="form.b" placeholder="请选择产品编号">
            <el-option label="CP20201102" value="CP20201102"></el-option>
            <el-option label="CP20201103" value="CP20201103"></el-option>
            <el-option label="CP20201104" value="CP20201104"></el-option>
            <el-option label="CP20201105" value="CP20201105"></el-option>
            <el-option label="CP20201106" value="CP20201106"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="产品数量">
          <el-input v-model="form.c" style="width:221px"></el-input>
        </el-form-item>
        <el-form-item label="接手日期">
          <el-date-picker type="date" placeholder="选择日期" value-format="yyyy-MM-dd" v-model="form.d"></el-date-picker>
        </el-form-item>
        <el-form-item label="计划完成时间">
          <el-date-picker type="date" placeholder="选择日期" value-format="yyyy-MM-dd" v-model="form.e"></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <!-- <el-button>取消</el-button> -->
        </el-form-item>
      </el-form>
    </div>
    <div class="rt">
      <el-table
        :data="tableData"
        border>
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
          label="接手日期">
        </el-table-column>
        <el-table-column
          prop="e"
          label="计划完成时间">
        </el-table-column>
      </el-table>
    </div>
  </d2-container>
</template>

<script>
export default {
  name: 'luru',
  data () {
    return {
      form: {
        a: '',
        b: '',
        c: '',
        d: '',
        e: ''
      },
      tableData: []
    }
  },
  methods: {
    onSubmit () {
      this.tableData.push(this.form)
      console.log(this.tableData)
    }
  }
}
</script>

<style scoped>
.lf {
  width: 30%;
  float: left;
}
.rt {
  width: 70%;
  float: left;
}
</style>
