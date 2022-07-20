<script setup>
import { useModel3Store } from '../store/model_3';
import { useModelSStore } from '../store/model_s';
import Intro from '@/components/Intro.vue';
import ImageSection from '@/components/ImageSection.vue';
import InterSection from '../components/InterSection.vue';
import VideoTabs from '../components/VideoTabs.vue'
import Specs from '../components/Specs.vue';

const store = useModel3Store();
const storeS = useModelSStore();
</script>

<template>
    <div class="min-h-screen w-screen">
        <Intro :store="store.intro" />
        <ImageSection :store="store.imageSection" />
        <InterSection :store="store.quickest" />
        <InterSection :store="store.dualmotor" />
        <InterSection :store="storeS.future" :marker="'future'" />
        <InterSection :store="store.built" />
        <Specs :store="storeS.specs" />
    </div>
</template>