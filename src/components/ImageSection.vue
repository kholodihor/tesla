<template>
  <section
    class="bg-white lg:flex border-t-1 border-l-0 border-r-0 border-b-0 border-2 border-white p-[1rem] md:p-[2rem]">
    <div class="info ">
      <div>
        <span class="subtitle">{{ store.subtitle }}</span>
        <h1 class="title">{{ store.title }}</h1>
        <p>{{ store.text }}</p>
      </div>
      <button class="border-black button-secondary">order now</button>
    </div>
    <div class="video w-full lg:w-2/3 h-full">
      <img class="w-full h-full" :src="`${store.image}`" alt="" />
    </div>
  </section>
</template>

<script setup>
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
    text: {
      type: String,
      required: true,
    },
  },
});
</script>

<style>
</style>
