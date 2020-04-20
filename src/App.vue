<template>
  <div id="app">
    <Chart/>
    <Table/>
    <Form/>
  </div>
</template>

<script>
import Chart from "./components/Chart.vue";
import Table from "./components/Table";

export default {
  name: "App",
  components: {
    Chart,
    Table
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
