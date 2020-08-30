<template>
  <div>
    <div v-show="!id">
      <Profile id="profile" class="container" />
      <nav class="container">
        <CategoryList id="category-list" />
        <Search id="search" />
      </nav>
      <ThumbnailGrid id="thumbnails" class="container" />
    </div>
    <router-view />
  </div>
</template>

<script>
import Profile from "@/components/Profile.vue";
import ThumbnailGrid from "@/components/ThumbnailGrid.vue";
import CategoryList from "@/components/CategoryList.vue";
import Search from "@/components/Search.vue";

export default {
  name: "ProductList",
  props: ["id"],
  data() {
    return {};
  },
  mounted() {
    document.title = "gallery.narito";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "gallery.naritoは、Narito Takizawaの作ったWebサイトやゲーム、デザイン、イラストなどの紹介サイトです。"
      );
  },
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
  margin-top: -45px;
}

nav {
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 60px;
  justify-content: end;
}

#thumbnails {
  margin-top: 27px;
}
</style>
