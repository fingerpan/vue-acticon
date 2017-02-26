/**
* Created by youngpan on 2017/2/25.
*/
<template>
  <b class="refresh">
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


    // refresh icon
    /*

     */


    b.refresh {

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
          .iconbg();

          // bulid child  -------------
          .setchild(@n,@i:1) when (@i <= @n) {
            &:nth-child(@{i}) {
              .animation(refresh 1s infinite unit(0.12*@i,s) linear)
            }
            .setchild(@n, @i+1)
          }

          .setchild(8);

          //  set transform   -----------
          &:nth-child(1) {
            .transform(translate(150%));
          }
          &:nth-child(2) {
            .transform(translate(110%, 110%));
          }
          &:nth-child(3) {
            .transform(translate(0, 150%));
          }
          &:nth-child(4) {
            .transform(translate(-110%, 110%));
          }
          &:nth-child(5) {
            .transform(translate(-150%));
          }
          &:nth-child(6) {
            .transform(translate(-110%, -110%));
          }
          &:nth-child(7) {
            .transform(translate(0, -150%));
          }
          &:nth-child(8) {
            .transform(translate(110%, -110%));
          }
        }
      }

    }

    @keyframes refresh {
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
  @-webkit-keyframes refresh {
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
