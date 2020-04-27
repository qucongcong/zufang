<template>
  <div class="box">
    <div class="title">
      <p @click="changeState">忘记密码</p>
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

          <van-field
            style="margin-top:5%;"
            v-model="password"
            type="password"
            name="密码"
            placeholder="请输入密码"
            :rules="[{ required: true,}]"
          />

          <van-field
            style="margin-top:5%;"
            v-model="password"
            type="password"
            name="queren密码"
            placeholder="请确认密码"
            :rules="[{ required: true,}]"
          />
          <div class="subxieyi">
            <van-checkbox v-model="checked">
              <label for>请在同意前认真阅读下方协议：《用户服务协议》</label>
            </van-checkbox>
          </div>
          <div>
            <van-button round block type="info" native-type="submit">提交</van-button>
          </div>
        </van-form>
      </div>
    </transition>

    <div class="bottom">
      <img src="../../assets/images/dlbj.png" alt />
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
    changeState() {
      this.change = !this.change;
    },
    onSubmit(values) {
      console.log("submit", values);
    },
    mobileLogin() {
      this.$router.push({ path: "/register" });
    },
    forgetpw() {
      this.$router.push({ path: "/changepw" });
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
