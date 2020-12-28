<template>
  <div class="box">
    <ve-histogram
      :data="chartData"
      height="320px"
      style="width:50%"
      :extend="chartExtend"></ve-histogram>
    <ve-pie
      :data="chartData"
      style="width:50%;height:100%;margin-top:-60px"
      :extend="chartExtend"></ve-pie>
  </div>
</template>

<script>
export default {
  data () {
    this.chartExtend = {
      legend: {
        orient: 'vertical',
        x: 'right', // 可设定图例在左、右、居中
        y: 'center', // 可设定图例在上、下、居中
        padding: [0, 0, 0, 0], // 可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
        data: ['1/1', '1/2', '1/3', '1/4', '1/5', '1/6']
      }
    }
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { 日期: '1/1', 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: '1/2', 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: '1/3', 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: '1/4', 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: '1/5', 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: '1/6', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
        ]
      }
    }
  },
  mounted () {
    console.log(this.getStyle())
  },
  methods: {
    getStyle () {
      var style = null
      var a = document.querySelector('.box')
      window.getComputedStyle ? style = window.getComputedStyle(a) : style = a.currentStyle
      return style.width
    }
  }
}
</script>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  width:100%;
  overflow:hidden;
}
</style>
