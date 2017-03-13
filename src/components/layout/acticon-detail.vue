/**
* Created by youngpan on 2017/3/12.
*/
<template>
  <div class=="wrap">
    <div class="aa wrap">

    </div>
  </div>


</template>

<script>

  export default{
    data() {
      return {}
    },
    computed:{

    },
    created() {
        console.log(this.$route.params.iconname)
    }

  }


</script>
<style lang="less" rel="stylesheet/less">
  .aa {
    background-color: red;
    height: 100px;
    width: 100%;
  }

</style>
