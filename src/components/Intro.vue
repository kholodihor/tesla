<template>
  <section
    class="intro flex w-screen min-h-screen justify-between items-center flex-col py-[5vh]"
    :class="[
      routeNow === '/model-3' ||
      routeNow === '/model-x' ||
      routeNow === '/solar-panels'
        ? 'text-black'
        : 'text-white',
    ]"
    :style="{
      background: `url(${store.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <div class=" mt-[11vh] text-center">
      <h1 class="text-[2.5rem] font-semibold tracking-wide">
        {{ store.title }}
      </h1>
      <p class="subtitle">
        {{ store.subtitle }}
      </p>
    </div>
    <div
      class="lg:flex justify-around items-center w-[80vw] text-white mb-[3vh]"
    >
      <ul class="flex text-center justify-around gap-2 w-full">
        <li
          class="min-w-[25%]"
          v-for="(item, index) in store.characteristics"
          :key="index"
        >
          <h4
            class="text-[1rem] sm:text-[1.3rem] md:text-[1.7rem] font-semibold"
          >
            {{ item.number }}
          </h4>
          <span class="text-sm">{{ item.desc }}</span>
        </li>
      </ul>
      <button
        class="w-[40vw] lg:w-[15vw] rounded-full border-[3px] border-white py-[0.6rem] px-[1rem] text-xs uppercase outline-none mt-[1rem] mx-auto block whitespace-nowrap"
      >
        order now
      </button>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
const route = useRoute();
const props = defineProps({
  store: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    characteristics: {
      type: Object,
      required: true,
    },
  },
});

const routeNow = computed(() => {
  return route.path;
});
</script>
