<template>
  <footer class="container">
    <p>Copyright 2020 Narito Takizawa.</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  computed: {},

  created() {},
  methods: {},
};
</script>


<style scoped>
footer {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

p {
  font-family: professor, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
}
</style>
