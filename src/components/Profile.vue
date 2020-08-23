<template>
  <section>
    <img src="@/assets/profile.png" alt="Narito Takizawa" />
    <h1>Narito Takizawa's Gallery</h1>
    <p>Webサイトやゲーム、デザイン、イラスト等を作成しています。</p>
    <SNSIconList id="sns" />
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
section {
  text-align: center;
}

img {
  width: 120px;
  height: 120px;
}

h1 {
  font-size: 36px;
  font-weight: 900;
  margin: 10px 0;
}

p {
  width: 300px;
  text-align: center;
  margin: 0 auto;
}

#sns {
  margin-top: 15px;
}
</style>