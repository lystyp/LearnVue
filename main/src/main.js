import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// App裡面包含"樣版"跟"export出來的物件"，丟進h裡面渲染，應該就是先讓index.html import App.vue的script區塊，再把App.vue裡面樣版塞到index.html的#app裡面
new Vue({
  render: h => h(App),
}).$mount('#app')
