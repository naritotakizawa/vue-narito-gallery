<template>
  <div class="wrapper">
    <div id="left">
      <h1>{{data.title}}</h1>
      <p class="meta">{{data.category.name}} / {{data.created_at | date}}</p>
    </div>
    <div id="right" v-html="data.text" class="text"></div>
  </div>
</template>

<script>
export default {
  name: "SimpleCard",
  props: ["data"],

  filters: {
    date: function (value) {
      const date = new Date(value);
      return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 300px;
}

figure {
  line-height: 1;
}

h1 {
  font-size: 24px;
  font-weight: bold;
}

.meta {
  font-family: roboto, sans-serif;
  font-size: 16px;
  margin-top: 3px;
}

.text {
  margin-top: 10px;
  text-align: justify;
  text-justify: inter-ideograph;
}

#sns {
  margin-top: 10px;
}

>>> p + p {
  margin-top: 0.5em;
}

>>> ul {
  margin-top: 0.5em;
  padding: 0;
  list-style-type: none;
}

@media (min-width: 1000px) {
  .wrapper {
    width: 562px;
    display: grid;
    grid-template-columns: 250px 300px;
    column-gap: 12px;
  }

  #left {
    grid-column: 1;
    align-self: center;
  }

  #right {
    grid-column: 2;
    align-self: center;
  }
}
</style>