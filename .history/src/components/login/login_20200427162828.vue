<template>
  <div class="box">
    <div class="title">
      <p
        @click="changeState"
        :style="{'color':change?'#AC63FB':'#CCCCCC','border-bottom-color':change?'#AC63FB':'#CCCCCC'}"
      >登录</p>
      <p
        @click="changeState"
        :style="{'color':!change?'#AC63FB':'#CCCCCC','border-bottom-color':!change?'#AC63FB':'#CCCCCC'}"
      >注册</p>
    </div>
    <transition name="fade">
      <div class="form" v-show="change">
        <van-form @submit="login">
          <van-field
            ref="telephone"
            v-model="logintelephone"
            name="手机号"
            placeholder="请输入手机号"
            @blur="checktelephone()"
          />
          <van-field
            style="margin-top:10%;"
            v-model="loginpassword"
            type="password"
            name="密码"
            placeholder="请输入密码"
          />
          <div class="subbutton">
            <van-button round block type="info" native-type="submit">登录</van-button>
            <div class="sublable">
              <label @click="mobileLogin">验证码登录</label>
              <label @click="forgetpw">忘记密码？</label>
            </div>
          </div>
        </van-form>
      </div>
    </transition>

    <!-- 注册 -->
    <transition name="fadere">
      <div class="formre" v-show="!change">
        <van-form @submit="register">
          <van-field
            v-model="retelephone"
            name="手机号"
            placeholder="请输入手机号"
            @blur="checkretelephone()"
            ref="retelephone"
          />
          <van-field style="margin-top:5%;" v-model="sms" center clearable placeholder="请输入短信验证码">
            <template #button>
              <van-button
                @click="getSms"
                size="small"
                type="default"
                style="border:none;border-left:1px solid #E7E7E7;color:#AC63FB"
              >发送验证码</van-button>
            </template>
          </van-field>

          <van-field
            style="margin-top:5%;"
            v-model="repassword"
            type="password"
            name="密码"
            placeholder="请输入密码"
            @blur="checkpassword"
          />

          <van-field
            style="margin-top:5%;"
            v-model="repasswordcheck"
            type="password"
            name="确认密码"
            placeholder="请确认密码"
            @blur="checkRepassword"
          />
          <div class="subxieyi">
            <van-checkbox v-model="agreement">
              <label for>请在同意前认真阅读下方协议：《用户服务协议》</label>
            </van-checkbox>
          </div>
          <div>
            <van-button round block type="info" native-type="register">注册</van-button>
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
      change: true,
      logintelephone: null,
      loginpassword: null,
      retelephone: null,
      sms: null,
      repassword: null,
      repasswordcheck: null,
      agreement: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 验证注册手机号
    checkReelephone() {
      if (this.$refs.retelephone.value == null) {
        Notify({
          message: "手机号不能为空！",
          color: "#ad0000",
          background: "#ffe1e1"
        });
      } else if (
        !/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.$refs.retelephone.value)
      ) {
        Notify({
          message: "手机号格式不正确，请重新填写！",
          color: "#ad0000",
          background: "#ffe1e1"
        });
        this.$refs.retelephone.value = null;
      }
    },
    // 注册密码验证
    checkpassword() {
      if (this.repassword == null) {
        Notify({
          message: "密码不能为空！",
          color: "#ad0000",
          background: "#ffe1e1"
        });
      } else if (this.repassword.length < 6) {
        Notify({
          message: "密码太短！请重新输入密码。",
          color: "#ad0000",
          background: "#ffe1e1"
        });
        this.repassword = null;
      } else if (this.repassword.length > 16) {
        Notify({
          message: "密码太长！请重新输入密码。",
          color: "#ad0000",
          background: "#ffe1e1"
        });
        this.repassword = null;
      }
    },
    checkRepassword() {
      if (this.repassword != this.repasswordcheck) {
        Notify({
          message: "两次密码输入不一样，请重新输入！",
          color: "#ad0000",
          background: "#ffe1e1"
        });
        this.repasswordcheck = this.repassword = null;
      }
    },
    // 验证登录手机号
    checktelephone() {
      if (this.$refs.telephone.value == null) {
        Notify({
          message: "手机号不能为空！",
          color: "#ad0000",
          background: "#ffe1e1"
        });
      } else if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.$refs.telephone.value)) {
        Notify({
          message: "手机号格式不正确，请重新填写！",
          color: "#ad0000",
          background: "#ffe1e1"
        });
        this.$refs.telephone.value = null;
      }
    },
    // 切换登录或者注册
    changeState() {
      this.change = !this.change;
    },
    // 注册
    register() {
      if (
        this.retelephone == null &&
        this.repasswordcheck == null &&
        this.sms == null
      ) {
        Notify({
          message: "请完善注册信息！",
          color: "#ad0000",
          background: "#ffe1e1"
        });
      } else if (this.agreement == false) {
        Notify({
          message: "请仔细阅读用户服务协议，并勾选！",
          color: "#ad0000",
          background: "#ffe1e1"
        });
      }
      else {
        axios.post({
          url:'http://192.168.31.223:8088/gongyu-api/api/register/register',
          params:{
            mobile:this.retelephone,
            password:this.repasswordcheck,
            verifyCode:this.sms
          }
        }).then(res=>{
          console.log(res)
        })
      }
    },
    // 登录
    login(){
      console.log('login')
    },
    // 验证码登录
    mobileLogin() {
      this.$router.push({ path: "/register" });
    },
    // 忘记密码
    forgetpw() {
      this.$router.push({ path: "/changepw" });
    },
    getSms() {
      axios({
        url: "http://192.168.31.223:8088/gongyu-api/api/sms",
        params: this.retelephone
      }).then(res => {
        console.log(res);
      });
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
  color: #cccccc;
  border-bottom: 2px solid #cccccc;
  width: 30%;
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
.subbutton {
  margin-top: 20%;
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
.sublable {
  margin-top: 5%;
  font-size:12px;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fadere-enter-active,
.fadere-leave-active {
  transition: opacity 0s;
}
.fadere-enter, .fadere-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
