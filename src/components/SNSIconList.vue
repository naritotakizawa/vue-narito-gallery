<template>
  <ul>
    <li>
      <a href="#">
        <img src="@/assets/twitter.svg" class="icon" />
      </a>
    </li>
    <li>
      <a href="#">
        <img src="@/assets/facebook.svg" class="icon" />
      </a>
    </li>
    <li>
      <a href="#">
        <img src="@/assets/messages.svg" class="icon" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SNSIconList",
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
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
