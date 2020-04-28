<template lang="">
  <div>
      <van-nav-bar
  title="租赁管理"
  left-arrow
  @click-left="onClickLeft"
/>
    <van-cell left-arrow title="信息完善" icon is-link to="./Informationmanagement" />
    <van-cell title="补贴设置" is-link to="index" />
    <van-cell title="保证金" is-link to="./margin"/>
    <div class="a-router">
        <van-cell title="消息通知" is-link to="index" />
    </div>
    <div class="color">
        
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
};
</script>
<style>
#app {
  background-color: #f5f5f5;
}
.van-nav-bar .van-icon {
  color: #97989a;
  font-size: 0.36rem;
}
.van-nav-bar__title {
  font-size: 0.36rem;
  font-weight: 700;
}
.van-icon van-icon-arrow-left van-nav-bar__arrow {
  width: 1rem;
}
.a-router {
  margin-top: 0.3rem;
}
</style>