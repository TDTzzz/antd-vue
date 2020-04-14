<template>
  <ve-line :data="chartData"></ve-line>
</template>

<script>
export default {
  name: "ChartTest",
  data() {
     this.chartSettings = {
        xAxisType: 'time'
      }
    return {
      chartData: {
        columns: ["日期", "区域", "均价", "数量"],
        rows: [
          { 日期: "2018-05-22", 丁字桥: 32371, 均价: 19810, 数量: 1000 },
          { 日期: "2018-05-23", 区域: 12328, 均价: 4398, 数量: 2222 },
          { 日期: "2018-05-24", 区域: 92381, 均价: 52910, 数量: 3334 }
        ]
      },
      ss: "sss"
    };
  },
  created: function() {
    console.log(this.chartData);
    console.log(this.ss);
    // this.chartData = {};
    this.getData();
  },
  methods: {
    getData: function() {
      let self = this;
      console.log("111");
      this.$axios
        .get("http://localhost:8081/price/region/武昌")
        .then(function(res) {
          self.chartData.columns = res.data[0];
          self.chartData.rows = res.data[1];
        });
    }
  }
};
</script>