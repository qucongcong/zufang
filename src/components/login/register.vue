<template>
  <div class="box">
    <div class="title">
      <p

      >手机号登录注册</p>

    </div>

    <transition name="fadere">
      <div class="formre">
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="手机号"
            placeholder="请输入手机号"
            :rules="[{ required: true, }]"
          />
          <van-field style="margin-top:5%;" v-model="sms" center clearable placeholder="请输入短信验证码">
            <template #button>
              <van-button
                size="small"
                type="default"
                style="border:none;border-left:1px solid #E7E7E7;color:#AC63FB"
              >发送验证码</van-button>
            </template>
          </van-field>


          <div class="subxieyi">
            <van-checkbox v-model="checked">
              <label for>请在同意前认真阅读下方协议：《用户服务协议》</label>
            </van-checkbox>
          </div>
          <div>
            <van-button round block type="info" native-type="submit">提交</van-button>
          </div>
          <div class="subchange">
             <label @click="login">账号密码登录</label>
          </div>
        </van-form>
      </div>
    </transition>

    <div class="bottom">
      <img src="../../assets/dlbj.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      change: false,
      username: "",
      password: "",
      sms: "",
      checked: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    login(){
      this.$router.push({path:'/login'})
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
.box {
  height: 100%;
  position: relative;
}
.title {
  text-align: center;
  padding-top: 20%;
}
.title p {
  font-weight: 600;
  padding-bottom: 3%;
  font-size: 17px;
  color: #AC63FB;
  border-bottom: 2px solid #AC63FB;
  width: 60%;
  display: inline-block;
}
.form {
  padding-right: 5%;
  padding-left: 5%;
  padding-top: 24%;
}
.formre {
  padding-right: 5%;
  padding-left: 5%;
  padding-top: 24%;
}
.subxieyi {
  padding-left: 3%;
  margin-top: 5%;
  margin-bottom: 5%;
  font-size: 0.05rem;
  width: 90%;
}
.subxieyi label {
  color: #cccccc;
}
.subchange{
  text-align: center;
  padding-top:10%;
  color: #AC63FB;
}
.sublable {
  margin-top: 5%;
}
.sublable label:nth-child(1) {
  color: #808080;
  float: left;
}
.sublable label:nth-child(2) {
  color: #808080;
  float: right;
}
.bottom {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}
/* 动画 */
</style>
