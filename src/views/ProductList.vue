<template>
  <div>
    <Profile id="profile" />
    <nav class="container">
      <CategoryList id="category-list" />
      <Search id="search" />
    </nav>
    <ThumbnailGrid id="thumbnails" class="container" />
  </div>
</template>

<script>
import Profile from "@/components/Profile.vue";
import ThumbnailGrid from "@/components/ThumbnailGrid.vue";
import CategoryList from "@/components/CategoryList.vue";
import Search from "@/components/Search.vue";

export default {
  name: "ProductList",
  data() {
    return {};
  },
  computed: {},

  created() {},
  methods: {},
  components: {
    ThumbnailGrid,
    Profile,
    CategoryList,
    Search,
  },
};
</script>


<style scoped>
#profile {
  margin: 80px 0;
}

nav {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

nav > * {
  grid-column: 1;
  grid-row: 1;
}

#category-list {
  justify-self: center;
}

#search {
  justify-self: end;
}

#thumbnails {
  margin-top: 35px;
}
</style>
