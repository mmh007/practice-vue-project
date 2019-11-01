<template>
  <div class="hishove">
    <br>
    <h1>子组件</h1>
    <button class="bttom" @click="hisHoveer">点击接收父页面传来的值</button>
    <h2>我是子组件：{{ this.meagess }}</h2>
    <!-- <span>{{ children }}</span> -->
    <button class="bttom" @click="config">点击向父组件传参</button>
    <br>
  </div>
</template>

<script>
export default {
  name:'hishove',
  props: {
    isprouect: {
      type: Array
    }
  },
  data () {
    return {
      meagess: null,
      children: '我是子组件的参数'
    }
  },
  methods: {
     // 接收父组件传来的值并赋值给meagess
    hisHoveer () {
      this.meagess = this.isprouect
    },
    // 将参数值传给父组件
    config () {
      this.$emit('onto', this.children)
    }
  },
}
</script>

<style lang="less">
  .bttom {
    width: 200px;
    height: 60px;
    font-size: 13px;
    color: #fff;
    background-color: #2d8cf0;
    border-radius: 10px;
    border-color: #2d8cf0;
    cursor: pointer;
    outline: none;
  }
</style>