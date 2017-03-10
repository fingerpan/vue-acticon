/**
* Created by youngpan on 2017/2/26.
*/
<template>
  <b class="acticon-wave-line" :style="{
      width: iconSize,
      height: iconSize
    }">
    <i v-for="n in 5" :style="{ backgroundColor: iconColor }"></i>
  </b>

</template>

<script>

  import common from "./common.vue"
  export default{
    name:"wave-line",
    mixins:[common]
  }


</script>
<style lang="less" rel="stylesheet/less" scored>

  @import "../../common/less/mixins";

  b.acticon-wave-line {

    &:extend(.setB);
   .flex-around-end;

    //comment --------------
    i {
      &:extend(.setI);
      .setWH(10%,80%);
      .borderRadius(5px);
      transform-origin: center bottom;


      // bulid child Loops mixin

      .setchild(@n,@i:1) when (@i <= @n) {
        &:nth-child(@{i}) {
          @str: e('line@{i}');
          animation: wave-line-animate 2s ease-in-out infinite;
          animation-delay: unit(-@i*0.1,s);
        }
        .setchild(@n, @i+1)
      }
      .setchild(5);
    }
  }

  @keyframes wave-line-animate {
    0% ,100%{
      transform: scaleY(0.1);
    }
    25% {
      transform: scaleY(01);
    }
    50% {
      transform: scaleY(0.2);
    }
    75% {
      transform: scaleY(0.7);
    }
  }

</style>
