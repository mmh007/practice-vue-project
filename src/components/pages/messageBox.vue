<template>
  <div class="tip-menu">
    <h6>messageBox 弹框</h6>
    <el-button type="text" size="mini" @click="open2">
      点击打开弹窗
    </el-button>

    <!-- 展开收起功能实现 -->
    <!-- <div class="is-state">
      <div class="select-btn" @click="isshow = !isshow">
        <template v-if="!isshow">
          展开<i class="iconfont">&#xe631;</i>
        </template>
        <template v-if="isshow">
          收起<i class="iconfont">&#xe63c;</i>
        </template>
      </div>
    </div>
    <div class="is-state is-card">
      <div v-if="isshow">主体匹配: {"word":"瞠目结舌"}</div>
    </div> -->
    <el-row :gutter="8">
      <el-col :span="18">
        <div class="grid-content bg-purple">
          <div class="card-btn" @click="isshow = !isshow">
            <template v-if="!isshow">
              展开<i class="iconfont">&#xe631;</i>
            </template>
            <template v-if="isshow">
              收起<i class="iconfont">&#xe63c;</i>
            </template>
          </div>
        </div>
      </el-col>
    </el-row>
   <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple"><div v-if="isshow">主体匹配: {"word":"瞠目结舌"}</div></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"><div v-if="isshow">主体匹配: {"word":"瞠目结舌"}</div></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"><div v-if="isshow">主体匹配: {"word":"瞠目结舌"}</div></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"><div v-if="isshow">主体匹配: {"word":"瞠目结舌"}</div></div></el-col>
    </el-row>

    <!-- 通过传参添加伪类、隐藏功能 -->
    <el-row :gutter="10">
      <el-col :span="16">
          <div class="grid-content bg-purple grid-content-height">
            <button type="primary" class="btn" :class="{active: exportType === 0}" @click="triggerTitle(0)">主页信息</button>
            <button type="primary" class="btn" :class="{active: exportType === 1}" @click="triggerTitle(1)">详情信息</button>
          </div>
        </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple grid-content-height">
          <div v-if="exportType === 0">
            《CSS消除button标签的默认样式》
          </div>
          <div class="card-width" v-if="exportType === 1">
            信息详情内容区域.......
            1.先看下默认样式效果,默认padding和border,字体大小也是...
            2.去除padding,指定一个字体大小,这里匹配了*表示所有元素,因为大部分的默认m...
          </div>
        </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      two: 66.8,
      showPrise:true,
      showRentPrise:true,
      isshow: false, // 默认状态
      exportType: 0 // 添加伪类元素
    }
  },
  computed: {
    change:function(){
      this.isshow= !this.isshow
    },

    changeStatus(){
      if(this.showPrise === false){
        showPrise = true;
        showRentPrise = true;  
      }
    }
  },
  methods: {
    triggerTitle(type) {
      this.exportType = type
    },
    // 展开收起效果
    change() {
      this.isshow = !this.isshow
    },
    open2() {
      const h = this.$createElement;
      this.$msgbox({
        title: '添加排除词',
        message: h('p', null, [
          h('span', null, '您确定添加排除词 ')
        ]),
        dangerouslyUseHTMLString: true,
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        // beforeClose: (action, instance, done) => {
        //   if (action === 'confirm') {
        //     instance.confirmButtonLoading = true;
        //     instance.confirmButtonText = '执行中...';
        //     setTimeout(() => {
        //       done();
        //       setTimeout(() => {
        //         instance.confirmButtonLoading = false;
        //       }, 300);
        //     }, 3000);
        //   } else {
        //     done();
        //   }
        // }
      }).then(action => {
        // this.$message({
        //   type: 'info',
        //   message: 'action: ' + action
        // });
      });
    }
  //   open2() {
  //     this.$confirm(`您确定添加排除词
  //                   <em style="color: #f00;"> “${this.tow}” </em>？</br>
  //                   <div>排除方式：
  //                     <el-radio-group>
  //                       <el-radio :label="true">全文排除</el-radio>
  //                       <el-radio :label="false">标题排除</el-radio>
  //                     </el-radio-group>
  //                   </div>`, 
  //                   '添加排除词', {
  //                   dangerouslyUseHTMLString: true,
  //                   confirmButtonText: '确定',
  //                   cancelButtonText: '取消'
  //     }).then(() => {
  //       // this.$message({
  //       //   type: 'success',
  //       //   message: '删除成功!'
  //       // });
  //     }).catch(() => {
  //       // this.$message({
  //       //   type: 'info',
  //       //   message: '已取消删除'
  //       // });          
  //     });
  //   }
  }
}
</script>

<style lang="less">
  h2 {
    font-size: 20px;
  }
  /* 排除词tip框 */
  .tip-menu {
    // margin: 0 auto;
    // text-align: center;
    border: 1px solid rgb(83, 81, 81);
    /deep/ .el-button--text {
      font-size: 14px;
      background: #fff;
      color: #333C48;
      padding: 5px 10px;
      box-shadow: 0 2px 6px #D7DEE7;
      font-weight: normal;
    }
  }
  /* 展开收起按钮 */
  // 显隐藏外包裹样式
  .is-state {
    width: 600px;
    height: 60px;
    text-align: center;
    border: 1px solid #837f7f;
  }
  .select-btn {
    // width: 600px;
    // height: 30px;
    padding: 0 10px;
    margin-left: 10px;
    line-height: 60px;
    text-align: center;
    color: #00A8FF;
    border-radius: 2px;
    user-select: none;
    font-weight: bold;
    cursor: pointer;
    transition: all .2s;
    border: 1px solid #ff23;
  }
  .card-border {
    margin-top: 10px;
    width: 200px;
    height: 50px;
    border: 1px solid red;
  }
  .is-card {
    min-height: 60px;
    line-height: 60px;
  }
  // lelment布局
  .el-row {
    margin-top: 20px;
    margin-bottom: 20px;
    &:last-child {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 60px;
    line-height: 60px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .card-btn {
    width: 110px;
    height: 60px;
    color: #0e0d0d;
    background-color: #b0b2b3;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      color: #f1f0f0;
      background-color: #409EFF;
    }
  }
  // 传参样式
  .grid-content-height {
    height: auto;
    min-height: 100px;
    background: #fff;
    border: 1px solid #e2dcdc;
    padding-top: 20px;
  }
  .btn {
    padding: 0;
    margin: 0;
    width: 188px;
    height: 60px;
    font-size: 12px;
    line-height: 60px;
    color: #333c48;
    background-color: #fff;
    font-family: 400;
    border: 1px solid #D7Dee7;
    border-radius: 6px;
    cursor: pointer;
    outline: none;
    &:hover {
      color: #fff;
      background-color: #409EFF;
      border: 1px solid #409EFF;
    }
  }
  .btn.active {
    color: #fff;
    background-color: #409EFF;
    border: 1px solid #409EFF;
  }
  .card-width {
    width: auto;
    height: auto;
  }
  /deep/ .el-col-8 {
    width: auto;
    height: auto;
  }
</style>