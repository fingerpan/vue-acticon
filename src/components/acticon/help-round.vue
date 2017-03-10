/**
* Created by youngpan on 2017/2/25.
*/
<template>

  <b class="acticon-help-round" :style="{
     width: iconSize,
     height: iconSize,
     borderColor : iconColor
    }">
  </b>

</template>

<script>

  import common from './common.vue';

  export default{
    name: 'help-round',
    mixins: [common]
  }

</script>

<style lang="less" rel="stylesheet/less" scored>

  @import "../../common/less/mixins";

  b.acticon-help-round {
    position: relative;
    &:extend(.setB);

    &::before,&::after {
      display: block;
      content: "";
      position: absolute;
      box-sizing: border-box;
      .setWH(80%);
      .circle();
    }
    &::before {
      background-color: #eee;
      animation: help-before-animate 5s linear infinite;
    }
    &::after{
      border: 3px solid #333;
      background-color: #ffffff;
      animation: help-after-animate 5s infinite;
      border-color: inherit;
      z-index: 2;
    }

  }

  @keyframes help-before-animate {
    0% {
      transform: scale(1.5);
    }
    65% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1.5);
    }
  }

  @keyframes help-after-animate {
    0% {
      transform: scale(1);
    }
    65% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

</style>
