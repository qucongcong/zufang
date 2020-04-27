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
    <div class="input">
      <van-field type="text" label="姓名" v-model="name" placeholder="请填写真实姓名" input-align="right" is-link />
      <van-field type="text" label="身份证号码" v-model="IDCard" placeholder="请输入身份证号码" input-align="right" is-link />
    </div>
    <div class="ID">
      <van-field
        label="身份证正反面照"
        readonly
        label-width="50%"
      >
        <template #button>
          <van-uploader :after-read="upFile" max-count="10">
            <van-button round size="mini" color="#AC63FB">上传</van-button>
          </van-uploader>
        </template>
      </van-field>
      <div class="photo">
        <img src="../../assets/身份证反面.png" alt="" class="later">
        <img src="../../assets/身份证正面.png" alt="" class="front">
        <p class="text">
          温馨提示：
          <br>1、拍摄正面照时，请确保姓名，证件号码等信息清晰可见。
          <br>2、拍摄反面照时，请确保签发机关，有效期限清晰可见。
          <br>3、请填写真实信息，以便平台进行审核。
        </p>
      </div>
    </div>
    <div class="next">
      <van-button round size="large" color="#AC63FB" @click="goNext">下一步</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApplyToBecomeLeasingConsultant',
  data(){
    return {
      name: "",
      IDCard: ""
    }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1);
    },
    upFile(file){
      console.log(file)
    },
    goNext(){
      if(!this.name.trim()){
        this.$toast('姓名没有输入，请输入姓名!');
      }else if(!this.IDCard.trim()){
        this.$toast('身份证号没有输入，请输入身份证号!');
      }else {
        this.$router.push("PhoneNumberVerification");
      }
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
    height: 0.88rem;
    margin-top: 0.1rem;
    background-color: #fff;
  }
  .ID{
    width: 100%;
    height: 2.83rem;
    margin-top: 0.1rem;
    background-color: #fff;
  }
  .ID>.photo{
    box-sizing: border-box;
    padding: 0.15rem;
  }
  .later,.front{
    display: inline-block;
    width: 1.6rem;
    height: 1.06rem;
  }
  .front{
    margin-left: 0.1rem;
  }
  .text{
    margin-top: 0.15rem;
    color: #aaa;
    font-size: 0.12rem;
    line-height: 0.2rem;
  }
  .next{
    width: 2.71rem;
    height: 0.24rem;
    margin: 0.8rem auto 0;
  }
</style>
