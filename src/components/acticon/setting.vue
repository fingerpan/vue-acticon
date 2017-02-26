/**
* Created by youngpan on 2017/2/25.
*/
<template>

  <b class="setting">
    <b>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </b>
  </b>


</template>

<script>

  export default{
    data() {
      return {}
    },
  }


</script>
<style lang="less" rel="stylesheet/less">


  @import "../../common/less/mixins";
  @import "../../common/less/compatiable";

  b.setting {
    position: relative;
    display: flex;
    justify-content: center;

    &::before,
    &::after {
      content: "";
      border-radius: 50%;
      .setcenter;
    }

    &::before {
      .setWH(75%);
      .iconbg;
    }

    &::after {
      .setWH(40%);
      background-color: #fff;
    }

    > b {
      position: relative;
      .setWH(20%, 100%);
      .animation(rotating 4s infinite linear);

      i {
        position: absolute;
        .setWH(100%);
        .transformOrigin(center center);
        border-radius: 2px;
        .iconbg;

        // set child element i
        .setchild(@n,@i:0) when (@i < @n) {
          &:nth-child(@{i}) {
            .transform(rotate(@i*45deg));
          }
          .setchild(@n, @i+1)
        }

        // bulid
        .setchild(4);
      }

    }
  }

  @keyframes rotating {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes rotating {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }


</style>
