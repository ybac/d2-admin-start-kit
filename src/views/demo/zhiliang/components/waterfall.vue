<template>
  <ve-waterfall :data="chartData" style="width:50%"></ve-waterfall>
</template>
<script>
export default {
  data () {
    return {
      chartData: {
        columns: ['次品等级', '时间'],
        rows: [
          { 次品等级: '1', 时间: 12 },
          { 次品等级: '2', 时间: 10 },
          { 次品等级: '3', 时间: 5 }
        ]
      }
    }
  }
}
</script>
