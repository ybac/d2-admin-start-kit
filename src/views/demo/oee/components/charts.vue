<template>
  <ve-histogram
    :data="chartData"
    height="300px"
    width="500px"
    :extend="chartExtend"
    style="margin-bottom:-55px">
  </ve-histogram>
</template>

<script>
export default {
  name: 'page1',
  data () {
    this.chartExtend = {
      series (v) {
        v.forEach(i => {
          i.barWidth = 10
        })
        return v
      },
      tooltip (v) {
        v.trigger = 'none'
        return v
      }
    }
    return {
      chartData: {
        columns: ['日期', '综合效率', '各项损失', '设备可用率'],
        rows: [
          { 日期: '1月1日', 综合效率: 0.411, 各项损失: 0.2, 设备可用率: 0.9 },
          { 日期: '1月2日', 综合效率: 0.411, 各项损失: 0.5, 设备可用率: 0.9 },
          { 日期: '1月3日', 综合效率: 0.411, 各项损失: 0.10, 设备可用率: 0.9 },
          { 日期: '1月4日', 综合效率: 0.411, 各项损失: 0.32, 设备可用率: 0.9 },
          { 日期: '1月5日', 综合效率: 0.411, 各项损失: 0.30, 设备可用率: 0.9 },
          { 日期: '1月6日', 综合效率: 0.411, 各项损失: 0.55, 设备可用率: 0.9 }
        ]
      }
    }
  }
}
</script>
