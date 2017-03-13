/**
* Created by youngpan on 2017/2/25.
*/
<template>

  <ul class="clearfix layout">
    <iconli v-for="name in iconAll" :iconname="name"></iconli>
  </ul>

</template>

<script>

  import iconli from "./iconli.vue"

  export default{
    data() {
      return {
        size: "30px",
        color: "#999",
        iconAll: [
          'music-line',
          'wave-line',
          'scaling-line',
          'icon-set',
          'icon-shock',
          'icon-wifi',
          'icon-photo',
          'icon-weixin',
          'refresh-round',
          'drop-round',
          'help-round',
          'ripple-round',
          'double-round'
        ]
      }
    },
    components: {
      iconli
    }
  }


</script>
<style lang="less" rel="stylesheet/less">

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
    color: #2bb48a;

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
        border-color: #2bb48a;
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
      color: red;
    }

    ul.layout li {
      width: 80px;
      height: 80px;
    }
  }


</style>
