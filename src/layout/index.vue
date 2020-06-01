<template>
  <div>
    <div class="fl left logo tc">交警中间件</div>
    <div class="fr right head">欢迎使用交警中间件</div>
    <ul class="fl menu left">
      <li :class="{active: $route.name === 'device'}" @click="clickMenu('device')"><i class="icon">{{'device' | pageIcon}}</i>{{'device' | pageName}}</li>
      <li :class="{active: $route.name === 'setting'}" @click="clickMenu('setting')"><i class="icon">{{'setting' | pageIcon}}</i>{{'setting' | pageName}}</li>
    </ul>
    <div class="fr content right">
      <!-- 面包屑导航 -->
      <ol class="crumbs">
        <li v-for="(name, i) in crumbs" :key="i">
          <template v-if="i === crumbs.length - 1"><i class="icon" >{{name | pageIcon}}</i><span class="noClick">{{name | pageName}}</span></template>
          <template v-else><i class="icon" >{{name | pageIcon}}</i><span @click="clickMenu(name)">{{name | pageName}}</span></template>
        </li>
      </ol>
      <div class="page">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="./public-css/base.scss"></style>
<style lang="scss" src="./public-css/element-extend.scss"></style>
<style lang="scss" src="./public-css/public.scss"></style>
<style scoped lang="scss">
  $left-width: 150px;
  $top-height: 40px;
  .left{
    width:$left-width;
  }
  .right{
    width: calc(100% - #{$left-width});
  }
  .logo,.head{
    height:$top-height;
  }
  .logo{
    background-color:#28376a;
    color:#FFF;
    font-size:18px;
    line-height:$top-height;
  }
  .head{
    background-color: #2290fe;
    color:#FFF;
    padding-left:15px;
    line-height:$top-height;
  }
  .menu{
    background-color:#262930;
    height: calc(100vh - #{$top-height});
    user-select:none;
    li{
      height:40px;
      text-align:center;
      color:#DDD;
      background-color:#32353c;
      line-height:40px;
      cursor:pointer;
      i{
        margin-right:5px;
      }
      &:hover{
        background-color:#41454F;
      }
    }
    .active{
      position:relative;
      &:before{
        content:'';
        position:absolute;
        height:100%;
        width:5px;
        background-color:#2290fe;
        left:0;
        top:0;
      }
      background-color:#474e68;
      &:hover{
        background-color:#474e68;
      }
    }
  }
  .content{
    background-color:#e7ebee;
    height: calc(100vh - #{$top-height});
  }
  .crumbs{
    height:40px;
    padding-left:15px;
    line-height:40px;
    font-weight:700;
    background-color:#f7f8f9;
    border:1px solid #E0E4E7;
    box-shadow:1px 1px 5px rgba(#000, 0.1);
    i{
      margin-right:5px;
      font-weight:400;
      color:#999;
    }
    li {
      height:100%;
      display:inline-block;
      cursor:pointer;
      color:#2290fe;
      + li {
        &:before{
          content:'';
          background:url('/static/imgs/crumbs.svg') no-repeat;
          width:15px;
          height:100%;
          display:inline-block;
          vertical-align: bottom;
          margin-right:15px;
          margin-left:15px;
        }
      }
    }
    .noClick{
      cursor:default;
      color:#333;
    }
  }
  .page{
    padding:10px;
    height:calc(100% - 40px);
  }
</style>