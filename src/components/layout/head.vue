/**
* Created by youngpan on 2017/2/25.
*/
<template>

  <div class="header">

    <header class="head logo"><h1>Acticon</h1></header>
    <div class="acticon_top">
      <h2 class="actico__desc">an vue.js move icon with MIT license</h2>
      <h1 class="acticon__title">Action icon structure with pure CSS and HTML</h1>
      <h2 class="acticon__anthor">From <a href="http://www.youngpan.top" class="youngpan">youngpan</a>
        <ghicon></ghicon>
      </h2>
      <a class="contribute" href="http://www.youngpan.top">CONTRIBUTE</a>
    </div>

  </div>


</template>

<script>

  import ghicon from "./ghicon.vue";

  export default{
    data() {
      return {}
    },
    components: {
      ghicon
    }
  }


</script>
<style lang="less" rel="stylesheet/less">


  body {
    font-family: "Microsoft YaHei UI Light";
  }

  .head {
    width: 100%;
    height: 130px;
    border-bottom: 1px solid #CCCCCC;
    box-sizing: border-box;
    padding-top: 30px;
    text-align: center;
    > h1 {
      font-size: 100px;
      color: #2bb48a;
      font-weight: 400;
      margin: 0;
      line-height: 100px;
      vertical-align: baseline;
    }
  }

  .acticon_top {
    text-align: center;
    width: 600px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 20px 10px;
    .acticon__title {
      font-size: 18px;
      font-weight: 400;
      color: #555555;
      margin-top: 2px;
    }
    .actico__desc {
      font-size: 13px;
      font-weight: 400;
      color: #2bb48a;
    }

    .acticon__anthor {
      margin: 10px 0;
      font-size: 16px;
      color: #2bb48a;
      font-weight: normal;
      a:hover {
        color: #87daff;
      }

      .youngpan {
        color: #2f9842;
        text-decoration: none;
      }

    }



    .contribute {
      cursor: pointer;
      display: inline-block;
      line-height: 50px;
      width: 120px;
      height: 50px;
      background-color: #fff;
      border: 1px solid #2bb48a;
      font-size: 14px;
      color: #2bb48a;
      margin: 20px 0 0 0;
      text-decoration: none;
    }
    .contribute:hover {
      outline: 1px solid #87daff;
    }
  }

  @media screen and (max-width: 740px) {
    body {
      margin: 0 10px;
    }

    .head {
      height: 100px;
      padding-top: 50px;

      > h1 {
        font-size: 50px;
        color: #2bb48a;
        font-weight: 400;
        margin: 0;
        line-height: 50px;
        vertical-align: baseline;
      }
    }

    .acticon_top {
      width: 100%;
    }

  }


</style>
