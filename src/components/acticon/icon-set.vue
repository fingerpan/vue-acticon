/**
* Created by youngpan on 2017/2/25.
*/
<template>

  <b class="acticon-icon-set" :style="{
        borderColor: iconColor,
        width: iconSize,
        height: iconSize
    }">
    <b>
      <i v-for="n in 8" :style="{ backgroundColor: iconColor }"></i>
    </b>
  </b>

</template>
<script>

  import common from "./common.vue"
  export default{
    name:"icon-set",
    mixins:[common]
  }

</script>
<style lang="less" rel="stylesheet/less" scored>


  @import "../../common/less/mixins";

  b.acticon-icon-set {
    position: relative;
    display: flex;
    justify-content: center;

    &::before {
      content: "";
      border-radius: 50%;
      .setcenter;
      .setWH(75%);
      box-sizing: border-box;
      border: 5px solid #999999;
      border-color: inherit;
      z-index: 2;
      background-color: #fff;
    }

    > b {
      position: relative;
      .setWH(20%, 100%);
      animation: icon-set-animate 4s infinite linear;

      > i {
        position: absolute;
        .setWH(100%);
        transform-origin:center ;
        border-radius: 2px;

        // set child loops mixins;
        .setchild(@n,@i:0) when (@i < @n) {
          &:nth-child(@{i}) {
            transform: rotate(@i*45deg);
          }
          .setchild(@n, @i+1)
        }
        // bulid
        .setchild(4);
      }
    }
  }

  @keyframes icon-set-animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

</style>
