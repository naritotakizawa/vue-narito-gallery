<template>
  <header>
    <div class="container">
      <a href="/">gallery.narito</a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  computed: {},

  created() {},
  methods: {},
};
</script>


<style scoped>
header {
  height: 170px;
  padding-top: 30px;
  background-color: #766252;
  text-align: center;
}

a {
  display: block;
  color: #fff;
  font-size: 27px;
  font-family: professor, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
}
</style>
