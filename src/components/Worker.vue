<template>
  <div class="worker" :class="`worker-${type}`" />
</template>

<script>
export default {
  name: "Worker",
  data() {
    return {
      type: Math.floor(Math.random() * 30) + 1
    };
  }
};
</script>

<style lang="scss">
.worker {
  display: block;
  width: 48px;
  height: 128px;
  background: url("../assets/workers_spritesheet.png");
}

.worker-1 {
  background-position: 0 0;
}
.worker-2 {
  background-position: calc(48px * -1) 0;
}
.worker-3 {
  background-position: calc(48px * -2) 0;
}
.worker-4 {
  background-position: calc(48px * -3) 0;
}
.worker-5 {
  background-position: calc(48px * -4) 0;
}
.worker-6 {
  background-position: calc(48px * -5) 0;
}
.worker-7 {
  background-position: calc(48px * -6) 0;
}
.worker-8 {
  background-position: calc(48px * -7) 0;
}
.worker-9 {
  background-position: calc(48px * -8) 0;
}
.worker-10 {
  background-position: calc(48px * -9) 0;
}
.worker-11 {
  background-position: 0 calc(128px * -1);
}
.worker-12 {
  background-position: calc(48px * -1) calc(128px * -1);
}
.worker-13 {
  background-position: calc(48px * -2) calc(128px * -1);
}
.worker-14 {
  background-position: calc(48px * -3) calc(128px * -1);
}
.worker-15 {
  background-position: calc(48px * -4) calc(128px * -1);
}
.worker-16 {
  background-position: calc(48px * -5) calc(128px * -1);
}
.worker-17 {
  background-position: calc(48px * -6) calc(128px * -1);
}
.worker-18 {
  background-position: calc(48px * -7) calc(128px * -1);
}
.worker-19 {
  background-position: calc(48px * -8) calc(128px * -1);
}
.worker-20 {
  background-position: calc(48px * -9) calc(128px * -1);
}
.worker-21 {
  background-position: 0 calc(128px * -2);
}
.worker-22 {
  background-position: calc(48px * -1) calc(128px * -2);
}
.worker-23 {
  background-position: calc(48px * -2) calc(128px * -2);
}
.worker-24 {
  background-position: calc(48px * -3) calc(128px * -2);
}
.worker-25 {
  background-position: calc(48px * -4) calc(128px * -2);
}
.worker-26 {
  background-position: calc(48px * -5) calc(128px * -2);
}
.worker-27 {
  background-position: calc(48px * -6) calc(128px * -2);
}
.worker-28 {
  background-position: calc(48px * -7) calc(128px * -2);
}
.worker-29 {
  background-position: calc(48px * -8) calc(128px * -2);
}
.worker-30 {
  background-position: calc(48px * -9) calc(128px * -2);
}
</style>
