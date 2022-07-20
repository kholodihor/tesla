<template>
  <div class="flex justify-center items-center flex-col bg-black p-[2rem]">
    <div class="w-[90vw] h-[50vh] sm:h-[70vh] md:h-[90vh]">
      <video
        class="w-full h-full object-cover rounded-3xl"
        :src="`${activeSlide.video}`"
        muted
        loop
        autoplay
        preload="true"
      />
    </div>
    <div
      class="
        w-[60vw]
        flex flex-col
        justify-center
        items-start
        gap-[1rem]
        mt-[2rem]
      "
    >
      <div class="tabs flex gap-[0.5rem]">
        <div
          class="cursor-pointer  w-[15px] h-[15px] rounded-full"
          v-for="(tab, index) in store"
          :key="index"
          @click="changeActiveSlide(index)"
          :class="[tab == activeSlide ? 'bg-gray-200' : 'bg-gray-500']"
        ></div>
      </div>
      <div class="w-[45vw] flex justify-center items-start flex-col">
        <h3 class="text-white my-5 font-bold">
          {{ activeSlide.title }}
        </h3>
        <p class="text-white text-[0.9rem]">
          {{ activeSlide.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const visibleSlide = ref(0);

const props = defineProps({
  store: {
    video: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
});

const activeSlide = ref(props.store[0]);

const changeActiveSlide = (index) => {
  activeSlide.value = props.store[index];
};
</script>
