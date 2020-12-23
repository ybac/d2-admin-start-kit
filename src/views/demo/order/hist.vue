<template>
  <d2-container>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="完工时间">
        <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date1"></el-date-picker>
      </el-form-item>
      <el-form-item label="产品查询">
        <el-select v-model="formInline.region" placeholder="请选择产品编号">
          <el-option label="CP20201102" value="shanghai"></el-option>
          <el-option label="CP20201103" value="shanghai"></el-option>
          <el-option label="CP20201104" value="shanghai"></el-option>
          <el-option label="CP20201105" value="shanghai"></el-option>
          <el-option label="CP20201106" value="shanghai"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
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
        label="接手日期">
      </el-table-column>
      <el-table-column
        prop="e"
        label="计划完成时间">
      </el-table-column>
      <el-table-column
        prop="e"
        label="完工时间">
      </el-table-column>
    </el-table>
  </d2-container>
</template>

<script>
export default {
  name: 'hist',
  data () {
    return {
      formInline: {
        user: '',
        region: '',
        date1: ''
      },
      tableData: [{
        a: 'DD001',
        b: 'CP20201102',
        c: '137',
        d: '2020-10-09',
        e: '2020-11-10'
      }, {
        a: 'DD002',
        b: 'CP20201103',
        c: '142',
        d: '2020-10-09',
        e: '2020-11-10'
      }, {
        a: 'DD003',
        b: 'CP20201104',
        c: '241',
        d: '2020-10-09',
        e: '2020-11-10'
      }, {
        a: 'DD004',
        b: 'CP20201105',
        c: '424',
        d: '2020-10-09',
        e: '2020-11-10'
      }, {
        a: 'DD005',
        b: 'CP20201106',
        c: '521',
        d: '2020-10-09',
        e: '2020-11-10'
      }]
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>
