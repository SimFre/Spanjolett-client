<script setup>
import { ref, computed } from "vue";
import { useConfigStore } from "@/pinia/ConfigStore.js";
const config = useConfigStore();
</script>

<template>
  <div className="grid">
    <div className="col-12">
      <div className="card">
        <hr />
        Config:
        <samp>{{ config }}</samp>
        <hr />
      </div>
    </div>
  </div>
</template>
