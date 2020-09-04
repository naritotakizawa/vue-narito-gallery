<template>
  <section
    id="masonry"
    v-masonry="'masonry'"
    transition-duration="0.3s"
    item-selector="#masonry > *"
    gutter="15"
    :horizontal-order="!currentProduct.is_auto_order"
    :style="{width:currentProduct.container_width + 'px'}"
    :column-width="currentProduct.column_width"
  >
    <figure
      v-for="image of currentProduct.image_set"
      :key="image.id"
      :style="{width: image.width+'px'}"
    >
      <img :src="image.src" :alt="image.alt" @load="imageLoaded" />
    </figure>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Masonry",
  data() {
    return {
      imagesloaded: 0,
    };
  },
  computed: {
    ...mapState(["currentProduct"]),
  },
  components: {},
  methods: {
    imageLoaded() {
      this.imagesloaded += 1;
      if (this.imagesloaded === this.currentProduct.image_set.length) {
        this.$redrawVueMasonry("masonry");
      }
    },
  },
};
</script>

<style scoped>
#masonry > * {
  margin-bottom: 20px;
  float: left;
  max-width: 100%;
}

img {
  border-radius: 8px;
  width: 100%;
  height: auto;
}
</style>