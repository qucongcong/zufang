<template>
  <div id="my">
    <header>
      <van-icon name="arrow-left" color="white" size="0.45rem" class="back" />
      <div class="userMess">
        <img src="../../assets/a.jpg" alt />
        <p>15617658604</p>
      </div>
    </header>
    <section id="zixun">
      <div>
        <div>
          <span>
            <van-icon name="todo-list-o" color="#AC63FB" size="0.6rem" />
          </span>
          咨询记录
        </div>
        <span>
          <van-icon name="arrow" color="#B3B3B3" size="0.45rem" />
        </span>
      </div>
      <div>
        <div>
          <span>
            <span class="iconfont icon-weixin"></span>
          </span>
          绑定微信
        </div>
        <span>
          <van-icon name="arrow" color="#B3B3B3" size="0.45rem" />
        </span>
      </div>
    </section>
    <section id="guwen">
      <div>
        <div>
          <img src="../../assets/zp.png" alt srcset />
          租赁管理
        </div>
        <div>
          <i style="color: #af68fb;">请完善信息</i>
          <van-icon name="arrow" color="#B3B3B3" size="0.45rem" />
        </div>
      </div>
      <div>
        <div>
          <img src="../../assets/sqgw.png" alt srcset />
          申请成为租赁顾问
        </div>

        <van-icon name="arrow" color="#B3B3B3" size="0.45rem" />
      </div>
    </section>
    <section class="set">
      <div>
        <span>
          <span class="iconfont icon-shezhi"></span>
        </span>
        账号管理
      </div>
      <span>
        <van-icon name="arrow" color="#B3B3B3" size="0.45rem" />
      </span>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#my {
  width: 100%;
  height: 100vh;
  background-color: rgb(245, 245, 245);
}

header {
  width: 100%;
  height: 34vh;
  background-image: url("../../assets/myTopBg.png");
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
}
.back {
  position: relative;
  top: 3vh;
  left: 1vw;
}
.userMess {
  width: 92%;
  height: 17vh;
  position: absolute;
  left: 4vw;
  bottom: 0;
  background-color: white;
  box-shadow: 0px 14px 16px 0px rgba(43, 102, 253, 0.07);
  border-radius: 0.2rem;
  text-align: center;
}
.userMess img {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin: 0 auto;
  position: relative;
  top: -0.75rem;
}
.userMess p {
  position: relative;
  top: -0.4rem;
  color: #3e3e3e;
  font-size: 0.3rem;
}
#zixun {
  width: 92%;
  margin: 3vh auto;
  height: 17vh;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 14px 16px 0px rgba(43, 102, 253, 0.07);
  border-radius: 0.2rem;
  padding: 0 3vw;
  box-sizing: border-box;
}
#zixun > div {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#zixun > :nth-child(1) {
  border-bottom: 1px solid #eaeef9;
}
#zixun > div > div {
  width: 35%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.3rem;
  color: #4d4d4d;
  font-weight: 500;
}
.icon-weixin {
  font-size: 0.6rem;
  color: #ac63fb;
}
#guwen > div,
.set {
  width: 92%;
  height: 9vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 0.2rem;
  padding: 0 3vw;
  box-sizing: border-box;
  margin-bottom: 3vh;
}
#guwen > div > div,
.set > div {
  width: 35%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.3rem;
}
#guwen > div img {
  width: 0.53rem;
}
#guwen > div:nth-child(2) > div:nth-child(1) {
  width: 53.5%;
}
.icon-shezhi {
  font-size: 0.55rem;
}
</style>