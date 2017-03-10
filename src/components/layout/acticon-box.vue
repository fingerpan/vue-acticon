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
      <h4>music-line</h4>
    </li>

    <!--scaling-line-->
    <li>
      <div id="loading">
        <scaling-line :size="size" :color="color"></scaling-line>
      </div>
      <h4>scaling-line</h4>
    </li>
    <!--jumpline-->
    <li>
      <div id="jump-line">
        <wave-line></wave-line>
      </div>
      <h4>wave-line</h4>
    </li>
    <!--icon-set-->
    <li>
      <div>
        <icon-set :size="size" :color="color"></icon-set>
        </b>
      </div>
      <h4>icon-set</h4>
    </li>
    <!--icon-wifi-->
    <li>
      <div>
        <icon-wifi :size="size" :color="color"></icon-wifi>
      </div>
      <h4>icon-wifi</h4>
    </li>
    <!--shock-->
    <li>
      <div id="shock">
        <shock></shock>
      </div>
      <h4>Shock</h4>
    </li>
    <!--photo-->
    <li>
      <div>
        <icon-photo></icon-photo>
      </div>
      <h4>icon-photo</h4>
    </li>
    <!--delete-->
    <li>
      <div>
        <dele></dele>
      </div>
      <h4>Delete</h4>
    </li>

    <!--refresh-->
    <li>
      <div>
        <refresh-round></refresh-round>
      </div>
      <h4>refresh-round</h4>
    </li>
    <!--weixin-->
    <li>
      <div>
        <icon-weixin :size="size" :color="color"></icon-weixin>
      </div>
      <h4>icon-weixin</h4>
    </li>

    <li>
      <div>
        <drop-round :size="size"></drop-round>
      </div>
      <h4>drop-round</h4>
    </li>
    <!--help-round -->
    <li>
      <div>
        <help-round :size="size"></help-round>
      </div>
      <h4>help-round</h4>
    </li>
    <!--ripples-->
    <li>
      <div>
        <ripple-round></ripple-round>
      </div>
      <h4>Ripple-round</h4>
    </li>

    <li>
      <div>
        <double-round></double-round>
      </div>
      <h4>double-round</h4>
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

  .layout {
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
      > div {
        display: flex;
        width: 40px;
        height: 40px;
        border: 1px solid transparent;
        margin: 25% auto 0;
        justify-content: center;
        align-items: center;
      }
      &:hover {
        border-color: #2f9842;
        cursor: pointer;
      }

      > h4 {
        font-size: 14px;
        font-weight: 400;
        color: #666666;
        line-height: 150%;
        margin-top: 5%;
      }
    }
  }

  @media screen and (max-width: 740px) {
    .layout {
      width: 100%;
      margin: 0;
      padding: 0;
    }

    .layout > li {
      width: 25%;
      height: 30%;
    }
  }


</style>
