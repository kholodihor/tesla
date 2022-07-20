<template>
  <section
    class="w-screen h-[50vh] sm:h-[70vh] md:h-[90vh] xl:h-[120vh]"
    :style="{
      background: `url(${store.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <div
      class="title-box w-full h-[10vh] xl:h-[30vh] bg-black text-white text-center flex justify-center items-center"
    >
      <h1
        class="text-[1.7rem] font-semibold capitalize"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        {{ store.title }}
      </h1>
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
  },
});
</script>

<style scoped>
.title-box {
  box-shadow: rgba(0, 0, 0, 1) 0px 54px 55px, rgba(0, 0, 0, 1) 0px -20px 30px,
    rgba(0, 0, 0, 1) 0px 4px 6px, rgba(0, 0, 0, 1) 0px 12px 13px,
    rgba(0, 0, 0, 1) 0px -3px 5px;
}
</style>
