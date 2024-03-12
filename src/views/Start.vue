<script setup>
import { ref, computed } from "vue";
import { useConfigStore } from "@/pinia/ConfigStore.js";
import QrcodeVue from "qrcode.vue";

const config = useConfigStore();
const data = "https://dn.se";
</script>

<template>
  <div className="grid">
    <div className="col-12">
      <div className="card">
        <QrcodeVue
          :value="data"
          size="300"
          level="H"
        />
        <hr />
        Config:
        <samp>{{ config }}</samp>
        <hr />
      </div>
    </div>
  </div>
</template>
