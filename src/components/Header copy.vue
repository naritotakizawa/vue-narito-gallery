<template>
  <header class="container">
    <div id="header-top">
      <div class="container" id="header-top-inner">
        <h1>
          <router-link :to="{name: 'product-list'}">Narito's Gallery</router-link>
        </h1>
        <nav id="categories">
          <ul>
            <li class="category">
              <a href class="name">ALL</a>
              <span class="count">{{ productCount }}</span>
            </li>
            <li v-for="category in categories" :key="category.id" class="category">
              <a href class="name">{{ category.name }}</a>
              <span class="count">{{ category.product_count }}</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div id="header-bottom" class="container">
      <nav id="tags">
        <ul>
          <li v-for="tag in tags" :key="tag.id" class="tag">
            <a href class="name">{{ tag.name }}</a>
            <span class="count">{{ tag.product_count }}</span>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      loadingCategory: true,
      loadingTag: true,
    };
  },
  computed: {
    ...mapState(["categories", "tags"]),
    productCount() {
      return this.$store.state.categories.reduce(
        (prev, current) => prev + current.product_count,
        0
      );
    },
  },

  created() {
    this.loadTags();
    this.loadCategories();
  },
  methods: {
    loadTags() {
      this.loadingTag = true;
      this.$store
        .dispatch("loadTags")
        .catch((err) => Promise.reject(err))
        .then(() => {
          this.loadingTag = false;
        });
    },
    loadCategories() {
      this.loadingCategory = true;
      this.$store
        .dispatch("loadCategories")
        .catch((err) => Promise.reject(err))
        .then(() => {
          this.loadingCategory = false;
        });
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

header {
  height: 124px;
}

#header-top {
  border-bottom: solid 1px #ccc;
}

#header-top-inner {
  height: 80px;
  display: grid;
  align-items: center;
  grid-template-rows: 1fr;
  grid-template-columns: auto 1fr;
  column-gap: 50px;
}

#header-top-inner > * {
  grid-row: 1;
  align-self: center;
}

h1 {
  font-size: 28px;
  font-weight: bold;
  display: inline-block;
  justify-content: start;
}

h1 > a {
  color: #333;
  text-decoration: none;
}

#categories {
  display: inline-block;
}

.category {
  margin-right: 30px;
  display: inline-block;
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

#header-bottom {
  height: 43px;
  display: grid;
  align-items: center;
}

#header-bottom > * {
  grid-row: 1;
  align-self: center;
}

.tags {
  display: inline-block;
}

.tag {
  margin-right: 24px;
  display: inline-block;
}

.tag > .name {
  font-size: 14px;
  text-decoration: none;
  color: #333;
  display: inline-block;
  vertical-align: middle;
}

.tag > .count {
  font-size: 10px;
  display: inline-block;
  margin-left: 3px;
  vertical-align: middle;
}
</style>
