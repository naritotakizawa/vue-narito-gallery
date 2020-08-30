<template>
  <footer>
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
  display: grid;
  grid-template-columns: 1fr 1155px 1fr;
}

p {
  grid-column: 2;
  align-self: center;
  font-family: professor, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
}
</style>
