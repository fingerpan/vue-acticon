/**
* Created by youngpan on 2017/3/10.
*/
<template>
  <b class="acticon-double-round" :style="{
      width: iconSize,
      height: iconSize
    }">
    <i v-for="n in 2" :style="{ backgroundColor: iconColor }"></i>
  </b>
</template>

<script>

  import common  from "./common.vue"
  export default{
    name: 'double-round',
    mixins: [common]
  }

</script>

<style lang="less" rel="stylesheet/less" scroed>

  @import "../../common/less/mixins";

  b.acticon-double-round {
    position: relative;
    &:extend(.setB);

    > i {
      .setWH(100%);
      .circle();
      &:extend(.setI);
      position: absolute;
      top: 0;
      left: 0;
      animation: double-bounce-animate 2.0s infinite ease-in-out;
      &:nth-child(2) {
        animation-delay: -1.0s;
      }
    }
  }

  @keyframes double-bounce-animate {
    0%, 100% {
      transform: scale(0.0);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.0);
      opacity: 0.6;
    }
  }

</style>
