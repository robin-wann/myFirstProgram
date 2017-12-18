<template>
  <div>
      <v-components></v-components>
      <router-view></router-view>
  </div>
</template>

<script>
  import vComponents from './components/header/header.vue';

  export default {
    name : "App",
    components : {
      vComponents,
    },
  }

</script>

<style>
  *{
    padding: 0;
    margin : 0;
  }
  #app{
    width: 100%;
    height: 300px;
    border: 1px solid red;
    position: relative;
    overflow: hidden;
  }
</style>