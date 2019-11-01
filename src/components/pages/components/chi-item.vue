<template>
  <div>
    <!-- <h1 >{{ item }}</h1> -->
    <p @click="mark">请点击</p>
    <h6>{{ this.itemss }}</h6>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Array
    }
  },
  data () {
    return {
      itemss: []
    }
  },
  methods: {
    mark() {
      this.itemss = this.item
    }
  }
}
</script>

<style lang="less">
  
</style>