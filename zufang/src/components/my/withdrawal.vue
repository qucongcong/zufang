<template lang="">
  <div>
    <div class="nav-bar">
      <i class="fa fa-angle-left" aria-hidden="true" @click="left"></i>
      <span>提现</span>
    </div>
    <div class="content">
      <p>提现金额</p>
      <p>￥ 100</p>
      <div></div>
      <span>当前可提现余额 <a>100</a>元</span>
    </div>
    <div class="confirm">
      <van-button round type="info" block color="#AC63FB" font-size="32px" to="./Withdrawalaudit">确认</van-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    left() {
      this.$router.go(-1)
    }
  }
};
</script>
<style scoped>
.fa-angle-left {
  font-size: 0.7rem;
  float: left;
  margin-left: 0.2rem;
  color: #b6b6b6;
}
.nav-bar {
  position: relative;
  /* z-index: 2; */
  width: 100%;
  height: 0.88rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  margin-top: 0.2rem;
  border-bottom: 1px solid #F8F8F8;
}
.nav-bar > span {
  font-size: 0.36rem;
  font-weight: 700;
  margin-left: 2.8rem;
  color: #333333;
}
.confirm {
  width: 100%;
  display: flex;
  justify-content: center;
}
.van-button--block {
  width: 80%;
}
.content {
  display: flex;
  justify-content: center;
  height: 3.2rem;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 0.44rem;
}
.content>p{
  margin-bottom: 0.3rem;
  font-size: 0.5rem;
}
.content>span {
  font-size: 0.24rem;
  margin-bottom: 0.8rem;
}
.content>span>a {
  color: #68A3FC;
}
.content>div {
  width: 100%;
  height: 1px;
  background-color: #F2F2F2;
  margin-bottom: 0.1rem;
}
</style>