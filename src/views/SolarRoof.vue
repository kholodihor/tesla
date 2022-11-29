<script setup>
import { useSolarRoofStore } from '@/store/solarroof';
import Intro from '@/components/Intro.vue';
import ImageSection from '@/components/ImageSection.vue';
import InterSection from '@/components/InterSection.vue';
import VideoTabs from '@/components/VideoTabs.vue'
import Specs from '@/components/Specs.vue';
import VideoSection from '@/components/VideoSection.vue';

const store = useSolarRoofStore();
</script>

<template>
    <div class="min-h-screen w-screen">
        <Intro :store="store.intro" />
        <InterSection :store="store.beautiful" />
        <ImageSection :store="store.backup" />
        <VideoSection :store="store.durability" />
        <VideoTabs :store="store.installation" />
        <ImageSection :store="store.efficiency" />
        <InterSection :store="store.monitoring" />
        <ImageSection :store="store.payless" />
        <Specs :store="store.specs" />
    </div>
</template>