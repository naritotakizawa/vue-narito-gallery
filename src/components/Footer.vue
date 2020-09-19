<template>
  <footer class="container">
    <SNSIconList
      id="sns"
      facebook="https://www.facebook.com/toritoritorina"
      twitter="https://twitter.com/toritoritorina"
      email="mailto:toritoritorina@gmail.com"
    />
    <p>Copyright 2020 Narito Takizawa.</p>
  </footer>
</template>

<script>
import SNSIconList from "@/components/SNSIconList.vue";
export default {
  name: "Footer",
  components: {
    SNSIconList,
  },
};
</script>


<style scoped>
#sns {
  text-align: center;
}

p {
  margin: 12px 0;
  font-family: roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  text-align: center;
}
</style>
