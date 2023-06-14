<template>
    <Intro :store="store.intro" />
    <VideoSection :store="store.videoSection" />
    <ImageSection :store="store.imageSection" />
    <InterSection :store="store.backup" />
    <InterSection :store="store.order" />
    <ImageSection :store="store.efficiency" />
    <InterSection :store="store.monitoring" />
    <Specs :store="store.specs" />
</template>

<script setup>
import { useSolarPanelsStore } from '@/stores/solarpanels';
import Intro from '@/components/Intro.vue';
import ImageSection from '@/components/ImageSection.vue';
import InterSection from '@/components/InterSection.vue';
import Specs from '@/components/Specs.vue';
import VideoSection from '@/components/VideoSection.vue';

const store = useSolarPanelsStore();
</script>