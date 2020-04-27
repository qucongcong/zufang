<template>
  <div class="box">
    <div class="title">
      <p>手机号登录注册</p>
    </div>

    <transition name="fadere">
      <div class="formre">
        <van-form @submit="onSubmit">
          <van-field v-model="telephone" name="手机号" placeholder="请输入手机号" @blur="checkTelephone" />
          <van-field style="margin-top:5%;" v-model="sms" center clearable placeholder="请输入短信验证码">
            <template #button>
              <van-button
                size="small"
                type="default"
                style="border:none;border-left:1px solid #E7E7E7;color:#AC63FB"
                @click="getsms"
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
import axios from "../../utils/axios";
import { Notify } from "vant";
export default {
  components: {},
  props: {},
  data() {
    return {
      change: false,
      telephone: null,
      sms: null,
      checked: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    getsms() {},
    checkTelephone() {
      if (this.telephone == null) {
        Notify({
          message: "手机号不能为空！",
          color: "#ad0000",
          background: "#ffe1e1"
        });
      } else if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.telephone)) {
        Notify({
          message: "手机号格式不正确，请重新填写！",
          color: "#ad0000",
          background: "#ffe1e1"
        });
        this.telephone = null;
      }
    },
    onSubmit(values) {
      if (this.sms == null) {
        Notify({
          message: "验证码不能为空！",
          color: "#ad0000",
          background: "#ffe1e1"
        });
      } else if (this.checked == false) {
        Notify({
          message: "请仔细阅读用户服务协议，并勾选！",
          color: "#ad0000",
          background: "#ffe1e1"
        });
      } else {
        axios
          .get( "http://192.168.31.223:8088/gongyu-api/api/login",{
            params: {
              mobile: this.logintelephone,
              verifyCode: this.sms
            }
          })
          .then(res => {
            console.log(res);
          });
      }
      //  if (this.loginpassword.length < 6 || this.loginpassword.length > 16) {
      //   Notify({
      //     message: `用户名密码错误，请重新输入！`,
      //     color: "#ad0000",
      //     background: "#ffe1e1"
      //   });
      //   this.loginpassword = null;
      // } else {

      // }
    },
    login() {
      this.$router.push({ path: "/login" });
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
  color: #ac63fb;
  border-bottom: 2px solid #ac63fb;
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
.subchange {
  font-size: 14px;
  text-align: center;
  padding-top: 10%;
  color: #ac63fb;
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
