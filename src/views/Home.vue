<script setup>
import { computed, reactive } from 'vue';
import { useHead } from '@vueuse/head';
import HomeSection from '@/components/HomeSection.vue';
import { useHomeSectionsStore } from '@/stores/homesections.store';

const siteData = reactive({
  title: 'Tesla'
})

useHead({
  title: computed(() => siteData.title)
})

const sections = useHomeSectionsStore().homeSections;
</script>

<template>
      <HomeSection v-for="(section, index) in sections" :key="index" :section="section" />
</template>


