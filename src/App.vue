<template>
  <div id="app">
    <Header id="header" />
    <router-view />
    <Footer id="footer" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0;
}

body {
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  font-family: source-han-sans-japanese, sans-serif;
  font-weight: 400;
  font-style: normal;
}

a {
  opacity: 1;
  transition: opacity 0.3s ease;
}

a:hover {
  opacity: 0.5;
}

@media (min-width: 1440px) {
  .container {
    /*max-width: 1756px;*/
    width: 1155px;
    margin: 0 auto;
  }
}

#footer {
  margin-top: 100px;
}
</style>
