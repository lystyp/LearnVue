<!-- 他的定義很嚴謹，如果我templete裡面沒有用到HelloWorld，但component裡面有放，表示放了沒有到，會報錯，如果import了沒有放到component，也會報錯 -->

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>To-Do List</h1>
      <ul>
        <li>
          <todoItem />
          <todoItem />
        </li>
      </ul>
  </div>
</template>

<script>
import todoItem from './components/todoItem.vue'

export default {
  name: 'App',
  components: {
    todoItem
  }
}
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
