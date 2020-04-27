<template >
  <div id="site">
    <header>
      <span>
        <van-icon name="arrow-left" size="0.45rem" class="back" />
      </span>
      账号设置
    </header>
    <div class="xiugai">
      修改密码
      <span>
        <van-icon name="arrow" size="0.3rem" class="back" />
      </span>
    </div>
    <div class="tuichu">举报</div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#site {
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
.xiugai {
  font-size: 0.3rem;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.3rem;
  margin-top: 0.02rem;
  background-color: white;
}
.tuichu {
  width: 70%;
  line-height: 7vh;
  font-size: 0.4rem;
  color: white;
  margin:9rem auto 0;
  text-align: center;
  background-color: #ac63fb;
  box-shadow: 0px 6px 5px 0px rgba(172, 99, 251, 0.75);
  border-radius: 3rem;
}
</style>