<template>
  <div class="img-box" :style="boxStyle" ref="box">
    <!--<img :src="hostSrc" v-if="!showImg" class="hide">-->
    <img
            v-show="showImg"
            :src="hostSrc"
            :alt="alt"
            :style="imgStyle"
            ref="img"
            @error="onerror">
    <div class="loading" v-if="loading">
      <img src="./imgs/loading.png" style="width:16px;height:16px">
    </div>
    <div class="fail" v-if="fail">
      <img src="./imgs/fail.png" style="width:24px;height:24px">
    </div>
    <div class="empty" v-if="!src || (!showImg && !loading && !fail)">{{text}}</div>
  </div>
</template>
<style lang="scss" scoped>
  .loading{
    img{
      animation:mymove 2s infinite linear;
    }
    @keyframes mymove
    {
     0% {
       transform:rotate(0deg);
     }
      100% {
        transform:rotate(360deg);
      }
    }
  }
  .img-box{
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    background-color:#d5dae1;
  }
  img{
    max-width:100%;
    max-height:100%;
    cursor: pointer;
  }
  .empty{
    color:#909399;
    width:100%;
    line-height:30px;
  }
</style>
