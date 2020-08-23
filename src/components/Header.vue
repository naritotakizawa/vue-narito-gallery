<template>
  <header class="container">
    <p id="copyright">Copyright 2020 Narito Takizawa.</p>
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
  height: 53px;
  display: flex;
  align-items: center;
}

#copyright {
  color: #999;
}
</style>
