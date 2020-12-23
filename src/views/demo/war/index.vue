<template>
  <d2-container>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="报警时间">
        <el-date-picker
          v-model="formInline.date1"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
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
        label="报警时间">
      </el-table-column>
      <el-table-column
        prop="b"
        label="报警设备">
      </el-table-column>
      <el-table-column
        prop="c"
        label="报警信息">
      </el-table-column>
      <el-table-column
        prop="d"
        label="确认时间">
      </el-table-column>
      <el-table-column
        prop="e"
        label="解除时间">
      </el-table-column>
      <el-table-column
        prop="f"
        label="确认人">
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
      tableData: [{
        a: '2020-11-10 04:00:12',
        b: 'SB20201102',
        c: '电路异常',
        d: '2020-11-10 04：33：11',
        e: '2020-11-10 04：44：11',
        f: '刘华'
      }, {
        a: '2020-12-01 13:45:56',
        b: 'SB20202203',
        c: '缺料',
        d: '2020-12-02 23：32：18',
        e: '2020-11-03 01：14：56',
        f: '李曼'
      }, {
        a: '2020-11-10 04:00:12',
        b: 'SB20201102',
        c: '电路异常',
        d: '2020-11-10 04：33：11',
        e: '2020-11-10 04：44：11',
        f: '刘华'
      }, {
        a: '2020-12-01 13:45:56',
        b: 'SB20202203',
        c: '缺料',
        d: '2020-12-02 23：32：18',
        e: '2020-11-03 01：14：56',
        f: '王磊'
      }, {
        a: '2020-11-10 04:00:12',
        b: 'SB20201102',
        c: '电路异常',
        d: '2020-11-10 04：33：11',
        e: '2020-11-10 04：44：11',
        f: '张思德'
      }, {
        a: '2020-12-01 13:45:56',
        b: 'SB20202203',
        c: '缺料',
        d: '2020-12-02 23：32：18',
        e: '2020-11-03 01：14：56',
        f: '刘华'
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
