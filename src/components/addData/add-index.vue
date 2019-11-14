<template>
  <div class="header-wrapper">
    <!-- 顶部导航模块 -->
    <div class="top-module">
      <div class="top-herder">
        <div class="top-container">
          11
        </div>
      </div>
    </div>

    <!-- 左侧导航模块 -->
    <div class="left-module">
      <div class="left-nav">
        <div class="left-nav-container">
          <div class="left-nav-data">
            222
          </div>
          <div class="centre-module">
            333
          </div>
        </div>
      </div>
    </div>

    <!-- 内容模块区域 -->
    <!-- <div class="centre-module">
      <h2>中间内容</h2>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return{}
  }
}
</script>

<style lang="less">
  
  // 顶部导航模块
  .top-module {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1500;
    .top-herder {
      width: 100%;
      height: 80px;
      line-height: 80px;
      color: red;
      // background-color: #0af030;
      // border: 1px solid #2603ec;
      .top-container {
        width: 1280px;
        height: auto;
        margin: 0 auto;
      }
    }
  }
  
  // 左侧导航模块
  .left-module {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1500;
    .left-nav {
      width: 100%;
      height: auto;
      color: red;
      background-color: #c0c3c0;
      border: 1px solid #2603ec;
      .left-nav-container {
        width: 1280px;
        height: auto;
        min-height: 300px;
        border: 1px solid red;
        margin: 0 auto;
        .left-nav-data {
          // position: absolute;

          float: left;
          width: 260px;
          height: auto;
          min-height: 600px;
          margin-top: 80px;
          border: 1px solid #332198;
        }
        .centre-module {
          // position: absolute;
          float: right;
          width: 1020px;
          height: auto;
          min-height: 600px;
          margin-top: 80px;
          border: 1px solid red;
        }
      }
    }
  }

  // 内容模块区域
  // .centre-module {
  //   border: 1px solid red;
  // }
</style>