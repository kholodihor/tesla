<template>
    <Intro :store="store.intro" />
    <InterSection :store="store.beautiful" />
    <ImageSection :store="store.backup" />
    <VideoSection :store="store.durability" />
    <VideoTabs :store="store.installation" />
    <ImageSection :store="store.efficiency" />
    <InterSection :store="store.monitoring" />
    <ImageSection :store="store.payless" />
    <Specs :store="store.specs" />
</template>

<script setup>
import { computed,reactive } from 'vue';
import { useHead } from '@vueuse/head';
import { useSolarRoofStore } from '@/stores/solarroof';
import Intro from '@/components/Intro.vue';
import ImageSection from '@/components/ImageSection.vue';
import InterSection from '@/components/InterSection.vue';
import VideoTabs from '@/components/VideoTabs.vue'
import Specs from '@/components/Specs.vue';
import VideoSection from '@/components/VideoSection.vue';

const siteData =  reactive({
  title:'Solar Roof'
})

useHead({
  title:computed(()=>siteData.title)
})

const store = useSolarRoofStore();
</script>

