<template>
  <div class="box">
    <van-button type="primary" @click="go">进入申请成为租赁顾问界面</van-button>
  </div>
</template>
<script>
export default {
  methods:{
    go(){
      this.$router.push("ApplyToBecomeLeasingConsultant");
    }
  }
}
</script>
<style scoped>
</style>
