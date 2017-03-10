/**
* Created by youngpan on 2017/2/25.
*/
<template>

  <ul class="clearfix layout">

    <!--misicLine-->
    <li>
      <div id="music">
        <music-line :size="size" :color="color"></music-line>
      </div>
    </li>

    <!--scaling-line-->
    <li>
      <div id="loading">
        <scaling-line :size="size" :color="color"></scaling-line>
      </div>
    </li>
    <!--jumpline-->
    <li>
      <div id="jump-line">
        <wave-line></wave-line>
      </div>
    </li>
    <!--icon-set-->
    <li>
      <div>
        <icon-set :size="size" :color="color"></icon-set>
        </b>
      </div>
    </li>
    <!--icon-wifi-->
    <li>
      <div>
        <icon-wifi :size="size" :color="color"></icon-wifi>
      </div>
    </li>
    <!--shock-->
    <li>
      <div id="shock">
        <shock></shock>
      </div>
    </li>
    <!--photo-->
    <li>
      <div>
        <icon-photo></icon-photo>
      </div>
    </li>
    <!--delete-->
    <li>
      <div>
        <dele></dele>
      </div>
    </li>
    <li>
      <div>
        <dele></dele>
      </div>
    </li>


    <!--refresh-->
    <li>
      <div>
        <refresh-round></refresh-round>
      </div>
    </li>
    <!--weixin-->
    <li>
      <div>
        <icon-weixin :size="size" :color="color"></icon-weixin>
      </div>
    </li>

    <li>
      <div>
        <drop-round :size="size"></drop-round>
      </div>
    </li>
    <!--help-round -->
    <li>
      <div>
        <help-round :size="size"></help-round>
      </div>
    </li>
    <!--ripples-->
    <li>
      <div>
        <ripple-round></ripple-round>
      </div>
    </li>

    <li>
      <div>
        <double-round></double-round>
      </div>
    </li>
  </ul>

</template>

<script>

  import musicLine from "acticon/music-line.vue"
  import scalingLine  from "acticon/scaling-line.vue"
  import iconPhoto from "acticon/icon-photo.vue"
  import iconSet from "acticon/icon-set.vue"
  import iconWifi from "acticon/icon-wifi.vue"
  import shock from "acticon/shock.vue"
  import dele from "acticon/delete.vue"
  import refreshRound from "acticon/refresh-round.vue"
  import waveLine from "acticon/wave-line.vue"
  import iconWeixin from "acticon/icon-weixin.vue"
  import dropRound from "acticon/drop-round.vue"
  import rippleRound from "acticon/ripple-round.vue"
  import helpRound from "acticon/help-round.vue"
  import doubleRound from "acticon/double-round"

  export default{
    data() {
      return {
        size: 30,
        color: "#999"
      }
    },
    components: {
      musicLine,
      scalingLine,
      iconPhoto,
      iconSet,
      iconWifi,
      shock,
      rippleRound,
      dele,
      refreshRound,
      waveLine,
      iconWeixin,
      dropRound,
      helpRound,
      doubleRound
    }
  }


</script>
<style lang="less" rel="stylesheet/less" scroed>

  ul.layout {
    list-style: none;
    width: 750px;
    margin: 10px auto 0;
    border: 1px solid #2bb48a;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0;

    li {
      width: 100px;
      height: 105px;
      margin: 15px 12px;
      border: 1px solid #CCCCCC;
      text-align: center;
      box-sizing: border-box;
      display: flex;
      > div {
        display: flex;
        width: 40px;
        height: 40px;
        border: 1px solid transparent;
        margin: auto;
        justify-content: center;
        align-items: center;
      }
      &:hover {
        border-color: #2f9842;
        cursor: pointer;
      }

    }
  }

  @media screen and (max-width: 740px) {
    ul.layout {
      width: 100%;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }

    ul.layout > li {
      width: 80px;
      height: 80px;
    }
  }


</style>
