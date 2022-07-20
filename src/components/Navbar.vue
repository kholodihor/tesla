<template>
  <div
    class="absolute z-[9999] py-5 flex h-[8vh] w-full items-center justify-center md:justify-around gap-10 md:gap-20"
    :class="[
      routerNow == '/' ||
      routerNow == '/model-3' ||
      routerNow == '/model-x' ||
      routerNow == '/solar-panels'
        ? 'text-black'
        : 'text-white',
    ]"
  >
    <div class="logo h-[1rem]">
      <router-link to="/"
        ><img class="h-[1rem] w-[8rem] " src="/logo.svg" alt=""
      /></router-link>
    </div>
    <Nav />
    <div class="flex gap-8 text-sm font-bold">
      <ul class="hidden gap-8 text-sm font-bold xl:flex">
        <li>Shop</li>
        <li>Account</li>
      </ul>
      <button @click="isSidebar = !isSidebar">Menu</button>
    </div>
    <Sidebar v-if="isSidebar" @close="closeSidebar" class="hidden xl:block" />
    <Mobilebar v-if="isSidebar" @close="closeSidebar" class="block xl:hidden" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import Nav from './Nav.vue';
import Sidebar from './Sidebar.vue';
import Mobilebar from './Mobilebar.vue';

const isSidebar = ref(false);
const router = useRouter();

const closeSidebar = () => {
  isSidebar.value = false;
};

const routerNow = computed(() => {
  return router.currentRoute.value.path;
});
</script>
