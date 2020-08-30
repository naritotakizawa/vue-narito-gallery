<template>
  <ul>
    <li class="category" :class="{ select: isSelectedCategory({id:0, name: 'ALL'}) }">
      <a class="name" @click.prevent="selectCategory({id: 0, name: 'ALL'})" href="#">ALL</a>
      <span class="count">{{ productCount }}</span>
    </li>
    <li
      v-for="category in categories"
      :key="category.id"
      class="category"
      :class="{ select: isSelectedCategory(category) }"
    >
      <a href="#" class="name" @click.prevent="selectCategory(category)">{{ category.name }}</a>
      <span class="count">{{ category.product_count }}</span>
    </li>
  </ul>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "CategoryList",
  computed: {
    ...mapState(["categories"]),
    ...mapGetters(["isSelectedCategory", "productCount"]),
  },
  created() {
    this.loadCategories();
  },
  methods: {
    selectCategory(category) {
      this.$store
        .dispatch("selectCategory", { category })
        .catch((err) => Promise.reject(err))
        .then(() => {});
    },

    loadCategories() {
      this.$store
        .dispatch("loadCategories")
        .catch((err) => Promise.reject(err))
        .then(() => {});
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

.category {
  padding: 8px 16px;
  font-family: roboto, sans-serif;
  font-weight: 400;
  font-style: normal;
  border-radius: 8px;
}

.select {
  background-color: #766252;
  color: #fff;
}

.select > a.name {
  color: #fff;
}

.category > .name {
  font-size: 16px;
  text-decoration: none;
  color: #333;
  display: inline-block;
  vertical-align: middle;
}

.category > .count {
  font-size: 10px;
  display: inline-block;
  margin-left: 3px;
  vertical-align: middle;
}
</style>