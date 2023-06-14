<template>
  <div class="text-white px-2 py-[5rem] min-h-screen">
    <div
      v-for="(item, index) in store"
      :key="index"
      class="wrapper sm:flex justify-center items-center gap-[10vw] mb-[5rem]"
    >
      <div class="w-full sm:w-1/3">
        <img
          :src="`${item.image}`"
          :alt="`${item.title}`"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        />
      </div>
      <div class="w-full sm:w-1/3">
        <h3
          class="font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          {{ item.title }}
        </h3>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          data-aos-delay="20"
        >
          {{ item.text }}
        </p>
      </div>
    </div>
  </div>
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

<style scoped>
.wrapper:nth-child(even) {
  direction: rtl;
}
</style>
