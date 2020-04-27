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
        <div>
          <img src="../../assets/a.jpg" alt srcset />
          <div>
            <p>name</p>
            <span>gvhbjkllkkl</span>
          </div>
        </div>
        <div>
          <span class="fa fa-weixin"></span>联系
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  mounted() {
    this.axios({
      url: "api/houseType/list",
      method: "get"
    }).then(res => {
      if (res.data.code != 0) {
        this.state = res.data.data.status;
        this.message = res.data.data;
      }
    });
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
  height: 5vh;
  background-color: wheat;
  margin: 0 auto;
}
.TJlist div {
  display: flex;
}
</style>