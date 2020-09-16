<template>
  <section class="container" v-if="currentProduct">
    <ProductHeader class="product-header" />
    <PreviewImage id="preview-image" />
    <a id="to-preview-image" href="#preview-image">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.39 91.03" id="to-preview-image-svg">
        <path class="cls-1" d="M2.75,88.28l46-85.53L94.64,88.28" />
      </svg>
    </a>
  </section>
</template>


<script>
import { mapState } from "vuex";
import PreviewImage from "@/components/PreviewImage.vue";
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

  methods: {},
  components: {
    PreviewImage,
    ProductHeader,
  },
};
</script>

<style scoped>
.product-header {
  width: 300px;
  margin: 40px auto 40px auto;
  text-align: center;
}

#to-preview-image {
  display: block;
  width: 32px;
  height: 32px;
  padding: 4px;
  border-radius: 50%;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  right: 16px;
  bottom: 16px;
}

#to-preview-image-svg {
  width: 16px;
}

.cls-1 {
  fill: none;
  stroke: #231815;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 5.5px;
}
</style>