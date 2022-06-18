<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
import { useRoute, useRouter } from "@/utils/vue-router.ts";
import { onMounted } from "vue";
// import { useCounterStore } from "@/stores/counter";

const router = useRouter();
const route = useRoute();
// const counterStore = useCounterStore();
onMounted(() => {
  // counterStore.increment();
  // console.log(11, counterStore.counter, counterStore.doubleCount);
  console.log("router", route, router);
});
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
