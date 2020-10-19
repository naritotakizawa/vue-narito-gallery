<template>
  <div>
    <header id="site-header">
      <h1><a href="/">Gallery.narito</a></h1>
      <ul>
        <li>
          <a href="https://twitter.com/NaritoTakizawa?lang=ja" target="_blank">
            <i class="icon-twitter icon"></i>
          </a>
        </li>
        <li>
          <a href="mailto:toritoritorina@gmail.com">
            <i class="icon-mail icon"></i>
          </a>
        </li>
        <li>
          <a hfef @click.prevent="isSearch = !isSearch">
            <i class="icon-search icon"></i>
          </a>
        </li>
      </ul>
    </header>

    <transition>
      <aside
        v-if="isSearch"
        id="searchModal"
        @click.self="isSearch = !isSearch"
      >
        <form id="search-inner" @submit.prevent="search">
          <div id="input-wrapper">
            <i class="icon-search icon"></i>
            <input type="text" v-model="keyword" />
          </div>
          <ul id="category-list">
            <li class="category" :class="{ select: isSelected(0) }">
              <a @click.prevent="select({ id: 0, name: 'ALL' })" href="#"
                >ALL({{ allCount }})</a
              >
            </li>
            <li
              v-for="category in categories"
              :key="category.id"
              class="category"
              :class="{ select: isSelected(category.id) }"
            >
              <a href="#" @click.prevent="select(category)"
                >{{ category.name }}({{ category.product_count }})</a
              >
            </li>
          </ul>
          <button type="submit" id="search-button">検索</button>
        </form>
      </aside>
    </transition>

    <main class="container">
      <h1 class="section-title">Collection</h1>
      <p class="section-lead">
        イラストやデザイン、ゲームなどを作成しています。
      </p>

      <transition-group tag="div" class="products">
        <router-link
          :to="{ name: 'detail', params: { id: product.id } }"
          v-for="product in products.results"
          :key="product.id"
          :title="product.title"
        >
          <figure>
            <img :src="product.thumbnail" :alt="product.title" />
          </figure>
          <h2>{{ product.title }}</h2>
          <p>{{ product.category.name }} / {{ product.created_at | date }}</p>
        </router-link>
      </transition-group>

      <infinite-loading
        ref="infiniteLoading"
        spinner="circle"
        @infinite="loadMore"
        v-if="isLoadeable"
      >
        <span slot="no-more">end</span>
        <span slot="no-results">end</span>
      </infinite-loading>

      <router-view />
      <a class="back" v-scroll-to="'body'" href>
        <i class="icon-up-open icon icon-big"></i>
      </a>
    </main>
    <footer>
      <p class="container">
        Copyright 2020 Narito Takizawa.<br />
        toritoritorina@gmail.com
      </p>
    </footer>
  </div>
</template>

<script>
import api from "@/api";
import InfiniteLoading from "vue-infinite-loading";

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
      isLoadeable: false,
      isSearch: false,
    };
  },
  filters: {
    date: function (value) {
      const date = new Date(value);
      return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
    },
  },
  computed: {
    allCount() {
      return this.categories.reduce(function (prev, category) {
        return prev + category.product_count;
      }, 0);
    },
  },
  methods: {
    // URLのパラメータをもとに、キーワードやカテゴリなどをdataにセット
    setDataFromURLParameter() {
      this.keyword = this.$route.query.keyword || "";
      this.selectedCategory = { id: parseInt(this.$route.query.category || 0) };
      this.pageNumber = parseInt(this.$route.query.page || 1);
    },

    isSelected(id) {
      if (this.selectedCategory.id === id) {
        return true;
      } else {
        return false;
      }
    },
    select(category) {
      this.selectedCategory = category;
    },

    search() {
      this.isSearch = false;
      this.isLoadeable = false;
      this.$scrollTo("body");
      this.$router.push({
        name: "home",
        query: {
          keyword: this.keyword,
          category: this.selectedCategory.id,
          page: 1,
        },
      });
    },

    loadProducts() {
      api.product
        .list(this.keyword, this.selectedCategory.id, this.pageNumber)
        .then((res) => {
          this.products = res.data;
          if (res.data.next) {
            this.isLoadeable = true;
          }
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
            this.$refs.infiniteLoading.stateChanger.loaded();
          } else {
            this.products.next = null;
            this.$refs.infiniteLoading.stateChanger.complete();
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

    loadMore() {
      // スクロールで呼ばれる次のデータ取得用メソッド
      // 初回データの取得後にisLoadableがtrueになると、
      // このメソッドがスクロールで呼ばれるようになる
      this.$router.push({
        name: "home",
        query: {
          keyword: this.keyword,
          category: this.selectedCategory.id,
          page: this.pageNumber + 1,
        },
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
    InfiniteLoading,
  },
};
</script>


<style scoped>
/* ヘッダー */
#site-header {
  padding: 0 10px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  z-index: 2;
}
#site-header h1 {
  grid-column: 1;
  grid-row: 1;
  justify-self: start;
  align-self: center;
  font-family: futura-pt, sans-serif;
  font-weight: 400;
  letter-spacing: 0.25em;
  font-size: 12px;
}

#site-header ul {
  grid-column: 1;
  grid-row: 1;
  justify-self: end;
  align-self: center;
}

#site-header li {
  display: inline-block;
}

@media (min-width: 1100px) {
  #site-header {
    padding: 0 60px;
  }
}

