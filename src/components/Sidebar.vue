<template>
    <div class="wrapper absolute top-[0] left-0 h-[100vh] w-screen bg-[rgba(0,0,0,0.4)] z-9999">
      <aside class="absolute top-0 right-0 h-[100vh] w-[18rem] overflow-y-scroll  text-gray-700  bg-white ">
        <ul class="flex  w-full h-[60%]  flex-col items-start justify-start  py-5 px-5 mb-5 ">
          <div class="mb-5 flex w-full justify-end px-5">
            <button @click="closeSidebar" class="cursor-pointer">
              <CloseIcon />
            </button>
          </div>
          <li v-for="(link, index) in links" :key="index" class="px-[1rem] text-sm font-bold capitalize py-3">
            {{ link }}
          </li>
        </ul>
      </aside>
    </div>
</template>

<script setup>
import CloseIcon from './CloseIcon.vue';
import { useSidebarLinksStore } from '@/store/sidebarlinks';

const links = useSidebarLinksStore().sidebarLinks;

const emit = defineEmits(['close']);

const closeSidebar = () => {
  emit('close');
};
</script>

<style scoped>

</style>

