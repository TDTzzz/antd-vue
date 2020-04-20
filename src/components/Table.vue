<template>
  <div class="app">
    <a-form layout="inline" :form="form" @submit="handleSubmit">
      <a-form-item label="Select" has-feedback>
        <a-select :defaultValue="regions[0]" @change="handleRegionChange">
          <a-select-option v-for="region in regions" :key="region">{{region}}</a-select-option>
        </a-select>
        <a-select v-model="preSubRegion">
          <a-select-option v-for="subRegion in preSubRegions" :key="subRegion">{{subRegion}}</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">Search</a-button>
      </a-form-item>
    </a-form>

    <a-table :columns="columns" :dataSource="data">
      <a slot="name" slot-scope="text">{{text}}</a>
    </a-table>
  </div>
</template>
<script>
const regions = [];
const subRegions = {};

const columns = [
  {
    title: "Id",
    dataIndex: "Id",
    align: "center"
  },
  {
    title: "标题",
    dataIndex: "Name",
    align: "center",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "面积",
    dataIndex: "Area",
    align: "center"
  },
  {
    title: "元/平方",
    dataIndex: "UnitPrice",
    align: "center"
  },
  {
    title: "总价(万)",
    dataIndex: "TotalPrice",
    align: "center"
  },
  {
    title: "小区",
    dataIndex: "Community",
    align: "center"
  },
  {
    title: "房型",
    dataIndex: "HouseType",
    align: "center"
  }
];

const data = [];

export default {
  data() {
    return {
      data,
      columns,
      form: this.$form.createForm(this, { name: "horizontal_login" }),
      regions,
      subRegions,
      preSubRegions: [],
      preSubRegion: ""
    };
  },
  created: function() {
    this.getData("中南丁字桥");
    //获得区域信息
    this.getRegion();
  },
  methods: {
    getData(subregion) {
      let self = this;
      let url = "http://localhost:8081/table/subregion/" + subregion;
      this.$axios.get(url).then(function(res) {
        self.data = res.data;
      });
    },
    handleSubmit(e) {
      e.preventDefault();
      console.log(e);
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          this.getData(values.subRegion);
        }
      });
    },
    handleRegionChange(e) {
      console.log(e);
      this.preSubRegions = this.subRegions[e];
      this.preSubRegion = this.subRegions[e][0];
    },
    getRegion() {
      console.log("--");
      this.regions = ["武昌", "江岸"];
      this.subRegions = {
        武昌: ["中南丁字桥", "水果湖"],
        江岸: ["1", "2"]
      };

      let region = new String(this.regions[0]);
      console.log(region);
      console.log(this.subRegions[region]);
      this.preSubRegion = this.subRegions[region][0];
      this.preSubRegions = this.subRegions[region];
      //   console.log(this.regions)
    }
  }
};
</script>