/* 検索モーダル */
#searchModal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 100;
  z-index: 1;
}

#search-inner {
  width: 100%;
  margin: 60px auto 0 auto;
  background-color: #fff;
  padding: 10px;
}

#search-button {
  width: 100px;
  height: 32px;
  border: solid 1px #ccc;
  background-color: transparent;
  cursor: pointer;
  margin-top: 10px;
}

#input-wrapper {
  position: relative;
  width: 100%;
  height: 32px;
}
#input-wrapper > input {
  position: absolute;
  width: 100%;
  height: 32px;

  border: solid 1px #ccc;
  background-color: transparent;
  padding: 0 7px 0 26px;
  box-sizing: border-box;

  font-family: fot-cezanne-pron, sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 16px;
}
#input-wrapper > i {
  position: absolute;
  padding: 0;
  z-index: 2;
  top: 3px;
  left: 4px;
}

#category-list {
  margin-top: 10px;
  list-style-type: none;
}

.category {
  font-family: futura-pt, sans-serif;
  font-weight: 400;
  border: none;
  display: inline-block;
  border: solid 1px #ccc;
  padding: 3px 5px;
  margin-right: 1em;
}
.select {
  background-color: #ccc;
}

.select a {
  color: #fff;
}

@media (min-width: 768px) {
  #search-inner {
    width: 600px;
    padding: 50px;
  }
}

/* メインコンテンツ */
main {
  margin-top: 100px;
}

.section-title {
  font-size: 42px;
  font-family: futura-pt-bold, sans-serif;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.1em;
}

.section-title::first-letter {
  background-color: #333;
  color: #fff;
}

.section-lead {
  font-family: fot-cezanne-pron, sans-serif;
  font-weight: 500;
  font-style: normal;
  text-align: center;
}

.products {
}
.products img {
  width: 100%;
  height: auto;
  margin-top: 60px;
}

.products h2 {
  font-size: 15px;
  font-weight: 500;
  margin-top: 20px;
  font-family: fot-cezanne-pron, sans-serif;
}

.products p {
  font-family: futura-pt, sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #999;
  margin-top: 3px;
}

@media (min-width: 768px) {
  .products {
    width: 606px;
    margin: 100px auto 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 60px;
  }
  .products img {
    margin-top: 0;
    height: 181px;
    width: 293px;
    object-fit: cover;
  }
}

@media (min-width: 1000px) {
  .products {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 40px;
    row-gap: 80px;
    margin-top: 100px;
    width: 100%;
  }
  .products img {
    height: 181px;
    width: 293px;
    object-fit: cover;
  }
}

/* フッター */
footer {
  font-family: futura-pt, sans-serif;
  height: 64px;
  background-color: #333;
  display: flex;
  align-items: center;
  margin-top: 200px;
}

footer p {
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
}
</style>
