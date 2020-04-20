<template>
  <ve-line :data="chartData"></ve-line>
</template>

<script>
export default {
  name: "Chart",
  data() {
    // this.chartSettings = {
    //   min: 10000
    // };
    return {
      chartData: {
        columns: [],
        rows: []
      },
      ss: "sss"
    };
  },
  created: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      let self = this;
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