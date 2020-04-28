<template lang="">
  <div>
    <!-- 顶部 -->
    <van-nav-bar title="补贴设置" left-arrow line-height="">
      
    </van-nav-bar>
    <span class="right" v-show="istrue" @click="reviseClick">修改</span>
    <!-- 表单 -->
    <van-form @submit="onSubmit">
    <van-field v-model="money" name="金额" label="金额" placeholder="请输入补贴金额"
:rules="[{ required: true, message: '补贴金额' }]"/>
    <van-field v-model="stage" type="text" name="分期" label="分期"
      placeholder="请输入补贴金额分期期数" :rules="[{ required: true, message: '请输入补贴金额分期期数' }]"/>
    <div style="margin: 16px;">
      <van-button v-show="isShow" round block type="info" native-type="submit" >
        提交
      </van-button>
    </div>
  </van-form>
  </div>
</template>
<script>
export default {
   data() {
    return {
      money: '',
      stage: '',
      istrue:false,
      isShow: true,
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
      this.isShow =!this.isShow;
      this.istrue = !this.istrue;
    },
    reviseClick() {
      this.isShow =!this.isShow;
    }
  },
}
</script>
<style>
    .van-nav-bar {
      position: relative;
    }
    .right {
      position: absolute;
      top:0.2rem;
      right: 0.28rem;
      z-index: 999;
      font-size: 0.3rem;
    }
    .van-nav-bar__left .van-icon {
        color: #b3b3b3;
        font-size: 0.36rem;
    }
    .van-nav-bar__title {
        font-weight: 700;
    }
    .van-tab__text {
        font-size: 0.32rem;
    }
    .van-button {
      width: 5.42rem;
      height: 0.82rem;
      margin: auto;
      background-color: #ddd;
      border: none;
      margin-top: 1rem;
    }
    .van-form {
      margin-top:0.2rem;
    }
    .van-cell {
      font-size: 0.3rem;
    }
    .van-field__body input {
      color: #ccc;
    }
</style>