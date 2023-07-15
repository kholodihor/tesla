<template>
        <Intro :store="store.intro" />
        <ImageSection :store="store.imageSection" />
        <InterSection :store="store.quickest" />
        <InterSection :store="store.dualmotor" />
        <InterSection :store="storeS.future" :marker="'future'" />
        <InterSection :store="store.built" />
        <Specs :store="storeS.specs" />
</template>

<script setup>
import { computed,reactive } from 'vue';
import { useHead } from '@vueuse/head';
import { useModel3Store } from '@/stores/model_3';
import { useModelSStore } from '@/stores/model_s';
import Intro from '@/components/Intro.vue';
import ImageSection from '@/components/ImageSection.vue';
import InterSection from '@/components/InterSection.vue';
import Specs from '@/components/Specs.vue';

const siteData =  reactive({
  title:'Model 3 | Tesla'
})

useHead({
  title:computed(()=>siteData.title)
})

const store = useModel3Store();
const storeS = useModelSStore();
</script>