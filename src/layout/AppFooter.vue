<script setup>
import { useLayout } from "@/layout/composables/layout";
import { computed } from "vue";

const { layoutConfig, contextPath } = useLayout();

const logoUrl = computed(() => {
  return `${contextPath}images/${
    layoutConfig.darkTheme.value ? "logo-dark" : "logo-white"
  }.png`;
});
</script>

<template>
  <div class="layout-footer">
    <img
      :src="logoUrl"
      alt="Logo"
      height="20"
      class="mr-2"
    />
    <span class="font-medium ml-2">Spanjolett</span>
  </div>
</template>
<style lang="scss" scoped></style>
