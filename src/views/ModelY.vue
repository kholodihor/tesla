<template>
    <Intro :store="store.intro" />
    <ImageSection :store="storeS.imageSection" />
    <Video :store="storeS.videoSlider" />
    <InterSection :store="store.dualmotor" />
    <VideoSection :store="store.videoSection" />
    <InterSection :store="storeS.future" :marker="'future'" />
    <InterSection :store="store.built" />
    <Specs :store="store.specs" />
</template>

<script setup>
import { useModelYStore } from '@/stores/model_y';
import { useModelSStore } from '@/stores/model_s';
import Intro from '@/components/Intro.vue';
import Video from '@/components/Video.vue';
import InterSection from '@/components/InterSection.vue';
import Specs from '@/components/Specs.vue';
import VideoSection from '@/components/VideoSection.vue';

const store = useModelYStore();
const storeS = useModelSStore();
</script>