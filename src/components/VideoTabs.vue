<template>
  <section class="flex justify-center items-center flex-col bg-white p-[2rem]">
    <div class="p-[2rem] md:h-[20vh] w-full sm:w-[80vw]">
      <h1 class="text-3xl font-bold mb-[2rem]">{{ activeTab.mainTitle }}</h1>
      <p class="w-full sm:w-[70%]">{{ activeTab.mainText }}</p>
    </div>
    <div class="w-[90vw] h-[50vh] sm:h-[70vh] md:h-[90vh]">
      <video
        class="w-full h-full object-cover rounded-3xl"
        :src="`${activeTab.video}`"
        muted
        loop
        autoplay
        preload="true"
      />
    </div>
    <div class="tabs">
      <div
        class="tab"
        v-for="(tab, index) in store"
        :key="index"
        @click="changeActiveTab(index)"
        :class="[tab == activeTab ? 'text-black' : 'text-gray-500']"
      >
        <div class="w-full">
          <div
            class="line w-full bg-black mb-[1rem]"
            :class="[tab == activeTab ? 'h-[5px]' : 'h-[2px]']"
          ></div>
          <h3 class="text-lg font-bold mb-[1rem]">{{ tab.title }}</h3>
          <p>{{ tab.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  store: {
    mainTitle: {
      type: String,
      required: true,
    },
    mainText: {
      type: String,
      required: true,
    },
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

const activeTab = ref(props.store[0]);

const changeActiveTab = (index) => {
  activeTab.value = props.store[index];
};
</script>
