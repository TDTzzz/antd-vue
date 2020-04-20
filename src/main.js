import Vue from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App';
import VCharts from 'v-charts'
import axios from 'axios';

Vue.prototype.$axios = axios //全局注册，使用方法为:this.$axios

Vue.use(VCharts)
Vue.use(Antd)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');