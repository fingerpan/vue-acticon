/**
* Created by youngpan on 2017/2/28.
*/
<template>

  <b class="acticon-icon-weixin" :style="{
        width: iconSize,
        height: iconSize,
        borderColor : iconColor
    }">
    <b>
      <i v-for="n in 8"></i>
    </b>
  </b>

</template>

<script>

  import common from "./common.vue"
  export default{
    name: "icon-weixin",
    mixins: [common]
  }


</script>
<style lang="less" rel="stylesheet/less" scored>


  @import "../../common/less/mixins";

  b.acticon-icon-weixin {
    &:extend(.setB);
    box-sizing: border-box;
    border: 8px solid;
    border-radius: 50%;
    position: relative;
    animation: icon-weixin-animate 4s infinite linear;

    > b {
      &:extend(.setB);
      .setWH(2px,18px);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 0);
      transform-origin: center center;
      i {
        &:extend(.setI);
        .setWH(100%);
        position: absolute;
        transform-origin: top center;
        background-color: #fff;

        //  the minxin for set child ;
        .setChild(@n,@i:1) when (@i <= @n) {
          @deg: unit(45*@i, deg);

          &:nth-child(@{i}) {
            transform: rotate(@deg) translate(-6px, -3px);
          }
          .setChild(@n, @i+1);
        }
        .setChild(8);
      }
    }
  }

  @keyframes icon-weixin-animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }


</style>
