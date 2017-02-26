/**
* Created by youngpan on 2017/2/25.
*/
<template>

  <b class="music">
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
  </b>

</template>

<script>

  export default{
    name: "musicline",
    data() {
      return {}
    },
  }


</script>
<style lang="less" rel="stylesheet/less">

  @import "../../common/less/mixins";

  b.music {

    /*display: flex;*/
    /*justify-content: space-around;*/
    /*align-items: flex-end;*/

    .flex-around-end;

    //comment --------------
    i {
      width: 10%;
      height: 80%;
      .borderRadius(5px 5px 0 0);
      transform: scaleY(0.1);
      transform-origin: center bottom;
      animation: music 2s ease-in-out infinite;

      .iconbg;

      // n-child  -----------------
      // bulid child mixin
      .setchild(@n,@num) {
        &:nth-child(@{n}) {
          animation-delay: unit(@num, s);
        }
      }

      .setchild(1, 0.1);
      .setchild(2, 0.6);
      .setchild(3, 0.3);
      .setchild(4, 0.8);
      .setchild(5, 0.2);
    }

  }
  @-webkit-keyframes music {
    0% {
      -webkit-transform: scale(1, 0.1);
      -moz-transform: scale(1, 0.1);
      -ms-transform: scale(1, 0.1);
      -o-transform: scale(1, 0.1);
      transform: scale(1, 0.1);
    }
    25% {
      -webkit-transform: scale(1, 1);
      -moz-transform: scale(1, 1);
      -ms-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    50% {
      -webkit-transform: scale(1, 0.2);
      -moz-transform: scale(1, 0.2);
      -ms-transform: scale(1, 0.2);
      -o-transform: scale(1, 0.2);
      transform: scale(1, 0.2);
    }
    75% {
      -webkit-transform: scale(1, 0.6);
      -moz-transform: scale(1, 0.6);
      -ms-transform: scale(1, 0.6);
      -o-transform: scale(1, 0.6);
      transform: scale(1, 0.6);
    }
    100% {
      -webkit-transform: scale(1, 0.3);
      -moz-transform: scale(1, 0.3);
      -ms-transform: scale(1, 0.3);
      -o-transform: scale(1, 0.3);
      transform: scale(1, 0.3);
    }
  }

  @keyframes music {
    0% {
      -webkit-transform: scale(1, 0.1);
      -moz-transform: scale(1, 0.1);
      -ms-transform: scale(1, 0.1);
      -o-transform: scale(1, 0.1);
      transform: scale(1, 0.1);
    }
    25% {
      -webkit-transform: scale(1, 1);
      -moz-transform: scale(1, 1);
      -ms-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    50% {
      -webkit-transform: scale(1, 0.2);
      -moz-transform: scale(1, 0.2);
      -ms-transform: scale(1, 0.2);
      -o-transform: scale(1, 0.2);
      transform: scale(1, 0.2);
    }
    75% {
      -webkit-transform: scale(1, 0.6);
      -moz-transform: scale(1, 0.6);
      -ms-transform: scale(1, 0.6);
      -o-transform: scale(1, 0.6);
      transform: scale(1, 0.6);
    }
    100% {
      -webkit-transform: scale(1, 0.3);
      -moz-transform: scale(1, 0.3);
      -ms-transform: scale(1, 0.3);
      -o-transform: scale(1, 0.3);
      transform: scale(1, 0.3);
    }
  }


</style>
