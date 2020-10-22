<template>
  <transition>
    <article v-if="product" id="container" :key="product.id">
      <figure :key="index" id="current-image">
        <img :src="getCurrentImage.src" :alt="getCurrentImage.alt" />
      </figure>
      <header class="content">
        <h1>{{ product.title }}</h1>
        <p class="meta">
          {{ product.category.name }} / {{ product.created_at | date }}
        </p>
        <div class="text" v-html="product.text"></div>
      </header>

      <router-link :to="{ name: 'home' }" id="close">
        <i class="icon-cancel icon icon-big"></i>
      </router-link>

      <a id="prev" href @click.prevent="index--" v-if="hasPrev">
        <i class="icon-left-open icon icon-big"></i>
      </a>
      <a id="next" href @click.prevent="index++" v-if="hasNext">
        <i class="icon-right-open icon icon-big"></i>
      </a>
    </article>
  </transition>
</template>


<script>
import api from "@/api";

export default {
  name: "ProductDetail",
  data() {
    return {
      product: null,
      index: 0,
    };
  },

  filters: {
    date: function (value) {
      const date = new Date(value);
      return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
    },
  },
  props: {
    id: {
      required: true,
    },
  },
  computed: {
    getCurrentImage() {
      if (this.product.image_set.length === 0) {
        return this.product;
      }
      return this.product.image_set[this.index];
    },

    hasNext() {
      return this.index < this.product.image_set.length - 1;
    },

    hasPrev() {
      return this.index !== 0;
    },
  },
  mounted() {
    api.product
      .retrieve(this.id)
      .then((res) => {
        this.product = res.data;
        document.title = `${this.product.title} - gallery.narito`;
        document
          .querySelector('meta[name="description"]')
          .setAttribute("content", "");
      })
      .catch((err) => {
        throw err;
      });
  },

  methods: {},
};
</script>

<style scoped>
article {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 3;

  display: flex;
  align-items: center;
}

#current-image {
  width: 100%;
  margin: 0 auto;
}
img {
  width: 100%;
  max-height: 100vh;
  object-fit: cover;
  object-position: top;
}
@media (min-width: 1000px) {
  #current-image {
    max-width: 600px;
  }
}

header {
  display: none;
}

#close {
  position: fixed;
  top: 10px;
  left: 10px;
}

#prev {
  position: fixed;
  left: 10px;
  top: calc(50% - 50px);
}

#next {
  position: fixed;
  right: 10px;
  top: calc(50% - 50px);
}

@media (min-width: 768px) {
  #close {
    top: 30px;
    left: 10px;
  }

  #prev {
    left: 10px;
  }

  #next {
    right: 10px;
  }
}

@media (min-width: 1000px) {
  header {
    display: block;
    top: 30px;
    right: 20px;
    position: fixed;
    width: 200px;
  }
}

@media (min-width: 1100px) {
  #close {
    left: 60px;
  }

  #prev {
    left: 60px;
  }

  #next {
    right: 60px;
  }
  header {
    right: 60px;
  }
}

.content {
  text-align: right;
}

h1 {
  font-size: 15px;
  font-weight: 500;
  margin-top: 20px;
  font-family: fot-cezanne-pron, sans-serif;
}

.meta {
  font-family: futura-pt, sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #999;
}

.text {
  width: 200px;
  text-align: justify;
  text-justify: inter-ideograph;
  font-size: 12px;
  margin-top: 3px;
  margin-left: auto;
}

>>> p + p {
  margin-top: 0.5em;
}

>>> ul {
  margin-top: 0.5em;
  padding: 0;
  list-style-type: none;
}

>>> a {
  text-decoration: underline;
  color: blue;
}
</style>