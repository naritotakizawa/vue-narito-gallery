<template>
  <ul>
    <li class="category" :class="{ select: isSelectedCategory(0) }">
      <a class="name" @click.prevent="selectCategory(0)">ALL</a>
      <span class="count">{{ productCount }}</span>
    </li>
    <li
      v-for="category in categories"
      :key="category.id"
      class="category"
      :class="{ select: isSelectedCategory(category.id) }"
    >
      <a href class="name" @click.prevent="selectCategory(category.id)">{{ category.name }}</a>
      <span class="count">{{ category.product_count }}</span>
    </li>
  </ul>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  name: "CategoryList",
  computed: {
    ...mapState({
      categories: (state) => state.category.list,
    }),
    ...mapGetters(["isSelectedCategory", "productCount"]),
  },
  created() {
    this.loadCategories();
  },
  methods: {
    ...mapMutations(["selectCategory"]),

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
  margin-right: 30px;
}

.category::after {
  content: "";
  display: block;
  margin-top: 5px;
  height: 1px;
  width: 0;
  transition: all 0.3s ease;
}

.select::after {
  width: 100%;
  background-color: #999;
}

.category > .name {
  font-size: 21px;
  text-decoration: none;
  color: #333;
  display: inline-block;
  vertical-align: middle;
}

.category > .count {
  font-size: 10px;
  display: inline-block;
  margin-left: 5px;
  vertical-align: middle;
}
</style>