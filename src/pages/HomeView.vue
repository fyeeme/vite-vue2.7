<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
import { useRoute, useRouter } from "@/utils/vue-router.ts";
import { onMounted } from "vue";
import { useCounterStore } from "@/stores/counter";

const router = useRouter();
const route = useRoute();

const demoApi = () => {
  return Promise.resolve(22);
};
const getDemoAPi = async () => {
  const res = await demoApi();

  console.log("res", res);
};

const counterStore = useCounterStore();
onMounted(() => {
  counterStore.increment();
  console.log(11, counterStore.counter, counterStore.doubleCount);
  console.log("router", route, router);
  getDemoAPi();
});
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
