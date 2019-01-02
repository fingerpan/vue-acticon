/**
* Created by youngpan on 2017/2/25.
*/
<template>
  <b class="acticon-delete">
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


    b.acticon-delete{


      >i {
        .iconbg();

        &:nth-child(1){

          margin: 5px auto 1px;
          .setWH(80%,2px);
          animation: updown 3s ease infinite;
          transform-origin: -10px center;

        }
        &:nth-child(1)::before{
          content: "";
          .setWH(25%,3px);
          border-radius: 3px;
          border: 2px solid @iconColor;

          position: absolute;
          top: -5px;
          .transform(translate(-50%))
        }

        &:nth-child(2){
          position: relative;
          .setWH(60%,70%);

          box-sizing: border-box;
          margin:0 auto;
          background-color: #fff;
          border: 2px solid @iconColor;
          border-top: transparent;
          border-radius: 0 0 5px 5px;


        }
        &:nth-child(2)::before,
        &:nth-child(2)::after{
          content: "";
          position: absolute;
          width: 2px;
          height: 40%;
          top: 5px;
          background-color: @iconColor;
        }
        &:nth-child(2)::before{
          left: 15%;
        }
        &:nth-child(2)::after{
          right: 15%;
        }

      }


    }


    @-webkit-keyframes updown {
      0%{
        transform: rotate(0deg);
      }
      30%{
        transform: rotate(-15deg);
      }
      60%{
        transform: rotate(0deg);
      }
      100%{
        transform: rotate(0deg);
      }
    }

    @keyframes updown {
      0%{
        transform: rotate(0deg);
      }
      30%{
        transform: rotate(-15deg);
      }
      60%{
        transform: rotate(0deg);
      }
      100%{
        transform: rotate(0deg);
      }
    }






</style>
