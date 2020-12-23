<template>
  <ve-line
    :data="chartData"
    :mark-line="markLine"
    :mark-point="markPoint"
    width="500px"
    height="300px">
  </ve-line>
</template>

<script>
// 使用前需先引入对应模块
import 'echarts/lib/component/markLine'
import 'echarts/lib/component/markPoint'
export default {
  name: 'page1',
  data () {
    this.markLine = {
      data: [
        {
          name: '平均线',
          type: 'average'
        }
      ]
    }
    this.markPoint = {
      data: [
        {
          name: '最大值',
          type: 'max'
        }
      ]
    }
    return {
      chartData: {
        columns: ['日期', '停机次数', '停机时长'],
        rows: [
          { 日期: '1月1日', 停机次数: 15, 停机时长: 12.31 },
          { 日期: '1月2日', 停机次数: 12, 停机时长: 25.23 },
          { 日期: '1月3日', 停机次数: 21, 停机时长: 10.00 },
          { 日期: '1月4日', 停机次数: 41, 停机时长: 32.23 },
          { 日期: '1月5日', 停机次数: 31, 停机时长: 30.23 },
          { 日期: '1月6日', 停机次数: 71, 停机时长: 55.23 }
        ]
      }
    }
  }
}
</script>
