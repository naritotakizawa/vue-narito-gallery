<template>
  <ul>
    <li v-if="this.twitter">
      <a :href="this.twitter" target="_blank" rel="noopener">
        <img src="@/assets/twitter.svg" class="icon" />
      </a>
    </li>
    <li v-if="this.facebook">
      <a :href="this.facebook" target="_blank" rel="noopener">
        <img src="@/assets/facebook.svg" class="icon" />
      </a>
    </li>
    <li v-if="this.email">
      <a :href="this.email" rel="noopener">
        <img src="@/assets/messages.svg" class="icon" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SNSIconList",
  props: ["twitter", "facebook", "email"],
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  line-height: 1;
}
li {
  display: inline-block;
  padding: 0 11px;
}
.icon {
  width: 21px;
  height: 21px;
}
</style>
