<template>
  <section>
    <transition-group tag="div" class="products">
      <a
        href="#"
        v-for="product in products.results"
        :key="product.id"
        :title="product.title"
        @click.prevent="clickProduct(product)"
      >
        <figure>
          <img :src="product.thumbnail" :alt="product.title" />
        </figure>
      </a>
    </transition-group>

    <nav v-if="products.next">
      <a href="#" @click.prevent="loadMore">Load More</a>
    </nav>
  </section>
</template>


<script>
import { mapState } from "vuex";

export default {
  name: "ThumbnailGrid",

  computed: {
    ...mapState(["products"]),
  },
  created() {
    this.$store
      .dispatch("loadProducts")
      .catch((err) => Promise.reject(err))
      .then(() => {});
  },
  methods: {
    loadMore() {
      this.$store
        .dispatch("moreProducts")
        .catch((err) => Promise.reject(err))
        .then(() => {});
    },
    clickProduct(product) {
      this.$router.push({
        name: "detail",
        params: { id: product.id },
      });
    },
  },
};
</script>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 27px;
}

img {
  width: 100%;
  border-radius: 8px;
}

nav {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}

nav > a {
  font-family: roboto, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  text-decoration: none;
  background-color: #766252;
  padding: 8px 16px;
  color: #fff;
  border-radius: 8px;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.6s ease;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>