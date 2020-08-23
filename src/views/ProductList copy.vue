<template>
  <section>
    <div v-if="loading">Loading...</div>
    <figure v-else v-for="product of products" :key="product.id">
      <img :src="product.thumbnail" :alt="product.title" />
    </figure>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "home",
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapState(["products"]),
  },

  created() {
    this.loadProducts();
  },
  methods: {
    loadProducts() {
      this.loading = true;
      this.$store
        .dispatch("loadProducts")
        .catch((err) => Promise.reject(err))
        .then(() => {
          this.loading = false;
        });
    },
  },
};
</script>


<style scoped>
</style>
