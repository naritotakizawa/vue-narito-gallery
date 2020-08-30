<template>
  <section class="container" v-if="currentProduct">
    <ProductHeader class="product-header" />
    <Masonry class="masonry" />
  </section>
</template>

<script>
import { mapState } from "vuex";
import Masonry from "@/components/Masonry.vue";
import ProductHeader from "@/components/ProductHeader.vue";

export default {
  name: "ProductDetail",
  props: {
    id: {
      required: true,
    },
  },
  computed: {
    ...mapState(["currentProduct"]),
  },
  mounted() {
    this.$store
      .dispatch("loadProductOne", { id: this.id })
      .catch((err) => Promise.reject(err))
      .then(() => {
        document.title = `${this.currentProduct.title} - gallery.narito`;
        document
          .querySelector('meta[name="description"]')
          .setAttribute("content", "");
      });
  },
  destroyed() {
    this.$store.commit("updateCurrentProduct", { data: null });
  },
  methods: {},
  components: {
    Masonry,
    ProductHeader,
  },
};
</script>

<style scoped>
section {
  display: grid;
  grid-template-columns: 230px 900px;
  column-gap: 25px;
  grid-template-rows: 1fr;
}

.product-header {
  margin-top: -45px;
  position: sticky;
  top: 25px;
  align-self: start;
}

.masonry {
  margin: 48px auto 0 auto;
}
</style>