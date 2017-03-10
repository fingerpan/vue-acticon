/**
* Created by youngpan on 2017/2/25.
*/
<template>

  <b class="acticon-icon-photo" :style="{

      borderColor : iconColor
    }">
    <b class="photo-box">
      <i v-for="n in 4" :style="{ backgroundColor : iconColor}"></i>
    </b>
  </b>


</template>

<script>

  import common from "./common.vue"
  export default{
    name: "icon-photo",
    mixins: [common]
  }


</script>
<style lang="less" rel="stylesheet/less" scroed>


  @import "../../common/less/mixins";

  b.acticon-icon-photo {
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    border: 1px solid;
    border-radius: 10%;

    //  ---------------
    &::before {
      content: "";
      box-sizing: border-box;
      position: absolute;
      top: 10%;
      right: 10%;
      .setWH(20%);
      .circle();
      border: 1px solid;
      border-color: inherit;

      // anther way =>  use Gradient property form H5;
      //background-image: radial-gradient(at 50% 50%, transparent 0%, transparent 50%, @iconcolor 50%, @iconcolor 100%);

    }
    b.photo-box {

      .setWH(200%);
      position: absolute;
      top: 35%;
      left: 0;
      animation: icon-photo-animate 2s linear infinite;

      //   i  --------------
      i {
        position: absolute;
        border-radius: 10%;

        .setWH(50%);
        //  ---------
        &:nth-child(1),
        &:nth-child(3) {
          transform: translate(-15%, 20%) rotateZ(45deg);
        }
        &:nth-child(2),
        &:nth-child(4) {
          transform: translate(45%, 40%) rotateZ(30deg);
        }
        &:nth-child(3), &:nth-child(4) {
          left: 50%;
        }
      }

    }

  }

  @keyframes icon-photo-animate {
    0% {
      transform: translate(0%);
    }
    100% {
      transform: translate(-50%);
    }
  }

  @-webkit-keyframes icon-photo-animate {
    0% {
      transform: translate(0%);
    }
    100% {
      transform: translate(-50%);
    }
  }


</style>
