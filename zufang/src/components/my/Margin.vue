<template lang="">
  <div>
    <div class="myTopBg"></div>
  <div class="nav-bar">
    <i class="fa fa-angle-left" aria-hidden="true" @click="left"></i>
    <span>保证金</span>
  </div>
  <div class="reproduction">
    <div>0<span class="yuan">元</span></div>
    <img class="" src="../../assets/margin.png">
    <div class="btn1">
      <span>缴纳</span>
      <span></span>
      <router-link tag="span" to="./withdrawal">提现</router-link>
    </div>
  </div>
    <div class="details">
      <div></div>
      <span>交易明细</span>
      <div></div>
    </div>
  <van-cell-group>
    <van-cell title="缴纳" value="+100" label="4-24 10:20" />
    <van-cell class="red" title="提现中" value="-100" label="4-24 10:20" />    
    <van-cell title="缴纳" value="+100" label="4-24 10:20" />
    <van-cell title="提现" value="-100" label="4-24 10:20" />
  </van-cell-group>
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
.myTopBg {
  width: 100%;
  height: 3.09rem;
  background-image: url(../../assets/myTopBg.png);
  background-size: 100%;
  position: absolute;
  left: 0;
  top: 0;
  /* z-index: -1; */
}
.fa-angle-left {
  /* color: #fff; */
  font-size: 0.6rem;
  float: left;
  margin-left: 0.2rem;
}
.nav-bar {
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  color: #FFFFFF;
  margin-bottom: 0.5rem;
  margin-top: 0.2rem;
}
.nav-bar>span {
  font-size: 0.36rem;
  margin-left: 2.8rem;
}
.red {
  color: red;
}
.van-cell__value {
  color: #AE66FB;
}
 .reproduction {
   width: 6.882rem;
   height: 3.502rem;
   margin: 0 auto;
   position: relative;
   color: black;
   /* background-color: #f0f; */
 }
 .reproduction>img {
   width: 100%;
   height: 100%;
   /* display: none; */
 }
 .reproduction>div:first-child{
    position: absolute;
    left: 50%;
    top: 40%;
    /* width: 100%; */
    margin-left: -0.5533rem;
    margin-top: -0.656rem;
    text-align: center;
    font-size: 1rem;
 }
 .yuan {
   font-size: 0.52rem;
   font-weight: 700;
 }
 .btn1 {
   width: 6rem;
   height: 1.5rem;
   background-color: #fff;
   display: flex;
   justify-content: space-around;
   align-items: center;
   position: absolute;
   left: 50%;
   bottom: -0.75rem;
   margin-left: -3rem;
  /* border: 1px solid D5B1FD; */
   border-radius: 0.75rem;
   font-size: 0.36rem;
   padding: 0 0.5rem;
   box-shadow:0px 0.28rem 0.32rem 0px rgba(43,102,253,0.07)
 }
 .btn1>span:nth-child(2) {
   width: 1px;
   height: 0.8rem;
   background-color: #D5B1FD;
 }
 .details {
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0 auto;
   margin-top: 1.25rem;
   width: 100%;
   height: 0.29rem;
   font-size: 0.3rem;
    margin-bottom: 0.59rem;
 }
 .details>div {
    width:1.2rem;
   height: 1px;
   background-color: #D5B1FD;
   margin:0 0.6rem;
 }
</style>