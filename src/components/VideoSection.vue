<template>
  <section
    class="bg-white md:flex border-t-1 border-l-0 border-r-0 border-b-0 border-2 border-white "
  >
    <div class="video w-full md:w-2/3 h-full">
      <video
        class="w-full h-full"
        :src="`${store.video}`"
        muted
        autoplay
        loop
        preload="auto"
      />
    </div>
    <div
      class="info w-full md:w-1/3 flex justify-between items-start flex-col p-[2rem]"
    >
      <div>
        <span class="subtitle">{{ store.subtitle }}</span>
        <h1 class="title">{{ store.title }}</h1>
        <p>{{ store.text }}</p>
      </div>
      <button
        class="button-secondary border-black"
      >
        order now
      </button>
    </div>
  </section>
</template>

<script setup>
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
</script>

<style></style>
