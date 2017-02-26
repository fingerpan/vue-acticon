/**
* Created by youngpan on 2017/2/25.
*/
<template>

  <b class="shock">
    <b>
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


  @import "../../common/less/base";
  @import "../../common/less/mixins";
  @import "../../common/less/var";
  @import "../../common/less/compatiable";

  // shocking icon
  /*

  */

  .setPosition() {
    position: absolute;
    top: 50%;
    .transform(translateY(-50%));
  }

  //  -------------------------------

  b.shock {

    b {
      .setWH(55%, 100%);

      position: relative;
      box-sizing: border-box;
      margin: 0 auto;
      border-style: solid;
      border-color: @iconColor;
      border-width: 3px 1px;
      border-radius: 10%;

      -webkit-animation: shock 1s infinite;
      -o-animation: shock 1s infinite;
      animation: shock 1s infinite;

      // ----------------
      i {

        border-radius: 20%;
        .iconbg;
        .setWH(2px, 50%);
        .setPosition;

        &:nth-child(1) {
          left: -35%;
        }

        &:nth-child(2) {
          right: -35%;
        }

        &::before {
          content: '';
          border-radius: 10%;
          .setWH(2px, 60%);
          .iconbg;
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

  @keyframes shock {
    from {
      .transform(none);
    }

    15% {
      .transform(translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -18deg));
    }

    30% {
      .transform(translate3d(20%, 0, 0) rotate3d(0, 0, 1, 15deg));
    }

    45% {
      .transform(translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -13deg));
    }

    60% {
      .transform(translate3d(10%, 0, 0) rotate3d(0, 0, 1, 12deg));
    }

    75% {
      .transform(translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg));
    }

    to {
      .transform(none);
    }
  }

  @-webkit-keyframes shock {
    from {
      .transform(none);
    }

    15% {
      .transform(translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -18deg));
    }

    30% {
      .transform(translate3d(20%, 0, 0) rotate3d(0, 0, 1, 15deg));
    }

    45% {
      .transform(translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -13deg));
    }

    60% {
      .transform(translate3d(10%, 0, 0) rotate3d(0, 0, 1, 12deg));
    }

    75% {
      .transform(translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg));
    }

    to {
      .transform(none);
    }
  }

  @-webkit-keyframes shock {
    from {
      .transform(none);
    }

    15% {
      .transform(translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -18deg));
    }

    30% {
      .transform(translate3d(20%, 0, 0) rotate3d(0, 0, 1, 15deg));
    }

    45% {
      .transform(translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -13deg));
    }

    60% {
      .transform(translate3d(10%, 0, 0) rotate3d(0, 0, 1, 12deg));
    }

    75% {
      .transform(translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg));
    }

    to {
      .transform(none);
    }
  }


</style>
