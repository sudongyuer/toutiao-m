<template>
  <div id="app">
    <router-view/>
    <h1>黑马头条</h1>

   <i class="toutiao toutiao-shouye"></i>
   <van-button type="primary">主要按钮</van-button>
<van-button type="info">信息按钮</van-button>
<van-button type="default">默认按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>
<div class="box"></div>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="less">
.box{
  width: 750px;
  height: 360px;
  background-color: blue;
}
</style>
