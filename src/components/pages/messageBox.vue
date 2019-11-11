<template>
  <div class="tip-menu">
    <h1>messageBox 弹框</h1>
    <el-button type="text" size="mini" @click="open2">
      点击打开弹窗
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      two: 66.8
    }
  },
  methods: {
    open2() {
      const h = this.$createElement;
      this.$msgbox({
        title: '添加排除词',
        message: h('p', null, [
          h('span', null, '您确定添加排除词 '),
          h('div', { style: 'color: teal' }, 
          `排除方式： <el-radio-group>
                <el-radio :label="true">全文排除</el-radio>
                <el-radio :label="false">标题排除</el-radio>
              </el-radio-group>`
          )
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
    position: absolute;
    /deep/ .el-button--text {
      font-size: 14px;
      background: #fff;
      color: #333C48;
      padding: 5px 10px;
      box-shadow: 0 2px 6px #D7DEE7;
      font-weight: normal;
    }
  }
</style>