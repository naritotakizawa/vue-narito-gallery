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
  beforeRouteUpdate(to, from, next) {
    next();

    // 詳細ページからトップへ戻った際は、作品の読み直しはせず
    // 選択作品だけnullにし、ダイアログ部分を閉じる
    if (from.name === "detail" && to.name === "home") {
      this.$store.commit("updateCurrentProduct", { data: null });
      return;
    }

    // トップから詳細ページへ行く際も、特に読み直しはしない
    if (from.name === "home" && to.name === "detail") {
      return;
    }

    // トップからトップ、検索やカテゴリ変更、ページ移動時
    if (from.name === "home" && to.name === "home") {
      const fromCategory = parseInt(from.query.category || 0);
      const fromPage = parseInt(from.query.page || 1);
      const fromKeyword = from.query.keyword || "";
      const toCategory = parseInt(to.query.category);
      const toPage = parseInt(to.query.page);
      const toKeyword = to.query.keyword;

      // トップからトップで、ページ番号だけ違う場合は次ページ処理と見なし、
      // 作品データを一覧に追加する(updateProductsではなくaddProducts)
      if (
        fromKeyword === toKeyword &&
        fromCategory === toCategory &&
        fromPage !== toPage
      ) {
        // 前ページへもどった、ブラウザバックのとき、何もしない
        if (fromPage > toPage) {
          return;
        } else {
          this.$store.commit("updatePageNumber", {
            page: parseInt(this.$route.query.page),
          });
          this.$store.dispatch("addProducts");
          return;
        }
      }

      // 通常の検索やカテゴリ変更
      // カテゴリの変更時にカテゴリを新しく取得する(loadCategories)必要は本来ないが
      // 面倒なので処理を共通にしている
      this.setDataFromURLParameter();
      this.$store.dispatch("loadProducts");
      this.$store.dispatch("loadCategories");
    }
  },
  data() {
    return {};
  },
  methods: {
    // URLのパラメータをもとに、キーワードやカテゴリなどをストアにセット
    setDataFromURLParameter() {
      this.$store.commit("updateKeyword", {
        keyword: this.$route.query.keyword || "",
      });
      this.$store.commit("updateSelectedCategory", {
        category: { id: parseInt(this.$route.query.category || 0) },
      });

      this.$store.commit("updatePageNumber", {
        page: parseInt(this.$route.query.page || 1),
      });
    },
  },
  created() {
    this.setDataFromURLParameter();
    this.$store.dispatch("loadProducts");
    this.$store.dispatch("loadCategories");
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
  margin: 40px auto 40px auto;
  text-align: center;
}

#search {
  margin-top: 16px;
}

nav {
  border-bottom: solid 1px #ccc;
  padding-bottom: 16px;
  border-top: solid 1px #ccc;
  padding-top: 16px;
}

@media (min-width: 1200px) {
  nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: end;
  }

  #category-list {
    grid-column: 1;
  }

  #search {
    grid-column: 2;
    justify-self: end;
    margin-top: 0;
  }
}

#thumbnails {
  margin-top: 32px;
}
</style>
