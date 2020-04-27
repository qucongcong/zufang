<template>
  <div class="box">
    <div class="nav">
      <van-nav-bar
        title="手机号验证"
        @click-left="onClickLeft"
      >
        <template #left>
          <van-icon name="arrow-left" size="18" color="#B3B3B3" />
        </template>
      </van-nav-bar>
    </div>
    <div class="input">
      <van-field type="text" label="手机号" v-model="phoneNumber" placeholder="请输入手机号" />
      <div class="input_code">
        <van-field type="text" label="验证码" v-model="code" placeholder="请输入验证码" />
        <div class="send">发送验证码</div>
      </div>
    </div>
    <div class="ok">
      <van-button round size="large" :disabled="isOk" :color="isOk ? '#DDDDDD' : '#AC63FB'" @click="ok">提交</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhoneNumberVerification',
  data(){
    return {
      phoneNumber: "",
      code: "",
      isOk: true
    }
  },
  methods:{
    onClickLeft() {
      this.$router.go(-1);
    },
    ok(){
      this.$router.push("ApplyToBecomeLeasingConsultantPay");
    },
    isData(){
      if(!this.phoneNumber.trim() || !this.code.trim()){
        this.isOk = true;
      }else {
        this.isOk = false;
      }
    }
  },
  watch: {
    phoneNumber(){
      this.isData();
    },
    code(){
      this.isData();
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
  .box{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }
  .nav{
    width: 100%;
    height: 0.44rem;
  }
  .input{
    width: 100%;
    margin-top: 0.15rem;
    background-color: #fff;
  }
  .input_code{
    position: relative;
  }
  .send{
    position: absolute;
    right: 0.1rem;
    top: 0;
    bottom: 0;
    height: 0.16rem;
    margin: auto 0;
    padding-left:0.1rem;
    border-left:0.01rem solid #E7E7E7;
    color:#EF0600;
    font-size: 0.14rem;
    line-height: 0.16rem;
  }
  .ok{
    width: 2.71rem;
    height: 0.24rem;
    margin: 0.5rem auto 0;
  }
</style>
