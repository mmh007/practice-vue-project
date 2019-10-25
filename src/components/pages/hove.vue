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

    <div>
      <input type="text" v-model="markma">
      <p>双向绑定1: {{markma}}</p>
    </div>
    <textarea v-model="textarea" name="x" id="a" placeholder="请输入内容..." cols="30" rows="10"></textarea>
      <div> 双向绑定2 : {{ textarea }}</div>
    <br/>
    <div>
      <button style="width:100px;height:50px" @click="center +=1">点击加分</button>
      <button style="width:100px;height:50px;color:red;background-color:#c5d0f7" @click="center -=1">点击减分</button>
      <div>如果是坏<b>牟牟</b>请加:<span style="font-size:89px;color:red;">{{ center }}</span> 分</div>

    </div>

    <div>
      <input type="checkbox" id="moumou" value="MouMou" v-model="checkboxMM">
      <label for="moumou">MouMou</label>
      <div>{{ checkboxMM }}</div>
    </div>
    <br/>
    <br/>

    <br/>
    <br/><br/><br/>

    <br/><br/>
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
      grreruNav: true, // 伪类元素
      markma: '', // 双向绑定
      textarea: '', // 双向绑定
      center: 0,
      checkboxMM: []
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