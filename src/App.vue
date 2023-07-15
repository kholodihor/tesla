<script setup>
import Navbar from '@/components/Navbar.vue';
import { computed,reactive } from 'vue';
import { useHead } from '@vueuse/head';
import { onMounted } from 'vue';

const siteData =  reactive({
  title:'My Site',
  description:'Description'
})

useHead({
  title:computed(()=>siteData.title)
})

// const { title } = useHead();


// title.value = 'My App';
</script>

<template>
  <div>

    <head>

    </head>
    <header>
      <Navbar />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>



<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');

html {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  overflow-x: hidden;
}
</style>
