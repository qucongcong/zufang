<template>
<div>
    
        <van-row type="flex" justify="space-between">
            <van-col>
                <div class="fh">
                    <img src="../../assets/images/fanhui@2x.png" alt="返回上一步"> 
                </div>
            </van-col>
            <van-col class="title">等待审核</van-col>
            <van-col></van-col>
        </van-row>
        <div class="pic">
            <img src="../../assets/images/sht@2x.png" alt="">
        </div>
        <div class="text">
              您的申请已提交,<br>我们将在1-3个工作日内返还你的账户<br> 请耐心等待...
        </div>
        <van-button class="btn" round type="info">查看</van-button>
</div>
</template>

<script>
export default {

}
</script>

<style>
.fh{
    width: .34rem;
    height: .34rem;
    margin-top: .25rem;
    margin-left: .13rem;
}
.title{
    width:1.9rem;
    height:.36rem;
    font-size:.36rem;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(51,51,51,1);
    margin-top: .2rem;
}
.pic{
    width: 5.68rem;
    height: 3.83rem;
    margin:1.22rem auto auto auto;
}
.text{
    width:5rem;
    height:.65rem;
    font-size:.29rem;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
     margin:.61rem auto auto auto;
     text-align: center;
}
.text>span{
    color: #638EFB;
}
.btn{
    width:5.42rem;
    height:.84rem;
    background:rgba(172,99,251,1);
    box-shadow:0px 6px 5px 0px rgba(172,99,251,0.75);
    border-radius:42px;
    margin-left:1.02rem;
    margin-top: 1rem;
}
</style>