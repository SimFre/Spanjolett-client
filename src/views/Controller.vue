<script setup>
  import { ref, computed } from "vue";
  import { useConfigStore } from "@/pinia/ConfigStore.js";
  const config = useConfigStore();
  const props = defineProps(['slug']);
      // const props = "live"; // | vod | series
      // const slug = "live";
</script>

<template>
  <router-view :key="slug" />
</template>
