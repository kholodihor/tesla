<script setup>
import { ref } from 'vue';
import { useModelXStore } from '../store/model_x';
import { useModelSStore } from '../store/model_s';
import Intro from '@/components/Intro.vue';
import Interior from '@/components/Interior.vue';
import Video from '@/components/Video.vue';
import Grid from '@/components/Grid.vue';
import InterSection from '../components/InterSection.vue';
import ImageTabs from '../components/ImageTabs.vue'
import ImageSection from '@/components/ImageSection.vue';
import VideoTabs from '../components/VideoTabs.vue'
import Specs from '../components/Specs.vue';

const store = useModelXStore();
const storeS = useModelSStore();
</script>

<template>
    <div class="min-h-screen w-screen">
        <Intro :store="store.intro" />
        <Interior :store="storeS.interior" />
        <Video :store="storeS.videoSlider" />
        <Grid :store="storeS.grid" />
        <InterSection :store="store.ludicrous" />
        <ImageTabs :store="storeS.tabs" />
        <ImageSection :store="store.evenmore" />
        <InterSection :store="store.designed" />
        <Grid :store="store.grid2" />
        <ImageSection :store="store.anywhere" />
        <ImageTabs :store="storeS.maps" />
        <ImageSection :store="storeS.imageSection" />
        <InterSection :store="storeS.future" :marker="'future'" />
        <VideoTabs :store="storeS.autopilot" />
        <Specs :store="store.specs" />
    </div>
</template>