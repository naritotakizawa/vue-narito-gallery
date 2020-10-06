<template>
  <header>
    <div class="container">
      <h1><a href="/">gallery.narito</a></h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>


<style scoped>
header {
  height: 41px;
  background-color: #333;
  display: flex;
  align-items: center;
}

h1 {
  font-size: 21px;
  font-family: professor, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
}

a {
  text-decoration: none;
  color: #fff;
}

p {
  margin-top: 6px;
  color: #999;
}
</style>
