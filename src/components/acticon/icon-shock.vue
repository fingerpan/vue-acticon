/**
* Created by youngpan on 2017/2/25.
*/
<template>

  <b class="acticon-icon-shock" :style="{
      width:iconSize,
      height:iconSize,
      borderColor:iconColor
    }">
    <b>
      <i v-for="n in 2" :style="{ backgroundColor : iconColor }"></i>
    </b>
  </b>

</template>
<script>

  import common from "./common.vue"
  export default{
    name: 'icon-shock',
    mixins: [common]
  }

</script>
<style lang="less" rel="stylesheet/less" scored>


  @import "../../common/less/mixins";

  .setPosition() {
    position: absolute;
    top: 50%;
    transform: translate3d(0, -50%, 0);
  }

  //  -------------------------------

  b.acticon-icon-shock {
    &:extend(.setB);

    b {
      &:extend(.setB);
      .setWH(55%, 100%);

      position: relative;
      box-sizing: border-box;
      margin: 0 auto;
      border-style: solid;
      border-color: inherit;
      border-width: 3px 1px;
      border-radius: 10%;

      animation: icon-shock-animate 1s infinite;

      // ----------------
      > i {
        &:extend(.setI);
        border-radius: 20%;
        .setWH(2px, 50%);
        .setPosition;

        &:nth-child(1) {
          left: -40%;
        }

        &:nth-child(2) {
          right: -40%;
        }

        &::before {
          content: '';
          border-radius: 10%;
          .setWH(2px, 60%);
          background-color: inherit;
          .setPosition;
        }

        &:nth-child(1)::before {
          left: -200%;
        }
        &:nth-child(2)::before {
          right: -200%;
        }

      }
    }
  }

  @keyframes icon-shock-animate {
    0%, 100% {
      transform: none;
    }
    15% {
      transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -18deg);
    }

    30% {
      transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 15deg);
    }

    45% {
      transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -13deg);
    }
    60% {
      transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 12deg);
    }

    75% {
      transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    }

  }

</style>
