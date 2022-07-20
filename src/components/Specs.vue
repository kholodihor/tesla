<template>
  <section class="w-screen min-h-screen flex-wrap lg:flex">
    <div class="w-full lg:w-1/2">
      <img class="w-full" :src="`${activeTab.image}`" alt="" />
    </div>
    <div
      class="w-full lg:w-1/2 text-white flex flex-col justify-center items-center lg:items-start p-[1rem]"
    >
      <h1 class="title">{{ activeTab.tab }} specs</h1>
      <div
        class="buttons w-full sm:flex justify-center lg:justify-start items-center gap-2 mb-[2rem]"
      >
        <button
          v-for="(item, index) in store"
          :key="index"
          @click="changeActiveTab(index)"
          class="button-secondary"
          :class="[item == activeTab ? ' border-white' : 'border-gray-500']"
        >
          {{ item.tab }}
        </button>
      </div>
      <ul
        class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-2 w-full gap-[0.5rem]"
      >
        <li
          class="p-[1rem] xl:p-[0.5rem] flex flex-col text-xs md:text-sm"
          v-for="(item, index) in activeTab.specs"
          :key="index"
        >
          <div class="line w-1/4 h-[1px] bg-white mb-[0.5rem]"></div>
          <span>{{ item.desc }}</span>
          <span>{{ item.number }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  store: {
    image: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
  },
});

const activeTab = ref(props.store[0]);

const changeActiveTab = (index) => {
  activeTab.value = props.store[index];
};
</script>
