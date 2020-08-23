<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style>
* {
  margin: 0;
}

body {
  font-family: robot, source-han-sans-japanese, sans-serif;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.5;
  color: #333;
}

@media (min-width: 1440px) {
  .container {
    /*max-width: 1756px;*/
    width: 1537px;
    margin: 0 auto;
  }
}
</style>
