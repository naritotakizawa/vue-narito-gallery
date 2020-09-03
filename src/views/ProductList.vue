<template>
  <div class="container">
    <div v-show="!id">
      <Profile id="profile" />
      <nav>
        <CategoryList id="category-list" />
        <Search id="search" />
      </nav>
      <ThumbnailGrid id="thumbnails" />
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
  width: 230px;
  margin: -45px auto 0 auto;
  text-align: center;
}

@media (min-width: 1200px) {
  #profile {
    margin: -45px 0 0 0;
    text-align: left;
  }
}
nav {
  margin-top: 45px;
}

@media (min-width: 1200px) {
  nav {
    margin-top: 0;
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 60px;
    justify-content: end;
  }
}

#thumbnails {
  margin-top: 27px;
}
</style>
