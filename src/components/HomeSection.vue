<template>
  <section class="relative min-h-screen w-screen" :style="{
    background: `url(${section.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment:'fixed'
  }">
    <div
      class="content absolute left-0 top-[15vh] flex h-3/4 w-screen flex-col justify-between items-center text-center">
      <div>
        <h1 class="title mb-1 text-[2.5rem] font-semibold" data-aos="fade-in" data-aos-duration="1000"
          data-aos-easing="ease-in-out">
          {{ section.title }}
        </h1>
        <p data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in-out">
          {{ section.text }}
        </p>
      </div>
      <div class="buttons flex-col justify-center gap-5 md:flex-row">
        <button class="button-main bg-[rgba(0,0,0,0.8)] text-white">
          {{ section.buttons[0] }}
        </button>
        <button v-if="section.buttons[1]" class="button-main bg-[rgba(255,255,255,0.8)] text-black">
          {{ section.buttons[1] }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  section: {
    image: String,
    title: String,
    text: String,
    buttons: Array,
  },
});
</script>

