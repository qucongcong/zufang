<template lang="">
  <div>
    <div class="nav-bar">
        <i class="fa fa-angle-left" aria-hidden="true" @click="left"></i>
        <span>提现</span>
    </div>
      <img src="../../assets/Cashwaiting.png">
      <p>提现申请已提交，1-3个工作日内 将返回至您的账户</p>
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
    img {
        display: block;
        margin:0 auto;
        width: 4.71rem;
        height: 3.4rem;
        margin-top: 1.70rem;
        margin-bottom: 0.36rem;
    }
    p {
        width: 4.53rem;
        font-size: 0.3rem;
        margin: 0 auto;
        text-align: center;
    }
    .fa-angle-left {
  font-size: 0.6rem;
  float: left;
  margin-left: 0.2rem;
  color: #B3B3B3;
}
.nav-bar {
  position: relative;
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin-bottom: 0.5rem;
  margin-top: 0.2rem;
  border-bottom: 1px solid #F8F8F8;
}
.nav-bar>span {
   font-weight: 700;
  font-size: 0.36rem;
  margin-left: 2.8rem;
}
</style>