<template>
  <img class="cookie" src="../assets/cookie.png" @click="handleClickCookie" />
</template>

<script>
export default {
  name: "Cookie",
  methods: {
    handleClickCookie() {
      this.$emit("clicked");
    }
  }
};
</script>

<style lang="scss">
.cookie {
  display: block;
  height: 200px;
  width: 200px;
  transition: transform 200ms ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
}
</style>
