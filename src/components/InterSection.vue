<template>
  <section class="bg-white pt-[10vh] px-[1rem]">
    <div
      class="w-full h-[50vh] xl:h-[70vh]"
      :style="{
        background: `url(${store.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }"
    >
      <div
        class="w-full h-full flex justify-center items-end"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <div
          class="flex justify-around items-center w-[80vw] mb-[3vh]"
          :class="[marker == 'future' ? 'text-black' : 'text-white']"
        >
          <ul class="sm:flex text-center justify-around w-full px-[0.5rem]">
            <li
              v-for="(item, index) in store.characteristics"
              :key="index"
              class="min-w-[40%] m-[0.5rem]"
            >
              <h4 class="text-[1.3rem] sm:text-[1.7rem] font-semibold">
                {{ item.number }}
              </h4>
              <span class="text-xs sm:text-sm">{{ item.desc }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="p-[1rem] sm:flex gap-5 w-[80vw] mx-auto mt-[2rem]">
      <div
        class="w-full sm:w-1/3 flex justify-center items-start flex-col text-left"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <span class="subtitle">{{ store.subtitle }}</span>
        <h1 class="title">{{ store.title }}</h1>
        <button
          class="button-secondary border-black"
        >
          order now
        </button>
      </div>
      <div
        class="w-full sm:w-2/3"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <p>{{ store.text }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  marker: {
    type: String,
    required: false,
  },
  store: {
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
    text: {
      type: String,
      required: true,
    },
    characteristics: {
      type: Object,
      required: false,
    },
  },
});
</script>
