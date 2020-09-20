<template>
  <div class="container">
    <div v-show="!id">
      <nav id="filter">
        <CategoryList
          id="category-list"
          @click="filterProductsByCategory"
          :categories="categories"
          :initial="selectedCategory"
        />
        <Search id="search" @change="searchProducts" :initial="keyword" />
      </nav>

      <transition-group tag="div" class="products">
        <router-link
          :to="{name: 'detail', params: { id: product.id }}"
          v-for="product in products.results"
          :key="product.id"
          :title="product.title"
        >
          <figure>
            <img :src="product.thumbnail" :alt="product.title" />
          </figure>
        </router-link>
      </transition-group>

      <nav v-if="products.next" id="load-more">
        <router-link :to="getNextURL">もっと見る</router-link>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
import CategoryList from "@/components/CategoryList.vue";
import api from "@/api";

export default {
  name: "ProductList",
  props: ["id"],
  beforeRouteUpdate(to, from, next) {
    next();

    // 詳細ページからトップへ戻った際。なにもしない
    if (from.name === "detail" && to.name === "home") {
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
        // page=2からpage=1など、ブラウザバックで前ページへもどったときは何もしない
        if (fromPage > toPage) {
          return;

          // page=1からpage=2に移動など
        } else {
          this.pageNumber = parseInt(this.$route.query.page);
          this.addProducts();
          return;
        }
      }

      // 通常の検索やカテゴリ変更
      // カテゴリの変更時にカテゴリを新しく取得する(loadCategories)必要は本来ないが
      // 面倒なので処理を共通にしている
      this.setDataFromURLParameter();
      this.loadProducts();
      this.loadCategories();
    }
  },
  data() {
    return {
      products: {
        results: [],
        next: null,
      },
      categories: [],
      selectedCategory: { id: 0, name: "ALL" },
      keyword: "",
      pageNumber: 1,
    };
  },
  computed: {
    getNextURL() {
      return this.$router.resolve({
        name: "home",
        query: {
          keyword: this.keyword,
          category: this.selectedCategory.id,
          page: this.pageNumber + 1,
        },
      }).route.fullPath;
    },
  },
  methods: {
    // URLのパラメータをもとに、キーワードやカテゴリなどをdataにセット
    setDataFromURLParameter() {
      this.keyword = this.$route.query.keyword || "";
      this.selectedCategory = { id: parseInt(this.$route.query.category || 0) };
      this.pageNumber = parseInt(this.$route.query.page || 1);
    },

    searchProducts(keyword) {
      this.$router.push({
        name: "home",
        query: {
          keyword: keyword,
          category: this.selectedCategory.id,
          page: 1,
        },
      });
    },
    filterProductsByCategory(category) {
      this.$router.push({
        name: "home",
        query: {
          keyword: this.keyword,
          category: category.id,
          page: 1,
        },
      });
    },

    loadProducts() {
      api.product
        .list(this.keyword, this.selectedCategory.id, this.pageNumber)
        .then((res) => {
          this.products = res.data;
        })
        .catch((err) => {
          throw err;
        });
    },
    addProducts() {
      api.product
        .list(this.keyword, this.selectedCategory.id, this.pageNumber)
        .then((res) => {
          for (const product of res.data.results) {
            this.products.results.push(product);
          }
          if (res.data.next) {
            this.products.next = res.data.next;
          } else {
            this.products.next = null;
          }
        })
        .catch((err) => {
          throw err;
        });
    },

    loadCategories() {
      api.category
        .list(this.keyword, this.selectedCategory.id)
        .then((res) => {
          this.categories = res.data;
        })
        .catch((err) => {
          throw err;
        });
    },
  },

  created() {
    this.setDataFromURLParameter();
    this.loadProducts();
    this.loadCategories();
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
    Search,
    CategoryList,
  },
};
</script>


<style scoped>
#filter {
  margin-top: 48px;
}

#search {
  margin-top: 12px;
}

@media (min-width: 1000px) {
  #filter {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: end;
  }

  #category-list {
    grid-column: 1;
    justify-self: center;
    grid-row: 1;
  }

  #search {
    grid-column: 1;
    justify-self: end;
    align-self: center;
    grid-row: 1;
    margin-top: 0;
  }
}

.products {
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 12px;
}

img {
  width: 100%;
  border-radius: 8px;
}

#load-more {
  margin-top: 48px;
  display: flex;
  justify-content: center;
}

#load-more > a {
  color: #333;
  text-decoration: none;
  border-bottom: double 5px #333;
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
