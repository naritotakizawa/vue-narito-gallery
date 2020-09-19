<template>
  <header>
    <h1>
      <a href="/">gallery.narito</a>
    </h1>
    <p>Webサイトやゲーム、デザイン、イラスト等を作成しています。</p>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>


<style scoped>
header {
  text-align: center;
}

h1 {
  font-size: 32px;
  font-family: professor, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  margin-top: 36px;
}

a {
  text-decoration: none;
  color: #333;
}

p {
  margin-top: 6px;
  color: #999;
}
</style>
