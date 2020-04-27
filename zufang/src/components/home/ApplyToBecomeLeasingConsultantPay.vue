<template>
  <div class="box">
    <div class="nav">
      <van-nav-bar
        title="申请成为租赁顾问"
        @click-left="onClickLeft"
      >
        <template #left>
          <van-icon name="arrow-left" size="18" color="#B3B3B3" />
        </template>
      </van-nav-bar>
    </div>
    <img src="../../assets/等待审核图1.png" alt="" class="img">
    <div class="text">
      <p v-if="isPay">您的资料已提交，现需缴纳88元/年审核费用</p>
      <p v-else>你的信息已提交，我们将在1-3个工作日内 进行审核，请耐心等待...</p>
    </div>
    <div class="pay" v-show="isPay">
      <van-button round size="large" color="#AC63FB" @click="pay">支付</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApplyToBecomeLeasingConsultantPay',
  data(){
    return {
      isPay: true
    }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1);
    },
    pay(){
      this.$toast.success('支付成功!');
      this.isPay = false
    }
  },
  mounted() {
    let title = document.querySelector(".nav>.van-hairline--bottom>.van-nav-bar__title");
    title.style.fontWeight = "bold";
    title.style.color = "#333";
  }
}
</script>

<style scoped>
  .nav{
    width: 100%;
    height: 0.44rem;
  }
  .img{
    display: block;
    width: 2.77rem;
    height: 1.82rem;
    margin: 1rem auto 0;
  }
  .text{
    width: 2.8rem;
    margin: 0.16rem auto 0;
    color: #333333;
    font-size: 0.14rem;
    text-align: center;
  }
  .pay{
    width: 2.71rem;
    height: 0.24rem;
    margin: 0.54rem auto 0;
  }
</style>
