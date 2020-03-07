<template>
  <div class="home">
    <section class="home__content">
      <h1>COOKIE CLICKER MUITO LOCO</h1>
      <Cookie class="cookie" @clicked="onClickCookie" />
      <section class="score"><b>CLICKS:</b> {{ clicks }}</section>
    </section>
    <button class="reset" @click="onClickReset">
      RESET
    </button>
    <hr />
    <section class="inventory">
      <div class="inventory__row">
        <img class="inventory__computer" src="../assets/buy_computer.png" />
        <b>COMPUTADORES:</b> {{ computers }}
        <button class="inventory__buy" @click="buyItem('computers')">
          Comprar (50 clicks)
        </button>
      </div>
      <div class="inventory__row">
        <img class="inventory__worker" src="../assets/buy_worker.png" />
        <b>FUNCIONÁRIOS:</b> {{ workers }}
        <button class="inventory__buy" @click="buyItem('workers')">
          Comprar (100 clicks)
        </button>
      </div>
    </section>
    <hr />
    <section class="office">
      <Computer v-for="index in computers" :key="`computer-${index}`" />
      <Worker v-for="index in workers" :key="`worker-${index}`" />
    </section>
  </div>
</template>

<script>
import Cookie from "@/components/Cookie.vue";
import Computer from "@/components/Computer.vue";
import Worker from "@/components/Worker.vue";

const price = {
  computers: 50,
  workers: 100
};

export default {
  name: "Home",
  components: {
    Cookie,
    Computer,
    Worker
  },
  data() {
    return {
      interval: null,
      clicks: 0,
      computers: 0,
      workers: 0
    };
  },
  methods: {
    buyItem(item) {
      if (this.clicks < price[item]) return;
      if (item === "workers" && this.workers >= this.computers) return;
      this[item] += 1;
      this.clicks -= price[item];
      this.$cookies.set("clicks", this.clicks);
      this.$cookies.set([item], this[item]);
    },
    workersClick() {
      this.clicks += this.workers;
      this.$cookies.set("clicks", this.clicks);
    },
    onClickCookie() {
      this.clicks += 1;
      this.$cookies.set("clicks", this.clicks);
    },
    onClickReset() {
      this.clicks = 0;
      this.computers = 0;
      this.workers = 0;
      this.$cookies.remove("clicks");
      this.$cookies.remove("computers");
      this.$cookies.remove("workers");
    }
  },
  destroyed() {
    clearInterval(this.interval);
  },
  created() {
    this.clicks = Number(this.$cookies.get("clicks"));
    this.computers = Number(this.$cookies.get("computers"));
    this.workers = Number(this.$cookies.get("workers"));
    this.interval = setInterval(this.workersClick, 1000);
  }
};
</script>

<style lang="scss">
.home {
  &__content {
    margin: auto;
  }
  margin: auto;
  hr {
    color: lightgrey;
    width: 50%;
  }
}

.cookie {
  margin: 32px auto;
}

.inventory {
  width: 50%;
  margin: 32px auto;
  &__row {
    display: flex;
    align-items: center;
    b {
      margin-right: 1rem;
    }
    & ~ & {
      margin-top: 20px;
    }
  }
  &__computer,
  &__worker {
    display: block;
    width: 30px;
    height: 30px;
    margin-right: 30px;
  }
  &__buy {
    margin-left: auto;
  }
}

.office {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
}
</style>
