<template>
  <div>
    <input type="checkbox" id="todo-item" />
    <!--  {{label}}這個就是表示要去跑script那邊的東西，像這裡去script那邊找發現label是props裡面的東西，就是把那個值塞到這裡，至於這個值是誰給呢?就是在App.vue那邊啦 -->
    <label for="todo-item">{{label}}</label>
  </div>
</template>

<script>

export default {
    name: 'todoItem',
    component: {

    },

    // 新增一些屬性，跟component不同，component是一個元件，應該是一整個樣版
    // prop是一個"值"，反正都是給import的人去拿來用的
    // required, type, default那些都是固定用的關鍵字
    props: {
        label: { required: true, type: String },
        done: { default: false, type: Boolean }
    }
}

</script>

