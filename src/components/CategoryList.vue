<template>
  <ul>
    <li class="category" :class="{ select: isSelected(0) }">
      <a class="name" @click.prevent="select({id: 0, name: 'ALL'})" href="#">ALL</a>
      <span class="count">{{ allCount }}</span>
    </li>
    <li
      v-for="category in categories"
      :key="category.id"
      class="category"
      :class="{ select: isSelected(category.id) }"
    >
      <a href="#" class="name" @click.prevent="select(category)">{{ category.name }}</a>
      <span class="count">{{ category.product_count }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CategoryList",
  props: ["categories", "initial"],
  data() {
    return {
      selected: this.initial ? this.initial : { id: 0, name: "ALL" },
    };
  },
  computed: {
    allCount() {
      return this.categories.reduce(function (prev, category) {
        return prev + category.product_count;
      }, 0);
    },
  },
  methods: {
    isSelected(id) {
      if (this.selected.id === id) {
        return true;
      } else {
        return false;
      }
    },
    select(category) {
      this.selected = category;
      this.$emit("click", category);
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
  padding: 6px 12px;
  font-family: roboto, sans-serif;
  font-weight: 400;
  font-style: normal;
  border: none;
}

.select {
  background-color: #f5f5f5;
}

.name {
  font-size: 16px;
  text-decoration: none;
  color: #333;
  display: inline-block;
  vertical-align: middle;
}

.count {
  font-size: 10px;
  display: inline-block;
  margin-left: 3px;
  vertical-align: middle;
}
</style>