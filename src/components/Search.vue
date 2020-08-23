<template>
  <div class="input-with-icon">
    <img src="@/assets/search.svg" class="icon" />
    <input type="text" v-model="keyword" @change="search" />
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    search() {},
  },
};
</script>

<style scoped>
/* フォーム関連 */
.input-with-icon {
  position: relative;
  width: 230px;
  height: 35px;
}
.input-with-icon input {
  position: absolute;
  width: 230px;
  height: 35px;
  border-radius: 4px;
  border: solid 1px #999;
  padding: 0 10px 0 28px;
  box-sizing: border-box;
  z-index: 1;
  font-family: inherit;
  font-size: 14px;
}
.input-with-icon img {
  position: absolute;
  left: 8px;
  top: 12px;
  z-index: 2;
}
</style>