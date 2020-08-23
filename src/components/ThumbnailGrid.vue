<template>
  <section>
    <router-link v-for="product in products" :key="product.id" to="/">
      <figure>
        <img :src="product.thumbnail" :alt="product.title" />
      </figure>
    </router-link>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ThumbnailGrid",
  created() {
    this.loadProducts();
  },
  computed: {
    ...mapState({
      products: (state) => state.product.list,
    }),
  },
  methods: {
    loadProducts() {
      this.loading = true;
      this.$store
        .dispatch("loadProducts")
        .catch((err) => Promise.reject(err))
        .then(() => {});
    },
  },
};
</script>

<style scoped>
section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 36px;
}

@media (min-width: 1600px) {
  section {
    grid-template-columns: repeat(auto-fill, minmax(336px, 1fr));
  }
}

img {
  width: 100%;
}
</style>