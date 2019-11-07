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
      <div>如果是<b>m</b>请加:<span style="font-size:89px;color:red;">{{ center }}</span> 分</div>

    </div>

    <div>
      <input type="checkbox" id="moumou" value="MouMou" v-model="checkboxMM">
      <label for="moumou">MouMou</label>
      <input type="checkbox" id="mark" value="mark" v-model.lazy="checkboxMM">
      <label for="mark">mark</label>
      <input type="checkbox" id="huahua" value="huahua" v-model.trim="checkboxMM">
      <label for="huahua">hua</label>
      <div>{{ checkboxMM }}</div>
    </div>
    <button type="button" @click="submit">提交</button>
    <br/>
    <br/>
    <div>阿里图标
      <i class="iconfont icon-reset">&#xe623;</i>
      <i class="iconfont" >&#xe73f;</i>
    </div>
    <!-- 子组件1 -->
    <his-hove :isprouect="isprouect" @onto="ontoss"></his-hove>
    <div>
      <div style="color:red;">父组件接收子组件的参数：<h3>{{ names }}</h3></div>
    </div>
    <!-- 子组件2 -->
    <chi-Item :item="item" v-for="item in list" :key="item.id"></chi-Item>
    <!-- <p v-for="item in list" :key="item.id">{{ item.title }}</p> -->
    <!-- 注意插槽滴使用 -->
    <div>
      <strong>注意：这里将写插槽</strong>
      <slot></slot>
    </div>

    <div style="width: 1280px; margin: 0 auto; font-family: '微软雅黑';">
      <table bgcolor="#fff" width="1280" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <img src="../../assets/logo.png" style="display: block" width="1280" height="100px">
          </td>
        </tr>
      </table>
      <!-- 表格 -->
      <table width="1280" bgcolor="#fff" border="1"  cellspacing="0" cellpadding="10">
        <tr> <!-- tr代表行 -->
          <td color="#ee3">1.0</td> <!-- tr代表列 -->
          <td align="left">
            <font style="color: #004e96; font-size: 20px; font-weight: bold;" face="微软雅黑" >享会精彩观点看这里</font>
          </td>
          <td style="color:#00f316">1.2</td>
          <td>1.3</td>
          <td>1.4</td>
          <td>1.5</td>
        </tr>
        <tr>
          <td align="left" colspan="6">2.0</td> <!-- 合并行删除后6行 -->
        </tr>
        <tr>
          <td rowspan="3">3.0</td> <!-- 合并列删除后2行 -->
          <td align="left">3.1</td>
          <td>3.2</td>
          <td>3.3</td>
          <td>3.4</td>
          <td>1.5</td>
        </tr>
        <tr>
          <td>4.0</td>
          <td>4.1</td>
          <td>4.2</td>
          <td>4.3</td>
          <td>4.4</td>
        </tr>
        <tr>
          <td>5.0</td>
          <td>5.1</td>
          <td>5.2</td>
          <td>5.3</td>
          <td>5.4</td>
        </tr>
        <tr>
          <td style="text-align: right " colspan="4">
            <a href="javascript:;">6.0</a>
          </td>
          <td>6.1</td>
          <td>6.2</td>
          <!-- <td>6.3</td>
          <td>6.4</td>
          <td>6.5</td> -->
        </tr>
        <tr>
          <td colspan="2">7.0</td>
          <td>7.1</td>
          <td>7.2</td>
          <td>7.3</td>
          <td>7.4</td>
          <!-- <td>7.5</td> -->
        </tr>
        <tr>
          <td>8.0</td>
          <td>8.1</td>
          <td>8.2</td>
          <td>8.3</td>
          <td>8.4</td>
          <td>8.5</td>
        </tr>
      </table>
    </div>
    <!-- 组件 -->
    <!-- <inFo :markMessge="markMessge"></inFo> -->
      <h2>向子组件传值</h2>
      <p>{{ this.markMessge }}</p>
      <button @click="btn" :markMessge="markMessge">点击跳转info页面</button>

      <!-- element -->
    <div class="block">
      <span class="demonstration">默认 Hover 指示器触发</span>
      <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>
            <img src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=857256197,868251498&fm=202&mola=new&crop=v1" alt="">
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="block">
      <span class="demonstration">Click 指示器触发</span>
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    
    <!-- card卡片 -->
    <div>
      <el-row>
        <el-col :span="8" v-for="(o, index) in 6" :key="o" :offset="index > 0 ? 0 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=857256197,868251498&fm=202&mola=new&crop=v1" class="image">
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  // import inFo from './components/info'
  import hisHove from './components/hishove'
  import chiItem from './components/chi-item'
  export default {
    name: 'hove',
    prop: {
      isprouect: {
        type: Array
      },
      markMessge: {
        type: String
      },
      item: {
        type: Array
      }
    },
    components: {
      hisHove,
      chiItem
    },
    data () {
      return {currentDate: new Date(),
        isprouect: ['关羽','刘备'], // 向子组件传递参数
        names: '', // 接收子组件传来的参数
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
        checkboxMM: [],
        markMessge: '11',
        list: [
          {id: '01', title: '我是父组件的第一项内容'},
          {id: '02', title: '我是父组件的第二项内容'},
          {id: '03', title: '我是父组件的第三项内容'}
        ]
      }
    },
    // mounted() {
    //   this.ontoss()
    // },
    methods: {
      onclickMarkMa () {
        this.markMa = this.markMa.split('').reverse().join('')
      },
      click1() {
        console.log('click...1')
      },
      click2() {
        console.log('click....2')
      },
      submit() {
        this.checkboxMM
        console.log(this.checkboxMM)
      },
      // 接收子组件向父组件 $emit 传来的参数
      ontoss (data) {
        this.names = data
      },
      // 点击跳转info页面
      btn () {
        this.$router.push({
          path: 'info'
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import 'hove';
</style>