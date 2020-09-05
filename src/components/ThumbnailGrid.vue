<template>
  <section>
    <transition-group tag="div" class="products">
      <router-link
        :to="{name: 'detail', params: { id: product.id }}"
        v-for="product in products.results"
        :key="product.id"
        :title="product.title"
      >
        <figure>
          <img :src="product.thumbnail" :alt="product.title" />
        </figure>
      </router-link>
    </transition-group>

    <nav v-if="products.next">
      <router-link :to="getNextURL">Load More</router-link>
    </nav>
  </section>
</template>


<script>
import { mapState } from "vuex";

export default {
  name: "ThumbnailGrid",

  computed: {
    ...mapState(["products", "pageNumber", "keyword", "selectedCategory"]),

    getNextURL() {
      return this.$router.resolve({
        name: "home",
        query: {
          keyword: this.keyword,
          category: this.selectedCategory.id,
          page: this.pageNumber + 1,
        },
      }).route.fullPath;
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