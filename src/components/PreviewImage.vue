<template>
  <div>
    <figure v-if="selected" :key="selected.id" id="select-image">
      <img :src="selected.src" :alt="selected.alt" />
    </figure>

    <nav id="preview-container">
      <figure v-for="image of images" :key="image.id">
        <img
          class="preview"
          :src="image.src"
          :alt="image.alt"
          @click="select(image)"
          :class="{ select: isSelected(image) }"
        />
      </figure>
    </nav>
  </div>
</template>

<script>
export default {
  name: "PreviewImage",
  props: ["images"],
  data() {
    return {
      selected: {},
    };
  },
  created() {
    this.selected = this.images[0];
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
img {
  border-radius: 8px;
  width: 100%;
  height: auto;
}

#preview-container {
  margin-top: 48px;
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
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px #999;
}

#select-image {
  width: 100%;
  margin: 0 auto;
}

@media (min-width: 1000px) {
  #select-image {
    width: 800px;
    margin: 0 auto;
  }
}
</style>