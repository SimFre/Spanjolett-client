<script setup>
  import { ref, computed } from "vue";
  import { useConfigStore } from "@/pinia/ConfigStore.js";
  const config = useConfigStore();

</script>

<template>
  <h1>HIIIIII</h1>
  <div className="grid">
    <div className="col-12">
      <div className="card">
        <h5>Welcome to Spanjolett</h5>
        <samp>{{ config.debug }}</samp>
      </div>
    </div>
  </div>
</template>
