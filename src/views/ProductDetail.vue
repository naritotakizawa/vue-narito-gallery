<template>
  <section class="container" v-if="currentProduct">
    <SimpleCard id="product-header" :data="currentProduct" />
    <SNSIconList
      id="sns"
      :facebook="getFacebookShareURL"
      :twitter="getTwitterShareURL"
      :email="getEmailShareURL"
    />
    <PreviewImage id="preview-image" :images="currentProduct.image_set" />
  </section>
</template>


<script>
import PreviewImage from "@/components/PreviewImage.vue";
import SimpleCard from "@/components/SimpleCard.vue";
import SNSIconList from "@/components/SNSIconList.vue";
import api from "@/api";

export default {
  name: "ProductDetail",
  data() {
    return {
      currentProduct: null,
    };
  },
  props: {
    id: {
      required: true,
    },
  },
  computed: {
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
  mounted() {
    api.product
      .retrieve(this.id)
      .then((res) => {
        this.currentProduct = res.data;
        document.title = `${this.currentProduct.title} - gallery.narito`;
        document
          .querySelector('meta[name="description"]')
          .setAttribute("content", "");
      })
      .catch((err) => {
        throw err;
      });
  },

  methods: {},
  components: {
    PreviewImage,
    SimpleCard,
    SNSIconList,
  },
};
</script>

<style scoped>
#product-header {
  margin: 96px auto 0 auto;
}

#sns {
  margin-top: 48px;
  text-align: center;
}

#preview-image {
  margin-top: 48px;
}
</style>