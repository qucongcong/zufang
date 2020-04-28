<template lang="">
  <div class="i-app">
      <van-nav-bar
    title="信息完善"
    left-arrow
    right-text="修改"
    @click-left="onClickLeft"
  />
    <div class="portrait">
        <span>头像</span>
        <img src="../../assets/logo.png">
    </div>
    <div class="information">
        <div class="i-nickname">
            <span>昵称</span>
            <span>笑笑</span>
        </div>
        <div class="i-nickname">
            <span>微信号</span>
            <span>15500003333</span>
        </div>
        <div class="i-nickname">
            <span>微信二维码</span>
            <span>二维码 拷贝</span>
        </div>
        <div class="i-nickname">
            <span>主管区域</span>
            <span>金水区&二七区</span>
        </div>
        <div class="prompt">
          温馨提示：主管区域仅可选择两个，且一年仅有一次修改机会，请慎重选择。 
        </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
};
</script>
<style scoped>
.i-app{
  width: 100%;
  height: 100%;
  background-color: #F5F5F5;
}
.i-nickname {
  background-color: #fff !;
}
.van-nav-bar__text {
  color: #333333;
}
.van-nav-bar__title {
  font-size: 0.36rem;
  font-weight: 700;
  color: #333333;
}
.van-nav-bar .van-icon {
  color: #97989a;
  font-size: 0.36rem;
}
.information {
  font-size: 0.3rem;
}
.portrait {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.4rem 0;
  background-color: #fff;
  height: 1.68rem;
}
.portrait > span {
  font-style: 32px;
  margin: 0 0.31rem;
  font-size: 0.32rem;
}
.portrait > img {
  width: 1.20rem;
  height: 1.20rem;
  margin-right: 0.31rem;
}
.i-nickname {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.88rem;
  background-color: #fff;
  border-bottom: 1px solid #F7F7F7;
}
.i-nickname > span {
  margin-left: 0.22rem;
  margin-right: 0.6rem;
}
.i-nickname > span:last-child {
  color: #CCCCCC;
}
.prompt {
  width: 6.54rem;
  height: 0.63rem;
  margin-left: 0.23rem;
  font-size: 0.24rem;
  color: #AAAAAA;
  margin-top: 0.17rem;
}
</style>