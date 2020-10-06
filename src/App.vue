<template>
  <div id="app">
    <Header id="header" />
    <router-view />
    <Footer id="footer" />
    <a id="back-to-top" v-scroll-to="'body'" href>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.39 91.03">
        <path class="cls-1" d="M2.75,88.28l46-85.53L94.64,88.28" />
      </svg>
    </a>
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

.container {
  margin: 0 10px;
}
@media (min-width: 1000px) {
  .container {
    width: 1000px;
    margin: 0 auto;
  }
}

#header {
  margin-bottom: 96px;
}

#footer {
  margin-top: 200px;
}

#back-to-top {
  display: block;
  width: 32px;
  height: 32px;
  padding: 4px;
  border-radius: 50%;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  right: 16px;
  bottom: 16px;
}

#back-to-top > svg {
  width: 16px;
}

.cls-1 {
  fill: none;
  stroke: #999;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 5.5px;
}
</style>
