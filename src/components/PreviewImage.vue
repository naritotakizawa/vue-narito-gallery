<template>
  <section>
    <nav id="preview-container">
      <figure v-for="image of currentProduct.image_set" :key="image.id">
        <img
          class="preview"
          :src="image.src"
          :alt="image.alt"
          @click="select(image)"
          :class="{ select: isSelected(image) }"
        />
      </figure>
    </nav>
    <transition>
      <figure v-if="selected" :key="selected.id">
        <img id="select-image" :src="selected.src" :alt="selected.alt" />
      </figure>
    </transition>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "PreviewImage",
  data() {
    return {
      selected: {},
    };
  },
  computed: {
    ...mapState(["currentProduct"]),
  },
  created() {
    this.selected = this.currentProduct.image_set[0];
  },
  methods: {
    select(image) {
      this.selected = image;
    },
    isSelected(image) {
      if (image.id === this.selected.id) {
        return true;
      } else {
        return false;
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

#preview-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.preview {
  width: 80px;
  height: 60px;
  object-fit: cover;
  margin-right: 14px;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.preview:hover {
  opacity: 0.5;
}

.select {
  border: solid 5px #766252;
}

#select-image {
  margin: 20px auto 0 auto;
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