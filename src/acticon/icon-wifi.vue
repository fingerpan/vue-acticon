/**
* Created by youngpan on 2017/2/25.
*/
<template>
  <b class="acticon-icon-wifi" :style="{
       width: iconSize,
       height: iconSize
    }">
    <b :style="{ borderColor: iconColor }">
      <i v-for="n in 3" :style="{ borderWidth: iconLineWidth }"></i>
      <i :style="{ backgroundColor: iconColor }"></i>
    </b>
  </b>
</template>

<script>

  import common from './common.vue';
  export default {
    name: "icon-wifi",
    computed: {
      iconLineWidth() {
        return typeof Number(this.size) === 'number' && this.size > 25 ? "3px" : "2px";
      }
    },
    mixins: [common]
  }

</script>
<style lang="less" rel="stylesheet/less" scored>

  @import "../../common/less/mixins";

  b.acticon-icon-wifi {

    // 继承默认设置。didpaly, 默认宽度。
    &:extend(.setB);
    position: relative;
    .flex-around-end;

    > b {
      .setWH(25%);
      position: relative;

      > i {
        &:extend(.setI);
        .circle();
        .setcenter();
        box-sizing: border-box;
        border: 3px solid transparent;
        border-top-color: inherit;
        opacity: 0;

        //  bulid child loops minxin ----------------------
        .setchild(@n,@i:1) when (@i <= @n) {
          @num: 750 - @i*150;
          &:nth-child(@{i}) {
            // set the width
            .setWH(unit(@num, %));
            // set the animations
            @str: e('wifi-animate-@{i}');
            animation: @str 2s infinite;
          }
          .setchild(@n, @i+1);
        }

        .setchild(3);

        &:nth-child(4) {
          opacity: 1;
          transform: translate(-50%, -100%);
          border: none;
          .setWH(60%);
        }

      }
    }
  }

  //  the  animation timing function
  @keyframes wifi-animate-1 {
    66.6% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes wifi-animate-2 {
    33.3% {
      opacity: 0;
    }
    66.6% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes wifi-animate-3 {
    0% {
      opacity: 0;
    }
    33.3% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
</style>
