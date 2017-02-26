/**
* Created by youngpan on 2017/2/25.
*/
<template>


  <b class="help"></b>


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

  b.help {
    position: relative;
  }

  b.help::before,
  b.help::after {
    display: block;
    position: absolute;
    box-sizing: border-box;
    content: '';
    .setWH(100%);
    .circle();
  }

  b.help::before {
    background-color: #dddddd;
    .animation(helpbefore 5s linear infinite);
  }

  b.help::after {
    border: 3px solid rgba(153, 153, 153, .6);
    background-color: #ffffff;
    .animation(helpafter 5s infinite)
  }

  @-webkit-keyframes helpbefore {
    0% {
      .transform(scale(1.5));
    }
    65% {
      .transform(scale(1.3));
    }
    100% {
      .transform(scale(1.5));
    }
  }

  @-webkit-keyframes helpafter {
    0% {
      .transform(scale(1));
    }
    65% {
      .transform(scale(1.2));

    }
    100% {
      .transform(scale(1))
    }
  }

  @keyframes helpbefore {
    0% {
      .transform(scale(1.5));
    }
    65% {
      .transform(scale(1.3));
    }
    100% {
      .transform(scale(1.5));
    }
  }

  @keyframes helpafter {
    0% {
      .transform(scale(1));
    }
    65% {
      .transform(scale(1.2));

    }
    100% {
      .transform(scale(1))
    }
  }


</style>
