<template>
  <div id="app">
    <v-head></v-head>
    <router-view></router-view>
  </div>
</template>

<script>

  import head from "components/layout/head.vue"
export default {
  name: 'app',
  components:{
     "v-head" : head
  }
}
</script>

<style lang="less" rel="stylesheet/less">


</style>
