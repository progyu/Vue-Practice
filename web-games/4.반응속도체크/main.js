import Vue from 'vue';
import ResponseCheck from './ResponseCheck';

new Vue({
  render: createElement => createElement(ResponseCheck)
}).$mount('#root') // el 역할을 해준다. Vue 인스턴스