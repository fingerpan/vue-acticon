/**
* Created by youngpan on 2017/3/2.
*/
<template>

  <b class="acticon-drop-round" :style="{
       width: iconSize,
       height: iconSize
    }">
    <i v-for="n in 5" :style="{
        backgroundColor : iconColor,
        transformOrigin : setOrigin,
     }"></i>
  </b>


</template>

<script>

  import common from "./common.vue"

  export default{
    name: "drop-round",
    computed: {
      setOrigin() {
        // 只解决带有px 的 或者数字。
        var origin = window.parseInt(this.size) / 2 + 'px';
        return 'center ' + origin;
      }
    },
    mixins: [common]
  }

</script>

<!--todo-->
<!--解决不能按按单位等比问题。-->
<style lang="less" rel="stylesheet/less" scored>

  @import "../../common/less/mixins";

  b.acticon-drop-round {
    position: relative;
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      .setWH(100%);
      box-sizing: border-box;
      border: 4px solid #eeeeee;
      border-radius: 50%;
    }

    > i {
      &:extend(.setI);
      .setWH(4px);
      .circle;
      position: absolute;
      left: 50%;
      margin-left: -2px;
      animation: drop-round-animate 2s infinite ease;

      .setChild(@n,@i:1) when (@i <= @n) {
        &:nth-child(@{i}) {
          animation-delay: unit(-0.1*@i, s);
        }
      ;
        .setChild(@n, @i+1);
      }
      .setChild(5);

    }
  }

  @-webkit-keyframes drop-round-animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes drop-round-animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }


</style>
