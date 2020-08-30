<template>
  <header>
    <figure>
      <img :src="currentProduct.thumbnail" :alt="currentProduct.title" />
    </figure>
    <h1>{{currentProduct.title}}</h1>
    <p class="meta">{{currentProduct.category.name}} / {{currentProduct.created_at | date}}</p>
    <div class="text" v-html="currentProduct.text"></div>
    <SNSIconList
      id="sns"
      :facebook="getFacebookShareURL"
      :twitter="getTwitterShareURL"
      :email="getEmailShareURL"
    />
  </header>
</template>

<script>
import { mapState } from "vuex";
import SNSIconList from "@/components/SNSIconList.vue";

export default {
  name: "ProductAbout",
  computed: {
    ...mapState(["currentProduct"]),
    getTwitterShareURL() {
      return `https://twitter.com/intent/tweet?text=${this.currentProduct.title}&url=${document.URL}&via=toritoritorina`;
    },
    getFacebookShareURL() {
      return `https://www.facebook.com/sharer/sharer.php?u=${document.URL}`;
    },
    getEmailShareURL() {
      return `javascript:location.href='mailto:?Subject=${this.currentProduct.title}&body=' + document.URL;void(0);`;
    },
  },
  filters: {
    date: function (value) {
      const date = new Date(value);
      return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
    },
  },
  components: {
    SNSIconList,
  },
};
</script>

<style scoped>
header {
}

figure {
  line-height: 1;
}

img {
  border-radius: 50%;
  width: 90px;
  height: 90px;
  object-fit: cover;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  margin: 3px 0;
}

.meta {
  font-family: roboto, sans-serif;
  font-size: 16px;
}

.text {
  margin-top: 10px;
  widows: 230px;
}

#sns {
  margin-top: 10px;
}
</style>