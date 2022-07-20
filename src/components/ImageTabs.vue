<template>
  <section class="flex justify-center items-center flex-col bg-white py-[10vh]">
    <div class="w-[80vw] flex justify-center items-start flex-col mb-[2rem]">
      <h1 class="title">{{ activeTab.mainTitle }}</h1>
      <p class="w-full sm:w-[70%]">{{ activeTab.mainText }}</p>
    </div>
    <div class="w-[90vw] h-[50vh] sm:h-[70vh] md:h-[100vh]">
      <img
        class="w-full h-full object-cover rounded-3xl"
        :src="`${activeTab.image}`"
        alt=""
      />
    </div>
    <div class="tabs ">
      <div
        class="tab"
        v-for="(tab, index) in store"
        :key="index"
        @click="changeActiveTab(index)"
        :class="[tab == activeTab ? 'text-black' : 'text-gray-500']"
      >
        <div
          class="line w-full bg-black mb-[1rem]"
          :class="[tab == activeTab ? 'h-[5px]' : 'h-[2px]']"
        ></div>
        <h3 class="text-sm lg:text-lg font-bold mb-[1rem]">{{ tab.title }}</h3>
        <p>{{ tab.text }}</p>

        <ul class="flex justify-start items-center gap-3 px-0 w-full">
          <li
            class="w-[30%] flex flex-col justify-start items-start h-full"
            v-for="(item, index) in tab.characteristics"
            :key="index"
          >
            <h2 class="text-md lg:text-xl font-bold">{{ item.number }}</h2>
            <span class="text-xs lg:text-sm">{{ item.desc }}</span>
          </li>
        </ul>
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

<style></style>
