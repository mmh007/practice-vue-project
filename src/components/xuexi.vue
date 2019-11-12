<template>
  <div>
    <h2>学习vue(一)章</h2>
    <div class="tableCen">
      <table border="1" width="460" height="160">
        <thead>
          <tr>
            <td></td>
            <td>序号</td>
            <td>商品名称</td>
            <td>价格</td>
            <td>数量</td>
            <td>总价</td>
            <td>操作</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in list" :key="item.id">
            <td><input type="checkbox" name="" id=""></td>
            <td>{{ item.id }}</td>
            <td>{{ item.productNmae }}</td>
            <td>{{ item.price }}</td>
            <td>
              <button @click="HandleAddNum(index)">+</button>
              <span>{{ item.num }}</span>
              <button @click="handleAddnull(index)">-</button>
            </td>
            <td>{{ item.price * item.num }}</td>
            <td>
              <button @click="handleDell(index)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>合计：{{ total }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      list: [
        {
          id: 1,
          productNmae: '苹果 🍎',
          price: 4,
          num: 8,
          maxNum: 10
        }, {
          id: 2,
          productNmae: '香蕉 🍌',
          price: 3,
          num: 9,
          maxNum: 120
        }, {
          id: 3,
          productNmae: '樱桃 🍒',
          price: 5,
          num: 9,
          maxNum: 31
        }
      ],
    value: 1,
    lists: []
    }
  },
  computed: {
    total() {
      let data = 0
      this.list.forEach(el => {
        data += el.num * el.price
      });
      return data
    }
  },
  methods: {
    HandleAddNum (index) {
      if(this.list[index].num < this.list[index].maxNum) {
        this.list[index].num +=1
      }
    },
    handleAddnull (index) {
      if(this.list[index].num > 1) {
        this.list[index].num -= 1
      }
    },
    handleDell (index) {
      this.list.splice(index,1)
    }
  }
}
</script>

<style lang="less">
  .tableCen {
    margin: 0 auto;
    text-align: center;
    border: 1px solid red;
  }
</style>