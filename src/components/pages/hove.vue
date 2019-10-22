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
    <p>{{ navHtml }} // 模版语法</p>
    <p v-html="navHtml"></p>
    <a :href="url">绑定跳转连接</a>
    <div @click="click1">aaaaaa
      <div @click.stop="click2">qqqq</div>
    </div>
    <p v-if="icon">v-if显示隐藏</p>
    <hr>
    <div  class="colorRed"
          :class="{active: tiveNav, grreru: grreruNav}">
      伪类元素：active
    </div>

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
      message: '页面加载于 ' + new Date().toLocaleString(), // v-bind
      vif: true, // v-if
      markMa: 'Hello vue.js!', // 事件绑定 @click,v-model
      navHtml: `<h1 style="color:red">HTML模版语法</h1>`, // v-html 模版语法
      url: 'http://baidu.com', // 绑定url
      icon: true, // v-if
      tiveNav: true, // 伪类元素
      grreruNav: true // 伪类元素
    }
  },
  methods: {
    onclickMarkMa () {
      this.markMa = this.markMa.split('').reverse().join('')
    },
    click1() {
      console.log('click...1')
    },
    click2() {
      console.log('click....2')
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
  .colorRed {
    width: 400px;
    height: 100px;
    font-size: 19px;
    border: 2px solid red;
  }
  .active {background: yellow;}
  .grreru {color: green}
</style>