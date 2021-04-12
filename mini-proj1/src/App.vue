<template>
  <div id="app">
    <div class="main-bar">
      <MainBar />
    </div>
    <div class="main-content">
      <router-view />
    </div>
    <div class="footer">
      <FootBar />
    </div>
  </div>
</template>

<script>
import MainBar from './components/MainBar.vue';
import FootBar from './components/FootBar.vue';

export default {
  name: 'App',
  components: {
    MainBar,
    FootBar,
  }
}
</script>

<style>
  #app {
    color: rgb(60, 60, 172);
    font-family: 'Teko', sans-serif;
  }
  .main-bar {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 20%;
  }
  .main-content {
    height: 73vh;
    margin-left: 20%;
    color: rgb(18, 42, 62);
    font-family: 'Sarabun', sans-serif;
  }
  .footer {
    height: 25vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    right: 0;
  }

  .main-bar,
  .footer {
    background-image: linear-gradient(200deg, #eff5ee, #f1ebec);
  }


</style>
