<script setup>
    import AppMenu from './AppMenu.vue';
    const props = defineProps(['section']);
    const section = props.section;
</script>

<template>
    <b>{{ section }}</b>
    <AppMenu :section="section"></AppMenu>
</template>

<style lang="scss" scoped></style>
