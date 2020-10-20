<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
@import "./assets/css/fontello.css";

* {
  margin: 0;
  padding: 0;
}

body {
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  font-family: source-han-sans-japanese, sans-serif;
  font-weight: 400;
  font-style: normal;
}

a {
  opacity: 1;
  transition: opacity 0.3s ease;
  color: #333;
  text-decoration: none;
}

a:hover {
  opacity: 0.5;
}

.container {
  margin: 0 10px;
}
@media (min-width: 1000px) {
  .container {
    width: 960px;
    margin: 0 auto;
  }
}

.back {
  position: fixed;
  bottom: 10px;
  right: 10px;
  font-size: 32px;
}

.icon {
  cursor: pointer;
  color: #333;
  display: block;
  padding: 10px;
  font-size: 16px;
}

.icon-big {
  font-size: 32px;
}

@media (min-width: 1100px) {
  .back {
    right: 60px;
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}
.v-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

.v-enter {
  opacity: 0;
  transform: translateY(50px);
}
</style>
