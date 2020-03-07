<template>
  <div class="home">
    <section class="home__content">
      <h1>COOKIE CLICKER MUITO LOCO</h1>
      <Cookie class="home__cookie" @clicked="onClickCookie" />
      <section class="home__score"><b>CLICKS:</b> {{ clicks }}</section>
    </section>
    <button @click="onClickReset">
      RESET
    </button>
  </div>
</template>

<script>
import Cookie from "@/components/Cookie.vue";

export default {
  name: "Home",
  components: {
    Cookie
  },
  data() {
    return {
      clicks: 0
    };
  },
  methods: {
    onClickCookie() {
      this.clicks += 1;
      this.$cookies.set("clicks", this.clicks);
    },
    onClickReset() {
      this.clicks = 0;
      this.$cookies.remove("clicks");
    }
  },
  created() {
    this.clicks = Number(this.$cookies.get("clicks"));
  }
};
</script>

<style lang="scss">
.home {
  &__content {
    margin: auto;
  }
  margin: auto;
  &__cookie {
    margin: 32px auto;
  }
}
</style>
