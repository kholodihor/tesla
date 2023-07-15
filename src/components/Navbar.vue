<template>
  <div class="absolute z-[9999] py-5 flex h-[8vh] w-full items-center justify-center md:justify-around gap-10 md:gap-20"
    :class="[
      routeNow === '/' ||
        routeNow === '/model-3' ||
        routeNow === '/model-x' ||
        routeNow === '/solar-panels'
        ? 'text-black'
        : 'text-white',
    ]">
    <div class="logo h-[1rem]">
      <router-link to="/"><img class="h-[1rem] w-[8rem] " src="/logo.svg" alt="" :class="[
        routerNow === '/solar-roof'
        && 'invert'
      ]" /></router-link>
    </div>
    <Nav />
    <div class="flex gap-8 text-sm font-bold">
      <ul class="hidden gap-8 text-sm font-bold xl:flex">
        <li>Shop</li>
        <li>Account</li>
      </ul>
      <button @click="isSidebar = !isSidebar">Menu</button>
    </div>
    <Transition name="sidebar">
      <Sidebar v-if="isSidebar" @close="closeSidebar" class="hidden xl:block" />
    </Transition>
    <Transition name="sidebar">
      <Mobilebar v-if="isSidebar" @close="closeSidebar" class="block xl:hidden" />
    </Transition>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import Nav from './Nav.vue';
import Sidebar from './Sidebar.vue';
import Mobilebar from './Mobilebar.vue';

const isSidebar = ref(false);
const route = useRoute();

const closeSidebar = () => {
  isSidebar.value = false;
};

const routeNow = computed(() => {
  return route.path;
});
</script>

<style scoped>
.sidebar-enter-active,
.sidebar-leave-active {
  transition: all .5s ease;
}

.sidebar-enter-from,
.sidebar-leave-to {
  opacity: 0;
  transform: translateX(200%);
}
</style>