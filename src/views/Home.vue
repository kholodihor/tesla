<script setup>
import HomeSection from '@/components/HomeSection.vue';
import { useHomeSectionsStore } from '@/stores/homesections.store';

const sections = useHomeSectionsStore().homeSections;
</script>

<template>
    <HomeSection v-for="(section, index) in sections" :key="index" :section="section" />
</template>


