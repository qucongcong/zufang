<template lang="">
  <div>
    <!-- 顶部 -->
    <van-nav-bar title="消息列表" left-arrow line-height=""></van-nav-bar>
    <!-- 标签 -->
    <van-tabs color="#fff" title-active-color="#AC63FB" >
    <van-tab title="消息列表">
    <!-- 卡片 -->
    <div class="card">
        <img :src="imgUrl1"></img>
        <h2>155******45</h2>
        <span>30分钟前查看</span>
        <p class="auto">
         查看用户信息                  
        </p>
    </div>
    <div class="card">
        <img :src="imgUrl1"></img>
        <h2>155******45</h2>
        <span>30分钟前查看</span>
        <p class="auto">
         查看用户信息                  
        </p>
    </div>
    </van-tab>
    <van-tab title="系统通知">
    <div class="card">
        <img :src="imgUrl"></img>
        <h2>系统通知</h2>
        <span>30分钟前</span>
        <p>
         因您的账号遭到用户举报，现将您的账号封禁七天作为
          处理结果，到期自动解封，后续请认真遵守平台规定，
          谢谢配合！                  
        </p>
      </div>
      <div class="card">
        <img :src="imgUrl"></img>
        <h2>系统通知</h2>
        <span>30分钟前</span>
        <p>
        您的申请已通过，恭喜成为租赁顾问！现在可以去完
        善信息，可以让更多人看到你哦！                                     
        </p>
      </div>
    <div class="card">
      <img :src="imgUrl"></img>
      <h2>系统通知</h2>
      <span>30分钟前</span>
      <p>
       保证金提现已到账，请自行查看到账信息！                 
      </p>
    </div></van-tab>
    </van-tabs>
    </div>

</template>
<script>
export default {
  data() {
    return {
      imgUrl:require('../../assets/mess.png'),
      imgUrl1:require('../../assets/user.png')
    }
  },
  methods: {
    onClickLeft() {
      Toast('返回');
    },
  }
}
</script>
<style>
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
  .card {
    position: relative;
    margin: auto;
    width: 6.9rem;
    height: 2.4rem;
    background-color: #F7F7F7;
    /* overflow: hidden; */
    padding: .013333rem;
    border-radius:10px;
    margin-bottom: 0.2rem;
  }
  .card img {
    display: inline-block;
    width: 0.62rem;
    height: 0.62rem;
    margin-left: 0.47rem;
    margin-top: 0.21rem;
  }
  .card h2 {
    position: absolute;
    top: 0.4rem;
    left:1.17rem;
    display: inline-block;
    vertical-align: middle;
    font-size: 0.32rem;
    font-weight: 400;
  }
  .card span {
    position: absolute;
    right: 0.19rem;
    top: 0.40rem;
    font-size: 0.24rem;
    color: #7E7E7E;
  }
  .card p {
    padding: 0.13rem 0.13rem 0.3rem 0.44rem;
    font-size: 0.26rem;
    color: #7E7E7E;
  }
  .tab span {
    display: inline-block;
    width: 48%;
    height: 0.9rem;
    line-height: 0.9rem;
    text-align: center;
    font-size: 0.32rem;
  }
  /* .changeColor {
    color: #AC63FB;
  } */
  .auto {
    text-align: center;
  }
  /* .van-tab__text {
    color: #AC63FB;
  } */
</style>