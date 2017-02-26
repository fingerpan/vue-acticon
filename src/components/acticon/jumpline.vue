/**
* Created by youngpan on 2017/2/26.
*/
<template>
  <b class="jumpline">
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

  b.jumpline {

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
      .iconbg;

      // n-child  -----------------
      // bulid child mixin

      .setchild(@n,@i:1) when (@i <= @n) {
        &:nth-child(@{i}) {
          @str: e('line@{i}');
          .animation(@str 10s ease-in-out infinite);
        }
        .setchild(@n, @i+1)
      }
      .setchild(5);
    }
  }

  @keyframes line1 {
    0% {
      .transform(scaleY(0.1))
    }
    5% {
      .transform(scaleY(1))
    }
    15% {
      .transform(scaleY(1))
    }
    20% {
      .transform(scaleY(0.1))
    }
    25% {
      .transform(scaleY(1))
    }
    35% {
      .transform(scaleY(1))
    }
    40% {
      .transform(scaleY(0.1))
    }
    45% {
      .transform(scaleY(0.4))
    }
    55% {
      .transform(scaleY(0.4))
    }
    60% {
      .transform(scaleY(0.1))
    }
    65% {
      .transform(scaleY(1))
    }
    75% {
      .transform(scaleY(1))
    }
    80% {
      .transform(scaleY(0.1))
    }
    85% {
      .transform(scaleY(0.2))
    }
    95% {
      .transform(scaleY(0.2))
    }
    100% {
      .transform(scaleY(0.1))
    }

  }

  @keyframes line2 {
    0% {
      .transform(scaleY(0.1))
    }
    5% {
      .transform(scaleY(1))
    }
    15% {
      .transform(scaleY(1))
    }
    20% {
      .transform(scaleY(0.1))
    }
    25% {
      .transform(scaleY(0.7))
    }
    35% {
      .transform(scaleY(0.7))
    }
    40% {
      .transform(scaleY(0.1))
    }
    45% {
      .transform(scaleY(0.7))
    }
    55% {
      .transform(scaleY(0.7))
    }
    60% {
      .transform(scaleY(0.1))
    }
    65% {
      .transform(scaleY(0.8))
    }
    75% {
      .transform(scaleY(0.8))
    }
    80% {
      .transform(scaleY(0.1))
    }
    85% {
      .transform(scaleY(0.4))
    }
    95% {
      .transform(scaleY(0.4))
    }
    100% {
      .transform(scaleY(0.1))

    }

  }

  @keyframes line3 {
    0% {
      .transform(scaleY(0.1))
    }
    5% {
      .transform(scaleY(1))
    }
    15% {
      .transform(scaleY(1))
    }
    20% {
      .transform(scaleY(0.1))
    }
    25% {
      .transform(scaleY(0.4))
    }
    35% {
      .transform(scaleY(0.4))
    }
    40% {
      .transform(scaleY(0.1))
    }
    45% {
      .transform(scaleY(1))
    }
    55% {
      .transform(scaleY(1))
    }
    60% {
      .transform(scaleY(0.1))
    }
    65% {
      .transform(scaleY(0.6))
    }
    75% {
      .transform(scaleY(0.6))
    }
    80% {
      .transform(scaleY(0.1))
    }
    85% {
      .transform(scaleY(0.6))
    }
    95% {
      .transform(scaleY(0.6))
    }
    100% {
      .transform(scaleY(0.1))

    }
  }

  @keyframes line4 {
    0% {
      .transform(scaleY(0.1))
    }
    5% {
      .transform(scaleY(1))
    }
    15% {
      .transform(scaleY(1))
    }
    20% {
      .transform(scaleY(0.1))
    }
    25% {
      .transform(scaleY(0.7))
    }
    35% {
      .transform(scaleY(0.7))
    }
    40% {
      .transform(scaleY(0.1))
    }
    45% {
      .transform(scaleY(0.7))
    }
    55% {
      .transform(scaleY(0.7))
    }
    60% {
      .transform(scaleY(0.1))
    }
    65% {
      .transform(scaleY(0.4))
    }
    75% {
      .transform(scaleY(0.4))
    }
    80% {
      .transform(scaleY(0.1))
    }
    85% {
      .transform(scaleY(0.8))
    }
    95% {
      .transform(scaleY(0.8))
    }
    100% {
      .transform(scaleY(0.1))

    }
  }

  @keyframes line5 {
    0% {
      .transform(scaleY(0.1))
    }
    5% {
      .transform(scaleY(1))
    }
    15% {
      .transform(scaleY(1))
    }
    20% {
      .transform(scaleY(0.1))
    }
    25% {
      .transform(scaleY(1))
    }
    35% {
      .transform(scaleY(1))
    }
    40% {
      .transform(scaleY(0.1))
    }
    45% {
      .transform(scaleY(0.4))
    }
    55% {
      .transform(scaleY(0.4))
    }
    60% {
      .transform(scaleY(0.1))
    }
    65% {
      .transform(scaleY(0.2))
    }
    75% {
      .transform(scaleY(0.2))
    }
    80% {
      .transform(scaleY(0.1))
    }
    85% {
      .transform(scaleY(1))
    }
    95% {
      .transform(scaleY(1))
    }
    100% {
      .transform(scaleY(0.1))

    }
  }

  @-webkit-keyframes line1 {
    0% {
      .transform(scaleY(0.1))
    }
    5% {
      .transform(scaleY(1))
    }
    15% {
      .transform(scaleY(1))
    }
    20% {
      .transform(scaleY(0.1))
    }
    25% {
      .transform(scaleY(1))
    }
    35% {
      .transform(scaleY(1))
    }
    40% {
      .transform(scaleY(0.1))
    }
    45% {
      .transform(scaleY(0.4))
    }
    55% {
      .transform(scaleY(0.4))
    }
    60% {
      .transform(scaleY(0.1))
    }
    65% {
      .transform(scaleY(1))
    }
    75% {
      .transform(scaleY(1))
    }
    80% {
      .transform(scaleY(0.1))
    }
    85% {
      .transform(scaleY(0.2))
    }
    95% {
      .transform(scaleY(0.2))
    }
    100% {
      .transform(scaleY(0.1))
    }
  }

  @-webkit-keyframes line2 {
    0% {
      .transform(scaleY(0.1))
    }
    5% {
      .transform(scaleY(1))
    }
    15% {
      .transform(scaleY(1))
    }
    20% {
      .transform(scaleY(0.1))
    }
    25% {
      .transform(scaleY(0.7))
    }
    35% {
      .transform(scaleY(0.7))
    }
    40% {
      .transform(scaleY(0.1))
    }
    45% {
      .transform(scaleY(0.7))
    }
    55% {
      .transform(scaleY(0.7))
    }
    60% {
      .transform(scaleY(0.1))
    }
    65% {
      .transform(scaleY(0.8))
    }
    75% {
      .transform(scaleY(0.8))
    }
    80% {
      .transform(scaleY(0.1))
    }
    85% {
      .transform(scaleY(0.4))
    }
    95% {
      .transform(scaleY(0.4))
    }
    100% {
      .transform(scaleY(0.1))

    }
  }

  @-webkit-keyframes line3 {
    0% {
      .transform(scaleY(0.1))
    }
    5% {
      .transform(scaleY(1))
    }
    15% {
      .transform(scaleY(1))
    }
    20% {
      .transform(scaleY(0.1))
    }
    25% {
      .transform(scaleY(0.4))
    }
    35% {
      .transform(scaleY(0.4))
    }
    40% {
      .transform(scaleY(0.1))
    }
    45% {
      .transform(scaleY(1))
    }
    55% {
      .transform(scaleY(1))
    }
    60% {
      .transform(scaleY(0.1))
    }
    65% {
      .transform(scaleY(0.6))
    }
    75% {
      .transform(scaleY(0.6))
    }
    80% {
      .transform(scaleY(0.1))
    }
    85% {
      .transform(scaleY(0.6))
    }
    95% {
      .transform(scaleY(0.6))
    }
    100% {
      .transform(scaleY(0.1))

    }

  }

  @-webkit-keyframes line4 {
    0% {
      .transform(scaleY(0.1))
    }
    5% {
      .transform(scaleY(1))
    }
    15% {
      .transform(scaleY(1))
    }
    20% {
      .transform(scaleY(0.1))
    }
    25% {
      .transform(scaleY(0.7))
    }
    35% {
      .transform(scaleY(0.7))
    }
    40% {
      .transform(scaleY(0.1))
    }
    45% {
      .transform(scaleY(0.7))
    }
    55% {
      .transform(scaleY(0.7))
    }
    60% {
      .transform(scaleY(0.1))
    }
    65% {
      .transform(scaleY(0.4))
    }
    75% {
      .transform(scaleY(0.4))
    }
    80% {
      .transform(scaleY(0.1))
    }
    85% {
      .transform(scaleY(0.8))
    }
    95% {
      .transform(scaleY(0.8))
    }
    100% {
      .transform(scaleY(0.1))

    }
  }

  @-webkit-keyframes line5 {
    0% {
      .transform(scaleY(0.1))
    }
    5% {
      .transform(scaleY(1))
    }
    15% {
      .transform(scaleY(1))
    }
    20% {
      .transform(scaleY(0.1))
    }
    25% {
      .transform(scaleY(1))
    }
    35% {
      .transform(scaleY(1))
    }
    40% {
      .transform(scaleY(0.1))
    }
    45% {
      .transform(scaleY(0.4))
    }
    55% {
      .transform(scaleY(0.4))
    }
    60% {
      .transform(scaleY(0.1))
    }
    65% {
      .transform(scaleY(0.2))
    }
    75% {
      .transform(scaleY(0.2))
    }
    80% {
      .transform(scaleY(0.1))
    }
    85% {
      .transform(scaleY(1))
    }
    95% {
      .transform(scaleY(1))
    }
    100% {
      .transform(scaleY(0.1))

    }
  }


</style>
