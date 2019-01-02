/**
* Created by youngpan on 2017/2/25.
*/
<template>

  <b class="acticon-ripple-round" :style="{
       width: iconSize,
       height: iconSize
    }">
    <i v-for="n in 3" :style="{ backgroundColor: iconColor }"></i>
  </b>

</template>

<script>

  import common from './common.vue';
  export default{
    name: "ripple-round",
    mixins: [common]
  }


</script>
<style lang="less" rel="stylesheet/less" scroed>

  @import "../../common/less/mixins";

  b.acticon-ripple-round {

    &:extend(.setB);
    position: relative;

    > i {

      &:extend(.setI);
      .setWH(100%);
      .circle();
      position: absolute;
      opacity: 0;
      animation: ripple-round-animate 1.5s linear infinite;

      //  set child loops mixins  -------------
      .setchild(@n,@i:1) when (@i <= @n) {
        @s: 0.3*(@i - 1);

        &:nth-child(@{i}) {
          animation-delay: unit(@s,s);
        }
        .setchild(@n, @i+1)
      }

      // bulid child
      .setchild(3);

    }
  }

  //  the  animation timing function

  @keyframes ripple-round-animate {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(0.3);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }

</style>
