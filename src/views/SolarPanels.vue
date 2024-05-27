<template>
  <Intro :store="store.intro" />
  <!-- <VideoSection :store="store.videoSection" /> -->
  <ImageSection :store="store.imageSection" />
  <InterSection :store="store.backup" />
  <InterSection :store="store.order" />
  <ImageSection :store="store.efficiency" />
  <InterSection :store="store.monitoring" />
  <Specs :store="store.specs" />
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'
import { useSolarPanelsStore } from '@/stores/solarpanels'
import Intro from '@/components/Intro.vue'
import ImageSection from '@/components/ImageSection.vue'
import InterSection from '@/components/InterSection.vue'
import Specs from '@/components/Specs.vue'
import VideoSection from '@/components/VideoSection.vue'

const siteData = reactive({
  title: 'Solar Panels'
})

useHead({
  title: computed(() => siteData.title)
})

const store = useSolarPanelsStore()
</script>
