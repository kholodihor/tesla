<script setup>
import Navbar from '@/components/Navbar.vue';

</script>

<template>
  <div>
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
