/**
* Created by youngpan on 2017/2/25.
*/
<template>

  <b class="acticon-refresh-round" :style="{
         width: iconSize,
         height: iconSize
    }">
    <b>
      <i v-for="n in 8" :style="{ backgroundColor:iconColor }"></i>
    </b>
  </b>

</template>

<script>

  import common from "./common.vue"
  export default{
    name: 'refresh-round',
    mixins: [common]
  }

</script>
<style lang="less" rel="stylesheet/less" scroed>

  @import "../../common/less/mixins";

  b.acticon-refresh-round {

    .flex-center();

    > b {
      position: relative;
      .setWH(25%);
      .circle();

      // ------------------------
      > i {
        position: absolute;
        opacity: 0;
        .setWH(100%);
        .circle();
        // bulid child  -------------
        .setchild(@n,@i:1) when (@i <= @n) {
          @deg: unit(45*@i, deg);
          &:nth-child(@{i}) {
            transform: rotate(@deg) translate(150%);
            animation: refresh-round-animate 1s infinite unit(0.12*@i, s) linear;
          }
          .setchild(@n, @i+1)
        }

        .setchild(8);
      }
    }

  }

  @keyframes refresh-round-animate {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.1;
    }
    100% {
      opacity: 0;
    }
  }


</style>
