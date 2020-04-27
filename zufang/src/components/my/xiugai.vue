<template >
  <div id="site">
    <header>
      <span>
        <van-icon name="arrow-left" size="0.45rem" class="back" />
      </span>
      修改密码
    </header>
    <div class="xiugai">
      <div>
        旧密码
        <input type="text" placeholder="请输入旧密码" />
      </div>
      <div>
        新密码
        <input type="text" placeholder="请输入新密码" />
      </div>
      <div>
        确认密码
        <input type="text" placeholder="请确认密码" />
      </div>
    </div>
    <button class="baocun" disabled>保存</button>
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

  margin-top: 0.3rem;
  background-color: white;
}
.xiugai > div {
  padding: 0 0.3rem;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgb(245, 245, 245);
}
input {
  width: 78%;
}
.baocun {
  width: 70%;
  display: block;
  line-height: 7vh;
  font-size: 0.4rem;
  color: white;
  margin: 3rem auto 0;
  text-align: center;
  background: rgba(221, 221, 221, 1);
  border-radius: 3rem;
  border: none;
}
</style>