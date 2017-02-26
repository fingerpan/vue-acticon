/**
* Created by youngpan on 2017/2/25.
*/
<template>

  <b class="loading">
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
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


  b.loading {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;

    > i {
      width: 10%;
      height: 80%;
      .borderRadius(5px);
      -webkit-animation:loading 1s ease-in infinite;
      -o-animation:loading 1s ease-in infinite;
      animation:loading 1s ease-in infinite;
      .iconbg();

      // ------------
      .setchild(@n,@i:1) when (@i <= @n) {
        &:nth-child(@{i}) {
          .animateDelay(0.2*@i);
        }
        .setchild(@n, @i+1)
      }
      .setchild(5);
    }
  }
  @-webkit-keyframes loading {
    0% {
      .transform(scaleY(1))
    }
    50% {
      .transform(scaleY(0.2));
    }
    100% {
      .transform(scaleY(1));
    }
  }
  @keyframes loading {
    0% {
      .transform(scaleY(1))
    }
    50% {
      .transform(scaleY(0.2));
    }
    100% {
      .transform(scaleY(1));
    }
  }


</style>
