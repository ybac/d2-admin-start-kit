<template>
  <d2-container>
    <ve-pie
      :data="chartData"
      width="500px"
      height="320px"
      :extend="chartExtend"></ve-pie>
  </d2-container>
</template>

<script>
export default {
  data () {
    this.chartExtend = {
      legend: {
        orient: 'vertical',
        x: 'left', // 可设定图例在左、右、居中
        y: 'center', // 可设定图例在上、下、居中
        padding: [0, 50, 0, 0], // 可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
        data: ['1/1', '1/2', '1/3', '1/4', '1/5', '1/6']
      }
    }
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { 日期: '1/1', 访问用户: 1393 },
          { 日期: '1/2', 访问用户: 3530 },
          { 日期: '1/3', 访问用户: 2923 },
          { 日期: '1/4', 访问用户: 1723 },
          { 日期: '1/5', 访问用户: 3792 },
          { 日期: '1/6', 访问用户: 4593 }
        ]
      }
    }
  }
}
</script>
