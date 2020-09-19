<template>
  <div>
    <img src="@/assets/search.svg" />
    <input type="text" :value="value" @change="change" />
  </div>
</template>

<script>
export default {
  name: "Search",
  props: ["initial"],
  data() {
    return {
      value: this.initial ? this.initial : "",
    };
  },
  methods: {
    change(event) {
      const value = event.target.value;
      this.value = value;
      this.$emit("change", value);
    },
  },
};
</script>

<style scoped>
div {
  position: relative;
  width: 150px;
  height: 24px;
}
input {
  position: absolute;
  width: 150px;
  height: 24px;
  border-radius: 4px;
  border: solid 1px #ccc;
  background-color: transparent;
  padding: 0 7px 0 26px;
  box-sizing: border-box;
  z-index: 1;
  font-family: inherit;
  font-size: 12px;
}
img {
  position: absolute;
  left: 8px;
  top: 7px;
  z-index: 2;
}
</style>