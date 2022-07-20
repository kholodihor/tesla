<template>
  <aside class="wrapper absolute top-0 left-0 h-[80vh] w-screen bg-[rgba(0,0,0,0.4)] z-9999">
    <div class="absolute top-0 right-0 h-[100vh] w-[18rem] overflow-y-scroll  text-gray-700  bg-white ">
      <ul class="flex  w-full  flex-col items-start justify-start  py-10 px-5 mb-5 ">
        <div class="mb-5 flex w-full justify-end px-5">
          <button @click="closeSidebar" class="cursor-pointer">
            <CloseIcon />
          </button>
        </div>
        <li @click="closeSidebar" v-for="(link, index) in links" :key="index"
          class="px-[1rem] text-sm font-bold capitalize py-3">
          <router-link :to="`${link.to}`">{{ link.name }}</router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import CloseIcon from './CloseIcon.vue';
import { usesidebarLinksStore } from '@/store/sidebarlinks';

const links = usesidebarLinksStore().mobilebarLinks;



const emit = defineEmits(['close']);

const closeSidebar = () => {
  emit('close');
};
</script>

<style>
</style>
