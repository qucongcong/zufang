<template>
    <div>
        <div class="head">
            <van-row style="height:100%" gutter="">
                <van-col>
                    <div class="fh">
                        <img src="../../assets/images/fanhui@2x.png" alt="返回上一步"> 
                    </div>
                </van-col>
                <van-col class="title">咨询列表</van-col>
            </van-row>
        </div>
        <div class="content">
            <ul>
                <li class="list"> 
                    <van-row>
                        <van-col class="head-img">
                            <img src="../../assets/images/touxiang.jpg" alt="">
                            </van-col>
                        <van-col class="name">
                            <p class="name-mz">李州州</p>
                            <p class="bz">补300元/3期</p>
                        </van-col>
                        <van-col class="lxkf">
                            <img src="../../assets/images/lxkf.png" alt="">
                        </van-col>
                        <van-col class="jb">
                            <img src="../../assets/images/jubao@2x.png" alt="">
                        </van-col>
                    </van-row>
                </li>   
                <li class="list"> 
                    <van-row>
                        <van-col class="head-img">
                            <img src="../../assets/images/touxiang.jpg" alt="">
                            </van-col>
                        <van-col class="name">
                            <p class="name-mz">李州州</p>
                            <p class="bz"></p>
                        </van-col>
                        <van-col class="lxkf">
                            <img src="../../assets/images/lxkf.png" alt="">
                        </van-col>
                        <van-col class="jb">
                            <img src="../../assets/images/jubao@2x.png" alt="">
                        </van-col>
                    </van-row>
                </li>   
                <li class="list"> 
                    <van-row>
                        <van-col class="head-img">
                            <img src="../../assets/images/touxiang.jpg" alt="">
                            </van-col>
                        <van-col class="name">
                            <p class="name-mz">李州州</p>
                            <p class="bz"></p>
                        </van-col>
                        <van-col class="lxkf">
                            <img src="../../assets/images/lxkf.png" alt="">
                        </van-col>
                        <van-col class="jb">
                            <img src="../../assets/images/jubao@2x.png" alt="">
                        </van-col>
                    </van-row>
                </li>    
            </ul>
            <div class="foot">
                <span>没有更多了</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.head{
    width: 100%;
    height: 0.88rem;
    background-color:#FFFFFFFF  ;
}
/* 箭头样式 */
.head .fh{
    width: .34rem;
    height: .34rem;
    margin-top: .25rem;
    margin-left: .13rem;
}
/* 字体样式 */
.title{
    font-size:.36rem;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(51,51,51,1);
    margin: .14rem auto auto 2.58rem ; 
} 
/* 列表 */
.list{
    margin-top: .3rem;
    width: 7.1rem;
    height: 1.2rem;
    margin: 0 auto;
    margin-top: .3rem;
    background:rgba(255,255,255,1);
    box-shadow:0px 3px 29px 0px rgba(4,0,0,0.15);
    border-radius:10px;
}
/* 头像 */
.head-img{
    width: .8rem;
    height: .8rem;
    margin: .2rem auto 0.2rem 0.2rem;
}
.head-img>img{
    border-radius: 50%;
}
/* 昵称 */
.name{
    height:.3rem;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:28px;
    margin-left: 0.32rem;
}
.name-mz{
    margin-top: .18rem;   
    font-size:.30rem;
}
/* 补助 */
.bz:not(:empty){
    margin-top: .2rem;
    font-size:.2rem;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:.28rem;
    background:rgba(172,99,251,1);
    border-radius:0.04rem;
    padding: .04rem .12rem .05rem .08rem;
}
.bz{
    margin-top: .2rem;
    font-size:.2rem;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:.28rem;
    background:rgba(172,99,251,1);
    border-radius:.04rem;
}
/* 联系客服 */
.lxkf{
    width: .44rem;
    height: .38rem;
    margin-top: .4rem;
    margin-right: 1.06rem;
    float: right;
}
.lxkf>img{
    width: 100%;
    height: 100%;
}
/* 举报 */
.jb{
    width: .4rem;
    height: .4rem;
    margin-top: .4rem;
    margin-right: -1.16rem;
    float: right;
}
.jb>img{
    width: 100%;
    height: 100%;
}
.foot{
    width:1.2rem;
    height:.23rem;
    font-size:.24rem;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(150,156,168,1);
    line-height:.32rem;
    margin: 0 auto;
    margin-top: 1.37rem;
}
</style>