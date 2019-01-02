/**
* Created by youngpan on 2017/2/25.
*/
<template>

  <div class="header">
    <header class="head logo" :class="headClass">
      <div class="wrap">
        <h1>Acticon</h1>
      </div>
    </header>
    <acticon-desc v-if="isHome"></acticon-desc>
  </div>



</template>

<script>


  import acticonDesc from "./acticon_decs.vue";

  export default{
    data() {
      return {
        isHome: true
      }
    },
    computed: {
      headClass() {
        console.log(this.$route.name);
        if (!(this.$route.name === "home")) {
          this.isHome = false;
          return "other-head"
        } else {
          this.isHome = true;
        }
        return "home-head";
      }
    },
    components: {
      acticonDesc
    }
  }


</script>
<style lang="less" rel="stylesheet/less">


  .head {
    width: 100%;
    border-bottom: 1px solid #CCCCCC;
    box-sizing: border-box;
    .wrap {
      height: 100%;
    }
    h1 {
      color: #2bb48a;
      font-weight: 400;
      margin: 0;
    }
  }

  .home-head {
    height: 130px;
    padding-top: 30px;
    h1 {
      text-align: center;
      font-size: 100px;
      line-height: 100px;
      vertical-align: baseline;
    }
  }

  .other-head {
    height: 40px;
    h1 {
      padding-left: 20px;
      text-align: left;
      font-size: 20px;
      line-height: 40px;
    }

  }


  @media screen and (max-width: 740px) {

    .home-head {
      height: 80px;
      padding-top: 30px;
      h1 {
        font-size: 50px;
        line-height: 50px;
      }
    }
    .other-head {
      height: 40px;
      h1 {
        text-align: left;
        font-size: 20px;
        line-height: 40px;
      }

    }

  }


</style>
