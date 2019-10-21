<template>
  <div id="hove">
    <h2>首页</h2>
    <h5>{{ prouect }},你好！</h5>
    <div>
      <li v-for="addHove in prouect" :key="addHove">{{ addHove }}:(v-for // 循环♻️)</li>
    </div>
    <span :title="message">new时间（v-bind // 绑定时间）</span>
    <h6 v-if="vif">标题6(v-if // 判断显示隐藏)</h6>
    <button @click="onclickMarkMa">点击事件</button>
    <h5>{{ markMa }} // v-model:绑定</h5>
    <input type="text" v-model="markMa">
  </div>
</template>

<script>
export default {
  name: 'hove',
  data () {
    return {
      prouect: [
        'mark',
        'moum',
        'xiaoming'
      ],
      message: '页面加载于 ' + new Date().toLocaleString(),
      vif: true,
      markMa: 'Hello vue.js!'
    }
  },
  methods: {
    onclickMarkMa () {
      this.markMa = this.markMa.split('').reverse().join('')
    }
  }
}
</script>

<style scoped>
  div li{
    width: 100%;
    height: 60px;
    margin: 0 auto;
    line-height: 60px;
    border: 1px solid red;
    border-radius: 2px;
    list-style-type: none;
  }
</style>