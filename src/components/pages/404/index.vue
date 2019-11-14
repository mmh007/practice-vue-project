<template>
  <div id="page-not-found">
    <home-header></home-header>

    <div class="container-box">
      <img src="../../assets/images/common/404.svg" alt="">
      <h1 class="tc">抱歉！该页面被外星人劫持，您可以</h1>
      <p class="tc">
        <router-link to="/">
          <el-button type="primary" size="large">返回首页</el-button>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page-not-found'
  }
</script>

<style lang="less">
  #page-not-found {
    background: #fff no-repeat center center;
    background-size: cover;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
    overflow: hidden;
    z-index: 100;

    #full-page-header.header-fixed {
      background: #333C48;
    }

    .container-box {
      height: 350px;
      width: 420px;
      padding: 40px;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-top: -175px;
      margin-left: -210px;
      z-index: 99;
      border-radius: 4px;
      box-sizing: border-box;
      text-align: center;

      img {
        margin-bottom: 30px;
        width: 202px;
        height: 190px;
      }

      h1 {
        font-size: 18px;
        font-weight: normal;
        margin-top: 0px;
        margin-bottom: 20px;
        color: #959DA6
      }

      p {
        font-size: 16px;
      }
    }
  }
</style>
