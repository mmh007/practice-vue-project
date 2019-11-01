<template>
  <div class="info">
    <h1>新页面</h1>
    <div class="aboeder" ref="chart"></div>
    <!-- <h2>{{ this.markMessge }}</h2> -->
  </div>
</template>

<script>
export default {
  props: {
    markMessge: {
      type: Number
    }
  },
  data() {
    return {}
  },
  methods: {
    initCharts () {
  　　let myChart = this.$echarts.init(this.$refs.chart);
      // console.log(this.$refs.chart)
　　  // 绘制图表
  　　myChart.setOption({
    　　title: { text: '在Vue中使用echarts' }, // 标题提示
    　　tooltip: {}, // 鼠标悬停提示
    　　xAxis: {  // x轴
    　　  data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
  　　  },
    　　yAxis: { // y轴
          // data: [0, 20, 36, 90, 10, 20]
        },
    　　series: [{
      　　name: '销量',
      　　type: 'bar',
      　　data: [5, 20, 36, 90, 10, 20]
  　　  }]
　　  });
　　}
  },
  mounted () {
　　this.initCharts();
　}
}
</script>

<style lang="less">
  h1 {
    color: aqua;
  }
  .aboeder {
    width: 800px;
    height: 500px;
  }
</style>