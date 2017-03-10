/**
* Created by youngpan on 2017/2/25.
*/
<template>
  <b class="acticon-scaling-line" :style="{
         width: iconSize,
         height: iconSize
    }">
    <i v-for="n in 5" :style="{ backgroundColor : iconColor}"></i>
  </b>

</template>

<script>

  import common from "./common.vue";

  export default{
    name:"scaling-line",
    mixins: [common]
  }

</script>
<style lang="less" rel="stylesheet/less" scored>

  @import "../../common/less/mixins";

  b.acticon-scaling-line {
    &:extend(.setB);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;

    > i {
      .setWH(10%, 80%);
      .borderRadius(5px);
      animation: scaling-line-animate 1s ease-in infinite;

      // set child loops mixins ------------
      .setchild(@n,@i:1) when (@i <= @n) {
        &:nth-child(@{i}) {
          animation-delay: unit(-0.2*@i, s);
        }
        .setchild(@n, @i+1)
      }
      .setchild(5);
    }
  }

  @keyframes scaling-line-animate {
    0%, 100% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(0.2);
    }
  }


</style>
