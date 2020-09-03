<template>
  <section>
    <img src="@/assets/profile.png" alt="Narito Takizawa" />
    <h1>Narito Takizawa</h1>
    <p>Webサイトやゲーム、デザイン、イラスト等を作成しています。</p>
    <SNSIconList
      id="sns"
      facebook="https://www.facebook.com/toritoritorina"
      twitter="https://twitter.com/toritoritorina"
      email="mailto:toritoritorina@gmail.com"
    />
  </section>
</template>

<script>
import SNSIconList from "./SNSIconList.vue";

export default {
  name: "Profile",
  components: {
    SNSIconList,
  },
};
</script>

<style scoped>
img {
  width: 90px;
  height: 90px;
}

h1 {
  font-size: 27px;
  font-weight: 900;
  margin: 3px 0;
  font-family: roboto, sans-serif;
  font-weight: 900;
  font-style: normal;
}

#sns {
  margin-top: 10px;
}
</style>