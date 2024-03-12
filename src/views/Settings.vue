
<script setup>
  import { useConfigStore } from "@/pinia/ConfigStore.js";
  const config = useConfigStore();
</script>

<template>
  <div class="surface-section border-1">
    <div class="font-medium text-3xl text-900 mb-3">Application Settings</div>
    <ul class="list-none p-0 m-0">
      <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
        <div class="text-500 w-6 md:w-2 font-medium">Hostname</div>
        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
          <InputText />
        </div>
      </li>
      <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
        <div class="text-500 w-6 md:w-2 font-medium">Username</div>
        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
          <InputText />
        </div>
      </li>
      <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
        <div class="text-500 w-6 md:w-2 font-medium">Password</div>
        <InputText />
      </li>
      <li class="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap">
        <div class="text-500 w-6 md:w-2 font-medium"></div>
        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
          <Button label="Save"
                  icon="pi pi-save"
                  class="p-button-success"
                  @click="config.save()"></Button>
        </div>
      </li>
    </ul>
  </div>
</template>