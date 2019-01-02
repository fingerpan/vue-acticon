/**
* Created by youngpan on 2017/2/25.
*/
<template>

  <b class="acticon-music-line" :style="{
          width: iconSize,
          height: iconSize
    }">
    <i v-for="n in 5" :style="{ backgroundColor: iconColor }"></i>
  </b>

</template>

<script>

  import common from "./common.vue"
  export default{
    name: "music-line",
    mixins:[common]
  }


</script>
<style lang="less" rel="stylesheet/less" scored>

  @import "../../common/less/mixins";

  b.acticon-music-line {

    /*display: flex;*/
    /*justify-content: space-around;*/
    /*align-items: flex-end;*/
    .flex-around-end;

    //comment --------------
    >i {
      .setWH(10%,80%);
      .borderRadius(5px);
      transform: scaleY(0.1);
      transform-origin: center bottom;
      animation: music-line-animate 2s ease-in-out infinite;

      // n-child  -----------------
      // bulid child mixin
      .setchild(@n,@num) {
        &:nth-child(@{n}) {
          animation-delay: unit(-@num, s);
        }
      }

      .setchild(1, 0.1);
      .setchild(2, 0.7);
      .setchild(3, 0.3);
      .setchild(4, 0.8);
      .setchild(5, 0.5);
    }

  }


  @keyframes music-line-animate {
    0% ,100% {
      transform: scaleY(0.1);
    }
    25% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(0.2);
    }
    75% {
      transform: scaleY(0.6);
    }
  }


</style>
