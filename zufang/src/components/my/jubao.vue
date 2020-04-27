<template>
  <div id="jubao">
    <header>
      <span>
        <van-icon name="arrow-left" size="0.45rem" class="back" />
      </span>
      举报
    </header>
    <section class="jubaoMess">
      <div class="yuanyin">
        <span>
          <i>*</i>
          举报原因
        </span>
        <span @click="show=!show">
          {{yuanyin}}
          <van-icon name="arrow" size="0.3rem" class="back" />
        </span>
      </div>
      <div class="miaoshu">
        <div>举报描述</div>
        <textarea cols="30" rows="7" placeholder="请输入举报描述"></textarea>
        <div>
          <van-uploader v-model="fileList" multiple :max-count="4" />
          <p>{{fileList.length}}/4</p>
        </div>
      </div>
      <div class="tijiao">举报</div>
    </section>
    <van-popup v-model="show" round position="bottom" closeable :style="{ height: '25%' }">
      <van-picker :columns="columns" @change="onChange" />
    </van-popup>
  </div>
</template>
<script>
import { Uploader } from "vant";
import { Picker } from "vant";

export default {
  data() {
    return {
      yuanyin: "请选择",
      fileList: [{ url: "https://img.yzcdn.cn/vant/leaf.jpg" }],
      show: true,
      columns: ["1", "2", "3"]
    };
  },
  methods: {
    onChange(picker, values) {
      console.log(picker,values)
      this.yuanyin=values
    }
  }
};
</script>
<style scoped>
#jubao {
  height: 100vh;
  background-color: rgb(245, 245, 245);
}
header {
  width: 100%;
  height: 7vh;
  line-height: 7vh;
  background-color: white;
  text-align: center;
  font-size: 0.4rem;
  position: relative;
}
header span {
  position: absolute;
  top: 0.1rem;
  left: 0.2rem;
}
.jubaoMess {
  width: 94%;
  height: 5vh;
  margin: 3vh auto 0;
}
.yuanyin {
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.3rem;
  border-radius: 0.2rem;
  background-color: white;
  padding: 0 0.2rem;
}
.yuanyin span:nth-child(1) i {
  color: red;
}
.yuanyin span:nth-child(2) i {
  margin-left: 0.1rem;
  position: relative;
  top: 0.035rem;
}
.miaoshu {
  margin-top: 3vh;
  font-size: 0.3rem;
  border-radius: 0.2rem;
  background-color: white;
  padding: 0 0.2rem 0.4rem;
  box-sizing: border-box;
}
.miaoshu > div:nth-child(1) {
  line-height: 7vh;
}
.miaoshu textarea {
  width: 100%;
  border: unset;
}
.miaoshu p {
  color: #cccccc;
  text-align: right;
}
.tijiao {
  width: 70%;
  line-height: 7vh;
  font-size: 0.4rem;
  color: white;
  margin: 1.5rem auto 0;
  text-align: center;
  background-color: #ac63fb;
  box-shadow: 0px 6px 5px 0px rgba(172, 99, 251, 0.75);
  border-radius: 3rem;
}
</style>
