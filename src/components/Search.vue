<template>
  <div class="input-with-icon">
    <img src="@/assets/search.svg" class="icon" />
    <input type="text" v-model.lazy="keyword" />
  </div>
</template>

<script>
export default {
  name: "Search",
  computed: {
    keyword: {
      get() {
        return this.$store.state.keyword;
      },
      set(value) {
        this.$store.dispatch("updateKeyword", { keyword: value });
      },
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
/* フォーム関連 */
.input-with-icon {
  position: relative;
  width: 200px;
  height: 37px;
}
.input-with-icon input {
  position: absolute;
  width: 200px;
  height: 37px;
  border-radius: 8px;
  border: none;
  background-color: #efefef;
  padding: 0 7px 0 30px;
  box-sizing: border-box;
  z-index: 1;
  font-family: inherit;
  font-size: 12px;
}
.input-with-icon img {
  position: absolute;
  left: 8px;
  top: 12px;
  z-index: 2;
}
</style>