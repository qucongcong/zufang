<template>
  <div>
    <header>
      <p>租房APP</p>
      <span class="fa fa-user-circle"></span>
    </header>
    <div class="tuijian">
      <h1>为您匹配</h1>
      <p>根据选择，为您匹配</p>
    </div>
    <div class="TJlist">
      <div>
        <div class="mess">
          <img src="../../assets/a.jpg" alt srcset />
          <div>
            <p>name</p>
            <p>gvhbjkllkkl</p>
          </div>
        </div>
        <div class="lianxi" @click="lianxi()">
          <span class="fa fa-weixin"></span>联系
        </div>
      </div>
    </div>
    <div class="change">
      <div>换一批</div>
      <div>重填信息</div>
    </div>

    <van-popup
      v-model="show"
      :closeable="false"
      position="bottom"
      overlay-class="zhezhao"
      :style="{ height: '78%'  }"
      class="pop"
    >
      <img src="../../assets/a.jpg" alt />
      <div
        v-clipboard="value"
        v-clipboard:success="copySucc"
        v-clipboard:error="copyErr"
      >复制微信号&ensp;15538068890</div>
      <div @click="saveImg()">保存图片</div>
    </van-popup>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      show: false,
      value: "15617658604"
    };
  },
  mounted() {},
  methods: {
    lianxi() {
      this.show = true;
    },
    copySucc() {
      Toast("复制成功");
    },
    copyErr() {
      Toast("复制失败");
    },
    saveImg() {}
  }
};
</script>

<style scoped>
header {
  width: 100%;
  height: 7vh;
  background-color: white;
  text-align: center;
  line-height: 7vh;
  color: #333333;
  font-size: 0.35rem;
  font-weight: 550;
  position: relative;
}
header span {
  font-size: 0.6rem;
  color: #ac63fb;
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
}
.tuijian {
  width: 85%;
  height: 11vh;
  margin: 3vh auto 0;
  background-color: wheat;
  background-image: url("../../assets/ppBg.png");
  background-size: 100% 100%;
  text-align: center;
  font-size: 0.4rem;
}
.tuijian h1 {
  font-weight: 350;
}
.tuijian p {
  font-size: 0.3rem;
  color: #7e7e7e;
  margin-top: 0.2rem;
}
.TJlist {
  width: 94%;
  margin: 4vh auto 0;
}
.TJlist > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.3rem;
  padding: 0 0.2rem;
  box-shadow: 0px 3px 29px 0px rgba(4, 0, 0, 0.15);
  border-radius: 0.1rem;
}
.mess {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.TJlist div img {
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 50%;
  margin-right: 0.2rem;
}

.mess p {
  font-size: 0.3rem;
  color: #333333;
}
.mess p:nth-of-type(2) {
  background-color: #ac63fb;
  font-size: 0.01rem;
  color: white;
  margin-top: 0.1rem;
  border-radius: 0.05rem;
  padding: 0.03rem;
}
.lianxi {
  font-size: 0.3rem;
  border: 1px solid #ac63fb;
  padding: 0.1rem 0.3rem;
  border-radius: 0.4rem;
}
.lianxi span {
  color: #ac63fb;
  margin-right: 0.1rem;
}
.change {
  margin-top: 0.6rem;
  display: flex;
  justify-content: space-around;
}
.change div {
  width: 2rem;
  text-align: center;
  height: 0.75rem;
  line-height: 0.75rem;
  font-size: 0.3rem;
  border: 1px solid #ac63fb;
  border-radius: 0.4rem;
  color: #ac63fb;
}
.change div:nth-child(2) {
  background-color: #ac63fb;
  color: white;
}
.pop {
  background-color: unset;
}
.pop img {
  width: 70%;
  height: 6rem;
  margin: 0 auto;
  margin-bottom: 2rem;
}
.pop div {
  width: 94%;
  margin: 0.2rem auto;
  height: 1rem;
  line-height: 1rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  text-align: center;
  font-size: 0.35rem;
  color: #333333;
}
</style>
<style >
.van-overlay {
  background-color: rgba(44, 44, 44, 0.418);
}
</style>